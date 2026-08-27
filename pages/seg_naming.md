---

layout: page
permalink: /seg/naming

title: "Muscle segmentation naming"
subheadline: "Standardized in QMRITools"
teaser: "A generalized muscle naming convention"

header: no

images:
  - image_id: 'lower'
    image_name: 'LowerLimb.gif'
    image_title: 'muscles of the lower limb'
    image_alt: 'muscles of the lower limb' 

tags: 
  - segment

---

A canonical numeric ID and data format for muscles, bones, and groups.
It is designed to work as a translation layer: any lab, tool, or piece of
software can map its own local label numbers to these canonical IDs, and
translate between systems through them.

The format is a plain data file (JSON), readable by any language or tool.
This document describes the ID scheme and record structure.

## ID scheme

Every entry has one integer ID:

`id = region * 1000 + index * 10 + side`

### region (1 digit)

The body part the entry belongs to. Nine slots, all currently in use:

| # | region |
| --- | --- |
| 1 | Head |
| 2 | Neck |
| 3 | Shoulder |
| 4 | Arm |
| 5 | Thorax |
| 6 | Hip |
| 7 | Thigh |
| 8 | Leg |
| 9 | Bones |

### index (2 digits)

Position within the region, split by type:

| range | meaning |
| --- | --- |
| `01–69` | a muscle |
| `70–99` | a group |

### side (1 digit)

| value | meaning |
| --- | --- |
| `0` | none — no left/right distinction (midline structures) |
| `1` | left |
| `2` | right |
| `3` | both — one entry covering left and right together |

## type: muscle vs. bone vs. group

Every entry is `"muscle"`, `"bone"`, or `"group"`, and this always matches
the index range: `"muscle"` and `"bone"` entries always have an index in
`01–69`, a `"group"` always has an index in `50–99`. This is a fixed rule —
checking that an entry's `type` matches its index range is a basic validity
check on the data.

- **muscle** — one anatomical muscle. It may still have children: a muscle
  that is described as having "heads" or "parts" (e.g. Biceps Brachii has a
  long and short head) is one `"muscle"` entry whose children are also
  `"muscle"` entries.
- **bone** — one anatomical bone, used only in the Bones region. Like
  muscle, a bone may have children if it is described as having distinct
  named parts.
- **group** — a set of separate entries bundled together by compartment,
  function, or region (e.g. Rotator Cuff, Quadriceps, or a compartment like
  "Deep Posterior Compartment"). Groups can contain muscles, bones, other
  groups, or a mix of these, and can be nested arbitrarily deep — a
  compartment containing a sub-compartment containing a functional group is
  just three `"group"` entries, one inside the next.

Whether an entry is a leaf (nothing further underneath it) is a separate
question from `type`, and is answered by whether its `children` list is
empty — not by `type`. A leaf muscle (no children) and a muscle with heads
(has children) are both `type: "muscle"`; the same applies to bones.

## Parent / compartment lookup

An entry does not store which group(s) it belongs to. That is always found
by searching: to find what an entry is part of, look through every
`"group"` entry's `children` list for that entry's ID. This keeps the tree
one-directional — parents list their children, children never list their
parents — so there is only one place that can go out of sync.

## Left / right / both

A paired structure gets three entries sharing the same region and index,
differing only in the side digit — for example a muscle at index `14` in
region `7`:

``` text
7141 -> left
7142 -> right
7143 -> both
```

A structure with no left/right distinction (e.g. a midline bone or a
midline muscle) gets exactly one entry, with side `0`.

### Example: a muscle and a group, both exploded by side

A single muscle, e.g. Semitendinosus in the Thigh region (region `7`,
index `04`), becomes three entries:

``` text
7041 -> semitendinosus (left)
7042 -> semitendinosus (right)
7043 -> semitendinosus (both)
```

A group is exploded the same way if the thing it represents is itself a
paired, bilateral structure. Vastus (region `7`, index `60`, a group of
Vastus Lateralis / Intermedius / Medialis) also becomes three entries —
one per side — and each side's group points only to the matching side of
its children:

``` text
7601 -> vastus (left)  -> children: [vastus lateralis (left), vastus intermedius (left), vastus medialis (left)]
7602 -> vastus (right) -> children: [vastus lateralis (right), vastus intermedius (right), vastus medialis (right)]
7603 -> vastus (both)  -> children: [vastus lateralis (both), vastus intermedius (both), vastus medialis (both)]
```

A left-side group never mixes in a right-side child, and vice versa — each
side of a group is a self-contained tree of that same side, all the way
down.

### children vs. side — two separate axes

`children` only ever expresses composition — what an entry is made of, or
what a group contains. It never expresses sidedness. `semitendinosus (both)`
does **not** list `semitendinosus (left)` and `semitendinosus (right)` as
its children, and a group's `left` entry does not list its `right` entry as
a child either.

Same-side and other-side siblings are never found by searching — they are
computed directly from the id, by changing only the side digit:

`7043 (both) -> swap side digit -> 7041 (left), 7042 (right)`

This keeps the two relationships independent: walking `children` answers
"what does this contain," and reading/changing the side digit answers
"which side is this." Neither one is a substitute for the other, and
nothing about side is ever discovered by traversing `children`.

## Record format

| field | description |
| --- | --- |
| `id` | canonical integer, per the scheme above |
| `name` | canonical name |
| `type` | `"muscle"`, `"bone"`, or `"group"` |
| `region` | one of the nine regions above |
| `side` | `"none"`, `"left"`, `"right"`, or `"both"` |
| `children` | list of child IDs. Empty for leaves. |
| `color` | `[R, G, B]` |
| `alias` | list of alternate names or spellings for this entry |
| `abbreviation` | abbreviated name of the muscle of group |

Example:

```json
{
  "id": 4013,
  "name": "biceps brachii",
  "type": "muscle",
  "region": "arm",
  "side": "both",
  "children": [4023, 4033],
  "color": [157, 54, 13],
  "alias": [],
  "abbreviation": []
}
```

with its two heads as their own entries:

```json
{
  "id": 4023,
  "name": "long head of biceps brachii",
  "type": "muscle",
  "region": "arm",
  "side": "both",
  "children": [],
  "color": [168, 70, 30],
  "alias": [],
  "abbreviation": []
}
```

## Muscle Lookup

**Bold** items are groups,
plain items are individual muscles or bones. *(midline)* marks anything with
no left/right distinction (`side: none` in the JSON) — everything else is
paired and gets left/right/both entries.

### 1. Head

- **Tongue**
  - **Intrinsic**
    - Inferior Longitudinal Of Tongue
    - Superior Longitudinal Of Tongue
    - Transverse Of Tongue
    - Vertical Of Tongue
  - **Extrinsic**
    - Genioglossus
    - Hyoglossus
    - Styloglossus
    - Palatoglossus
- **Facial Orbital Compartment**
  - Orbicularis Oculi
  - Corrugator Supercilii
- **Facial Nasal Compartment**
  - Nasalis
  - Procerus *(midline)*
  - Depressor Septi Nasi
- **Facial Oral Compartment**
  - Orbicularis Oris *(midline)*
  - Buccinator
- **Mastication Compartment**
  - Masseter
  - Temporalis
  - Medial Pterygoid
  - Lateral Pterygoid

### 2. Neck

- **Suboccipital Compartment**
  - Rectus Capitis Posterior Major
  - Rectus Capitis Posterior Minor
  - Obliquus Capitis Inferior
  - Obliquus Capitis Superior
- **Suprahyoids Compartment**
  - Stylohyoid
  - Digastric
  - Mylohyoid
  - Geniohyoid
- **Infrahyoids Compartment**
  - Omohyoid
  - Sternohyoid
  - Sternothyroid
  - Thyrohyoid
- **Scalenes Compartment**
  - Scalenus Anterior
  - Scalenus Medius
  - Scalenus Posterior
- **Prevertebral Muscles**
  - Longus Colli
  - Longus Capitis
  - Rectus Capitis Anterior
  - Rectus Capitis Lateralis
- Sternocleidomastoid
- **Splenius**
  - Splenius Capitis
  - Splenius Cervicis

### 3. Shoulder

- **Posterior Extrinsic Compartment of the Shoulder**
  - Trapezius
  - Latissimus Dorsi
  - Levator Scapulae
  - **Rhomboids**
    - Rhomboid Minor
    - Rhomboid Major
- **Rotator Cuff**
  - Supraspinatus
  - Infraspinatus
  - Subscapularis
  - Teres Minor
- **Posterior Intrinsic Compartment of the Shoulder**
  - Deltoid
    - Clavicular Part Of Deltoid
    - Acromial Part Of Deltoid
    - Scapular Part Of Deltoid
  - Teres Major
- **Anterior Compartment of the Shoulder**
  - Pectoralis Major
    - Abdominal Part Of Pectoralis Major
    - Sternocostal Part Of Pectoralis Major
    - Clavicular Part Of Pectoralis Major
  - Pectoralis Minor
  - Serratus Anterior
  - Subclavius

### 4. Arm

- **UpperArm**
  - **Anterior Compartment of the Upper Arm**
    - Biceps Brachii
      - Long Head Of Biceps Brachii
      - Short Head Of Biceps Brachii
    - Coracobrachialis
    - Brachialis
  - **Posterior Compartment of the Upper Arm**
    - Triceps Brachii
      - Lateral Head Of Triceps Brachii
      - Medial Head Of Triceps Brachii
      - Long Head Of Triceps Brachii
- **Forearm**
  - **Anterior Superficial Compartment of the Forearm**
    - Flexor Carpi Ulnaris
      - Ulnar Head Of Flexor Carpi Ulnaris
      - Humeral Head Of Flexor Carpi Ulnaris
    - Palmaris Longus
    - Flexor Carpi Radialis
    - Pronator Teres
    - Flexor Digitorum Superficialis
      - Radial Head Of Flexor Digitorum Superficialis
      - Humeroulnar Head Of Flexor Digitorum Superficialis
  - **Anterior Deep Compartment of the Forearm**
    - Flexor Pollicis Longus
    - Flexor Digitorum Profundus
    - Pronator Quadratus
  - **Posterior Superficial Compartment of the Forearm**
    - Brachioradialis
    - **Extensor Carpi Radialis**
      - Extensor Carpi Radialis Brevis
      - Extensor Carpi Radialis Longus
    - Extensor Digitorum
    - Extensor Carpi Ulnaris
    - Extensor Digiti Minimi
    - Anconeus
  - **Posterior Deep Compartment of the Forearm**
    - Supinator
    - Abductor Pollicis Longus
    - Extensor Pollicis Brevis
    - Extensor Pollicis Longus
    - Extensor Indicis

### 5. Thorax

- **Back**
  - **Intermediate Compartment of the Back**
    - Serratus Posterior Superior
    - Serratus Posterior Inferior
  - **Erector Spinae Compartment**
    - Iliocostalis
    - Longissimus
    - Spinalis
  - **Deep Intrinsic Compartment of the Back**
    - **Transversospinales Group**
      - Semispinalis
      - Multifidus
      - Rotator
    - **Minor Deep Intrinsic**
      - Interspinalis
      - Intertransversarii
      - Levatores Costarum
- **Abdomen**
  - **Anterolateral Compartment of the Abdomen**
    - External Oblique
    - Internal Oblique
    - Transversus Abdominis
    - Rectus Abdominis
    - Pyramidalis
  - **Posterior Compartment of the Abdomen**
    - Quadratus Lumborum
    - Diaphragm *(midline)*
- **Chest**
  - **Intercostal muscles**
    - External intercostals
    - Internal intercostals
    - Innermost intercostals

### 6. Hip

- **Anterior Compartment of the Hip**
  - **Iliopsoas**
    - Iliacus
    - Psoas Major
- **Superficial Compartment of the Hip**
  - **Gluteus**
    - Gluteus Maximus
    - Gluteus Medius
    - Gluteus Minimus
  - Tensor Fasciae Latae
- **Deep Compartment of the Hip**
  - Piriformis
  - Obturator Internus
  - Obturator Externus
  - **Gemelli**
    - Gemellus Superior
    - Gemellus Inferior
  - Quadratus Femoris
- **Pelvis Compartment**
  - Levator Ani
    - Puborectalis
    - Pubococcygeus
    - Iliococcygeus
  - Coccygeus

### 7. Thigh

- **Posterior Compartment of the Thigh**
  - Biceps Femoris
    - Long Head Of Biceps Femoris
    - Short Head Of Biceps Femoris
  - Semimembranosus
  - Semitendinosus
- **Medial Compartment of the Thigh**
  - **Adductor**
    - Adductor Magnus
    - Adductor Minimus
    - Adductor Longus
    - Adductor Brevis
  - Gracilis
  - Pectineus
- **Anterior Compartment of the Thigh**
  - **Quadriceps Femoris**
    - **Vastus**
      - Vastus Lateralis
      - Vastus Intermedius
      - Vastus Medialis
    - Rectus Femoris
  - Sartorius

### 8. Leg

- **Superficial Posterior Compartment of the Leg**
  - Gastrocnemius
    - Lateral Head Of Gastrocnemius
    - Medial Head Of Gastrocnemius
  - Soleus
  - Plantaris
- **Deep Posterior Compartment of the Leg**
  - Popliteus
  - Flexor Digitorum Longus
  - Flexor Hallucis Longus
  - Tibialis Posterior
- **Lateral Compartment of the Leg**
  - Fibularis Longus
  - Fibularis Brevis
- **Anterior Compartment of the Leg**
  - Tibialis Anterior
  - Extensor Digitorum Longus
  - Extensor Hallucis Longus
  - Fibularis Tertius

### 9. Bones

- **Axial** *(midline)*
  - Skull *(midline)*
  - Mandible *(midline)*
  - Manubrium *(midline)*
  - Xiphoid process *(midline)*
  - **Vertebrae** *(midline)*
    - **Cervical vertebrae** *(midline)*
      - C1 – C7 *(midline)*
    - **Thoracic vertebrae** *(midline)*
      - T1 – T12 *(midline)*
    - **Lumbar vertebrae** *(midline)*
      - L1 – L5 *(midline)*
    - **Sacrum** *(midline)*
      - S1 – S5 *(midline)*
    - Coccyx *(midline)*
- **Ribcage**
  - **Ribs**
    - **True ribs**
      - R1 – R7
    - **False ribs**
      - R8 – R10
    - **Floating ribs**
      - R11 – R12
  - Sternum *(midline)*
  - Costal cartilage
- **Upper limb**
  - Scapula
  - Clavicle
  - Humerus
  - Ulna
  - Radius
  - **Bones hand** *(not yet expanded)*
- **Lower limb**
  - **Coxal bone**
    - Pubis
    - Ilium
    - Ischium
  - Femur
  - Patella
  - Tibia
  - Fibula
  - **Bones foot** *(not yet expanded)*

{% include list-pages tag="segment" %}
