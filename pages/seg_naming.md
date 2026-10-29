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

All muscles and bones that are segmented with `QMRITools` have a standardized name and number. The labels are stored as [ITK-SNAP](http://www.itksnap.org/){:target="_blank"} label description files in the folder `NeuralNetworks` of the toolbox ([GitHub](https://github.com/mfroeling/QMRITools/tree/master/QMRITools/NeuralNetworks){:target="_blank"}), and are used for manual segmentation, training of the networks and the output of `SegmentData`. The same names and numbers are used in the [Muscle-BIDS](../../bids/) pipeline.

## Label files

| file | content | labels |
| --- | --- | --- |
| `S1_Muscles_body_side` | full body muscles and bones, left and right separate. This is the default output of `SegmentData`. | 261 |
| `S2_Muscles_leg_side` | lower leg, upper leg and hip muscles, bones and fat, left and right separate | 105 |
| `S3_Muscles_shoulder_side` | shoulder muscles and bones, left and right separate | 41 |
| `S4_Muscles_arm_upper_side` | upper arm muscles and bones, left and right separate | 11 |
| `T1_Muscles_body` | full body muscles and bones without left and right | 137 |
| `T2_Muscles_leg` | lower extremity muscles and bones without left and right | |
| `N1` to `N7` | label sets used for training the networks per region | |

## Numbering of the full body labels (S1)

In the full body label set every label has a three digit number `region * 100 + index`, where the region is the first digit and the index runs through the muscles of that region. Left and right muscles are consecutive, where **odd numbers are left** and **even numbers are right**. For example, 521 is the left vastus intermedius, and 522 the right vastus intermedius. Midline structures such as the bones in region 9 have a single number. The first digit is the body region:

| region | body part | examples |
| --- | --- | --- |
| 1 | Head and neck | tongue, masseter, temporalis, scalenes, sternocleidomastoid |
| 2 | Shoulder | trapezius, deltoid, rotator cuff, pectoralis, serratus anterior |
| 3 | Back, thorax and abdomen | erector spinae, obliques, rectus abdominis, psoas major |
| 4 | Hip | gluteus maximus, medius and minimus, piriformis, levator ani |
| 5 | Upper leg | hamstrings, adductors, quadriceps, sartorius, gracilis |
| 6 | Lower leg | gastrocnemius, soleus, tibialis anterior, fibularis |
| 7 | Arm | biceps brachii, triceps brachii, forearm flexors and extensors |
| 8 | Bones, left and right | scapula, humerus, femur, tibia, fibula, ribs |
| 9 | Bones, midline | skull, mandible, sternum, vertebrae, sacrum |

The numbers in the other files (S2 to S4) are running numbers within that label file (for example 1 and 2 are the left and right lateral gastrocnemius in S2), so labels from different files should not be compared by number. The files with the suffix `_side` have the muscle name followed by `Left` or `Right`.

## Use in QMRITools

The label files are used to translate between label numbers and names. By default the leg label file of the toolbox is used, and any ITK-SNAP label file can be given.

``` Wolfram
MuscleLabelToName[{1, 2, 3}]
MuscleNameToLabel[{"Soleus Left"}]
MuscleLabelToName[{501, 502}, labelFile]
```

Which output label set is used is selected with the `what` argument of `SegmentData`, see the [segmentation page](../segmentation).
