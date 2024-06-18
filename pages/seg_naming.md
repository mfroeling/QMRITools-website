---

layout: page
permalink: /seg/naming

title: "Muscle segmentation"
subheadline: "Standardized naming"
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

Since most labs tipically have their own coding for their muscle [segmentations](https://muscle-bids.github.io/specs#segmentation-labels) converting
between the labels can be challenging and prone to error. Therefore here we propose a common muscle coding that can serve as a translation between coding systems. The coding contains 6 numbers.

- the first number indicates the location (here upper or lower limb)
- the second number indicates which region of the limb (e.g. upper arm or forearm)
- the third number indicates the muscle compartment (e.g. the anterior superficial compartment of the forearm)
- the forth number indicates the muscle (e.g. the Gastrocnemius muscle)
- the fifth number indicates the muscle heads if there are any (e.g. the Gastrocnemius medial head)
- the sixth and last number indicates the side (e.g. both, left, or right)

By looking at the code on can understand if it refers to a limb, muscle group or a muscle. Furthermore it facilitates translation of muscle labels. Instead of providing label translation from each lab to another each time it is needed each lab can specify their translation of the labels to the common labeling only once.

If you are looking for images of each muscle please take a look [here](https://www.muscle-atlas.org/muscle/) where we provide images of all muscles of the upper and lower limb free to use.

{% include page-image im_id="lower" %}

## The muscle code table

| Code | Full name | Side | Limb | Part | Group | Muscle | Muscle Head/Part |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 100000 | Upper_Limb_Both | Both | UpperLimb |  |  |  |  |
| 100001 | Upper_Limb_Left | Left | UpperLimb |  |  |  |  |
| 100002 | Upper_Limb_Right | Right | UpperLimb |  |  |  |  |
| 110000 | Forearm_Both | Both | UpperLimb | Forearm |  |  |  |
| 110001 | Forearm_Left | Left | UpperLimb | Forearm |  |  |  |
| 110002 | Forearm_Right | Right | UpperLimb | Forearm |  |  |  |
| 111000 | Forearm_Anterior_Superficial_Both | Both | UpperLimb | Forearm | AnteriorSuperficial |  |  |
| 111001 | Forearm_Anterior_Superficial_Left | Left | UpperLimb | Forearm | AnteriorSuperficial |  |  |
| 111002 | Forearm_Anterior_Superficial_Right | Right | UpperLimb | Forearm | AnteriorSuperficial |  |  |
| 111100 | Flexor_Carpi_Ulnaris_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris |  |
| 111101 | Flexor_Carpi_Ulnaris_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris |  |
| 111102 | Flexor_Carpi_Ulnaris_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris |  |
| 111110 | Flexor_Carpi_Ulnaris_Ulnar_Head_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisUlnarHead |
| 111111 | Flexor_Carpi_Ulnaris_Ulnar_Head_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisUlnarHead |
| 111112 | Flexor_Carpi_Ulnaris_Ulnar_Head_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisUlnarHead |
| 111120 | Flexor_Carpi_Ulnaris_Humeral_Head_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisHumeralHead |
| 111121 | Flexor_Carpi_Ulnaris_Humeral_Head_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisHumeralHead |
| 111122 | Flexor_Carpi_Ulnaris_Humeral_Head_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiUlnaris | FlexorCarpiUlnarisHumeralHead |
| 111200 | Flexor_Digitorum_Superficialis_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis |  |
| 111201 | Flexor_Digitorum_Superficialis_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis |  |
| 111202 | Flexor_Digitorum_Superficialis_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis |  |
| 111210 | Flexor_Digitorum_Superficialis_Radial_Head_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisRadialHead |
| 111211 | Flexor_Digitorum_Superficialis_Radial_Head_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisRadialHead |
| 111212 | Flexor_Digitorum_Superficialis_Radial_Head_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisRadialHead |
| 111220 | Flexor_Digitorum_Superficialis_Humeral_Head_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisHumeralHead |
| 111221 | Flexor_Digitorum_Superficialis_Humeral_Head_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisHumeralHead |
| 111222 | Flexor_Digitorum_Superficialis_Humeral_Head_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorDigitorumSuperficialis | FlexorDigitorumSuperficialisHumeralHead |
| 111300 | Palmaris_Longus_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | PalmarisLongus |  |
| 111301 | Palmaris_Longus_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | PalmarisLongus |  |
| 111302 | Palmaris_Longus_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | PalmarisLongus |  |
| 111400 | Flexor_Carpi_Radialis_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiRadialis |  |
| 111401 | Flexor_Carpi_Radialis_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiRadialis |  |
| 111402 | Flexor_Carpi_Radialis_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | FlexorCarpiRadialis |  |
| 111500 | Pronator_Teres_Both | Both | UpperLimb | Forearm | AnteriorSuperficial | PronatorTeres |  |
| 111501 | Pronator_Teres_Left | Left | UpperLimb | Forearm | AnteriorSuperficial | PronatorTeres |  |
| 111502 | Pronator_Teres_Right | Right | UpperLimb | Forearm | AnteriorSuperficial | PronatorTeres |  |
| 112000 | Forearm_Anterior_Deep_Both | Both | UpperLimb | Forearm | AnteriorDeep |  |  |
| 112001 | Forearm_Anterior_Deep_Left | Left | UpperLimb | Forearm | AnteriorDeep |  |  |
| 112002 | Forearm_Anterior_Deep_Right | Right | UpperLimb | Forearm | AnteriorDeep |  |  |
| 112100 | Flexor_Pollicis_Longus_Both | Both | UpperLimb | Forearm | AnteriorDeep | FlexorPollicisLongus |  |
| 112101 | Flexor_Pollicis_Longus_Left | Left | UpperLimb | Forearm | AnteriorDeep | FlexorPollicisLongus |  |
| 112102 | Flexor_Pollicis_Longus_Right | Right | UpperLimb | Forearm | AnteriorDeep | FlexorPollicisLongus |  |
| 112200 | Flexor_Digitorum_Profundus_Both | Both | UpperLimb | Forearm | AnteriorDeep | FlexorDigitorumProfundus |  |
| 112201 | Flexor_Digitorum_Profundus_Left | Left | UpperLimb | Forearm | AnteriorDeep | FlexorDigitorumProfundus |  |
| 112202 | Flexor_Digitorum_Profundus_Right | Right | UpperLimb | Forearm | AnteriorDeep | FlexorDigitorumProfundus |  |
| 112300 | Pronator_Quadratus_Both | Both | UpperLimb | Forearm | AnteriorDeep | PronatorQuadratus |  |
| 112301 | Pronator_Quadratus_Left | Left | UpperLimb | Forearm | AnteriorDeep | PronatorQuadratus |  |
| 112302 | Pronator_Quadratus_Right | Right | UpperLimb | Forearm | AnteriorDeep | PronatorQuadratus |  |
| 113000 | Forearm_Posterior_Superficial_Both | Both | UpperLimb | Forearm | PosteriorSuperficial |  |  |
| 113001 | Forearm_Posterior_Superficial_Left | Left | UpperLimb | Forearm | PosteriorSuperficial |  |  |
| 113002 | Forearm_Posterior_Superficial_Right | Right | UpperLimb | Forearm | PosteriorSuperficial |  |  |
| 113100 | Extensor_Carpi_Radialis_Brevis_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisBrevis |  |
| 113101 | Extensor_Carpi_Radialis_Brevis_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisBrevis |  |
| 113102 | Extensor_Carpi_Radialis_Brevis_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisBrevis |  |
| 113200 | Extensor_Carpi_Radialis_Longus_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisLongus |  |
| 113201 | Extensor_Carpi_Radialis_Longus_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisLongus |  |
| 113202 | Extensor_Carpi_Radialis_Longus_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiRadialisLongus |  |
| 113300 | Extensor_Digitorum_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitorum |  |
| 113301 | Extensor_Digitorum_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitorum |  |
| 113302 | Extensor_Digitorum_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitorum |  |
| 113400 | Extensor_Carpi_Ulnaris_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiUlnaris |  |
| 113401 | Extensor_Carpi_Ulnaris_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiUlnaris |  |
| 113402 | Extensor_Carpi_Ulnaris_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | ExtensorCarpiUlnaris |  |
| 113500 | Extensor_Digiti_Minimi_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitiMinimi |  |
| 113501 | Extensor_Digiti_Minimi_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitiMinimi |  |
| 113502 | Extensor_Digiti_Minimi_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | ExtensorDigitiMinimi |  |
| 113600 | Anconeus_Both | Both | UpperLimb | Forearm | PosteriorSuperficial | Anconeus |  |
| 113601 | Anconeus_Left | Left | UpperLimb | Forearm | PosteriorSuperficial | Anconeus |  |
| 113602 | Anconeus_Right | Right | UpperLimb | Forearm | PosteriorSuperficial | Anconeus |  |
| 114000 | Forearm_Posterior_Deep_Both | Both | UpperLimb | Forearm | PosteriorDeep |  |  |
| 114001 | Forearm_Posterior_Deep_Left | Left | UpperLimb | Forearm | PosteriorDeep |  |  |
| 114002 | Forearm_Posterior_Deep_Right | Right | UpperLimb | Forearm | PosteriorDeep |  |  |
| 114100 | Supinator_Both | Both | UpperLimb | Forearm | PosteriorDeep | Supinator |  |
| 114101 | Supinator_Left | Left | UpperLimb | Forearm | PosteriorDeep | Supinator |  |
| 114102 | Supinator_Right | Right | UpperLimb | Forearm | PosteriorDeep | Supinator |  |
| 114200 | Abductor_Pollicis_Longus_Both | Both | UpperLimb | Forearm | PosteriorDeep | AbductorPollicisLongus |  |
| 114201 | Abductor_Pollicis_Longus_Left | Left | UpperLimb | Forearm | PosteriorDeep | AbductorPollicisLongus |  |
| 114202 | Abductor_Pollicis_Longus_Right | Right | UpperLimb | Forearm | PosteriorDeep | AbductorPollicisLongus |  |
| 114300 | Extensor_Pollicis_Brevis_Both | Both | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisBrevis |  |
| 114301 | Extensor_Pollicis_Brevis_Left | Left | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisBrevis |  |
| 114302 | Extensor_Pollicis_Brevis_Right | Right | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisBrevis |  |
| 114400 | Extensor_Pollicis_Longus_Both | Both | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisLongus |  |
| 114401 | Extensor_Pollicis_Longus_Left | Left | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisLongus |  |
| 114402 | Extensor_Pollicis_Longus_Right | Right | UpperLimb | Forearm | PosteriorDeep | ExtensorPollicisLongus |  |
| 114500 | Extensor_Indicis_Both | Both | UpperLimb | Forearm | PosteriorDeep | ExtensorIndicis |  |
| 114501 | Extensor_Indicis_Left | Left | UpperLimb | Forearm | PosteriorDeep | ExtensorIndicis |  |
| 114502 | Extensor_Indicis_Right | Right | UpperLimb | Forearm | PosteriorDeep | ExtensorIndicis |  |
| 120000 | Arm_Both | Both | UpperLimb | Arm |  |  |  |
| 120001 | Arm_Left | Left | UpperLimb | Arm |  |  |  |
| 120002 | Arm_Right | Right | UpperLimb | Arm |  |  |  |
| 121000 | Arm_Anterior_Both | Both | UpperLimb | Arm | Anterior |  |  |
| 121001 | Arm_Anterior_Left | Left | UpperLimb | Arm | Anterior |  |  |
| 121002 | Arm_Anterior_Right | Right | UpperLimb | Arm | Anterior |  |  |
| 121100 | Biceps_Brachii_Both | Both | UpperLimb | Arm | Anterior | BicepsBrachii |  |
| 121101 | Biceps_Brachii_Left | Left | UpperLimb | Arm | Anterior | BicepsBrachii |  |
| 121102 | Biceps_Brachii_Right | Right | UpperLimb | Arm | Anterior | BicepsBrachii |  |
| 121110 | Biceps_Brachii_Long_Head_Both | Both | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiLongHead |
| 121111 | Biceps_Brachii_Long_Head_Left | Left | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiLongHead |
| 121112 | Biceps_Brachii_Long_Head_Right | Right | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiLongHead |
| 121120 | Biceps_Brachii_Short_Head_Both | Both | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiShortHead |
| 121121 | Biceps_Brachii_Short_Head_Left | Left | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiShortHead |
| 121122 | Biceps_Brachii_Short_Head_Right | Right | UpperLimb | Arm | Anterior | BicepsBrachii | BicepsBrachiiShortHead |
| 121200 | Coracobrachialis_Both | Both | UpperLimb | Arm | Anterior | Coracobrachialis |  |
| 121201 | Coracobrachialis_Left | Left | UpperLimb | Arm | Anterior | Coracobrachialis |  |
| 121202 | Coracobrachialis_Right | Right | UpperLimb | Arm | Anterior | Coracobrachialis |  |
| 121300 | Brachialis_Both | Both | UpperLimb | Arm | Anterior | Brachialis |  |
| 121301 | Brachialis_Left | Left | UpperLimb | Arm | Anterior | Brachialis |  |
| 121302 | Brachialis_Right | Right | UpperLimb | Arm | Anterior | Brachialis |  |
| 122000 | Arm_Posterior_Both | Both | UpperLimb | Arm | Posterior |  |  |
| 122001 | Arm_Posterior_Left | Left | UpperLimb | Arm | Posterior |  |  |
| 122002 | Arm_Posterior_Right | Right | UpperLimb | Arm | Posterior |  |  |
| 122100 | Triceps_Brachii_Both | Both | UpperLimb | Arm | Posterior | TricepsBrachii |  |
| 122101 | Triceps_Brachii_Left | Left | UpperLimb | Arm | Posterior | TricepsBrachii |  |
| 122102 | Triceps_Brachii_Right | Right | UpperLimb | Arm | Posterior | TricepsBrachii |  |
| 122110 | Triceps_Brachii_Lateral_Head_Both | Both | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLateralHead |
| 122111 | Triceps_Brachii_Lateral_Head_Left | Left | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLateralHead |
| 122112 | Triceps_Brachii_Lateral_Head_Right | Right | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLateralHead |
| 122120 | Triceps_Brachii_Medial_Head_Both | Both | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiMedialHead |
| 122121 | Triceps_Brachii_Medial_Head_Left | Left | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiMedialHead |
| 122122 | Triceps_Brachii_Medial_Head_Right | Right | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiMedialHead |
| 122130 | Triceps_Brachii_Long_Head_Both | Both | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLongHead |
| 122131 | Triceps_Brachii_Long_Head_Left | Left | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLongHead |
| 122132 | Triceps_Brachii_Long_Head_Right | Right | UpperLimb | Arm | Posterior | TricepsBrachii | TricepsBrachiiLongHead |
| 130000 | Shoulder_Both | Both | UpperLimb | Shoulder |  |  |  |
| 130001 | Shoulder_Left | Left | UpperLimb | Shoulder |  |  |  |
| 130002 | Shoulder_Right | Right | UpperLimb | Shoulder |  |  |  |
| 131000 | Shoulder_Posterior_Extrinsic_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic |  |  |
| 131001 | Shoulder_Posterior_Extrinsic_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic |  |  |
| 131002 | Shoulder_Posterior_Extrinsic_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic |  |  |
| 131100 | Trapezius_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | Trapezius |  |
| 131101 | Trapezius_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | Trapezius |  |
| 131102 | Trapezius_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | Trapezius |  |
| 131200 | Latissimus_Dorsi_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | LatissimusDorsi |  |
| 131201 | Latissimus_Dorsi_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | LatissimusDorsi |  |
| 131202 | Latissimus_Dorsi_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | LatissimusDorsi |  |
| 131300 | Levator_Scapulae_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | LevatorScapulae |  |
| 131301 | Levator_Scapulae_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | LevatorScapulae |  |
| 131302 | Levator_Scapulae_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | LevatorScapulae |  |
| 131400 | Rhomboids_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids |  |
| 131401 | Rhomboids_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids |  |
| 131402 | Rhomboids_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids |  |
| 131410 | Rhomboid_Minor_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMinor |
| 131411 | Rhomboid_Minor_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMinor |
| 131412 | Rhomboid_Minor_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMinor |
| 131420 | Rhomboid_Major_Both | Both | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMajor |
| 131421 | Rhomboid_Major_Left | Left | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMajor |
| 131422 | Rhomboid_Major_Right | Right | UpperLimb | Shoulder | PosteriorExtrinsic | Rhomboids | RhomboidMajor |
| 132000 | Shoulder_Posterior_Intrinsic_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic |  |  |
| 132001 | Shoulder_Posterior_Intrinsic_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic |  |  |
| 132002 | Shoulder_Posterior_Intrinsic_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic |  |  |
| 132100 | Deltoid_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid |  |
| 132101 | Deltoid_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid |  |
| 132102 | Deltoid_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid |  |
| 132110 | Deltoid_Clavicular_Part_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidClavicularPart |
| 132111 | Deltoid_Clavicular_Part_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidClavicularPart |
| 132112 | Deltoid_Clavicular_Part_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidClavicularPart |
| 132120 | Deltoid_Acromial_Part_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidAcromialPart |
| 132121 | Deltoid_Acromial_Part_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidAcromialPart |
| 132122 | Deltoid_Acromial_Part_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidAcromialPart |
| 132130 | Deltoid_Scapular_Part_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidScapularPart |
| 132131 | Deltoid_Scapular_Part_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidScapularPart |
| 132132 | Deltoid_Scapular_Part_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | Deltoid | DeltoidScapularPart |
| 132200 | Rotator_Cuff_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff |  |
| 132201 | Rotator_Cuff_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff |  |
| 132202 | Rotator_Cuff_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff |  |
| 132210 | Supraspinatus_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Supraspinatus |
| 132211 | Supraspinatus_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Supraspinatus |
| 132212 | Supraspinatus_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Supraspinatus |
| 132220 | Infraspinatus_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Infraspinatus |
| 132221 | Infraspinatus_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Infraspinatus |
| 132222 | Infraspinatus_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Infraspinatus |
| 132230 | Subscapularis_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Subscapularis |
| 132231 | Subscapularis_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Subscapularis |
| 132232 | Subscapularis_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | Subscapularis |
| 132240 | Teres_Minor_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | TeresMinor |
| 132241 | Teres_Minor_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | TeresMinor |
| 132242 | Teres_Minor_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | RotatorCuff | TeresMinor |
| 132300 | Teres_Major_Both | Both | UpperLimb | Shoulder | PosteriorIntrinsic | TeresMajor |  |
| 132301 | Teres_Major_Left | Left | UpperLimb | Shoulder | PosteriorIntrinsic | TeresMajor |  |
| 132302 | Teres_Major_Right | Right | UpperLimb | Shoulder | PosteriorIntrinsic | TeresMajor |  |
| 133000 | Shoulder_Anterior_Both | Both | UpperLimb | Shoulder | Anterior |  |  |
| 133001 | Shoulder_Anterior_Left | Left | UpperLimb | Shoulder | Anterior |  |  |
| 133002 | Shoulder_Anterior_Right | Right | UpperLimb | Shoulder | Anterior |  |  |
| 133100 | Pectoralis_Major_Both | Both | UpperLimb | Shoulder | Anterior | PectoralisMajor |  |
| 133101 | Pectoralis_Major_Left | Left | UpperLimb | Shoulder | Anterior | PectoralisMajor |  |
| 133102 | Pectoralis_Major_Right | Right | UpperLimb | Shoulder | Anterior | PectoralisMajor |  |
| 133110 | Pectoralis_Major_Abdominal_Part_Both | Both | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorAbdominalPart |
| 133111 | Pectoralis_Major_Abdominal_Part_Left | Left | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorAbdominalPart |
| 133112 | Pectoralis_Major_Abdominal_Part_Right | Right | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorAbdominalPart |
| 133120 | Pectoralis_Major_Sternocostal_Part_Both | Both | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorSternocostalPart |
| 133121 | Pectoralis_Major_Sternocostal_Part_Left | Left | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorSternocostalPart |
| 133122 | Pectoralis_Major_Sternocostal_Part_Right | Right | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorSternocostalPart |
| 133130 | Pectoralis_Major_Clavicular_Part_Both | Both | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorClavicularPart |
| 133131 | Pectoralis_Major_Clavicular_Part_Left | Left | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorClavicularPart |
| 133132 | Pectoralis_Major_Clavicular_Part_Right | Right | UpperLimb | Shoulder | Anterior | PectoralisMajor | PectoralisMajorClavicularPart |
| 133200 | Pectoralis_Minor_Both | Both | UpperLimb | Shoulder | Anterior | PectoralisMinor |  |
| 133201 | Pectoralis_Minor_Left | Left | UpperLimb | Shoulder | Anterior | PectoralisMinor |  |
| 133202 | Pectoralis_Minor_Right | Right | UpperLimb | Shoulder | Anterior | PectoralisMinor |  |
| 133300 | Serratus_Anterior_Both | Both | UpperLimb | Shoulder | Anterior | SerratusAnterior |  |
| 133301 | Serratus_Anterior_Left | Left | UpperLimb | Shoulder | Anterior | SerratusAnterior |  |
| 133302 | Serratus_Anterior_Right | Right | UpperLimb | Shoulder | Anterior | SerratusAnterior |  |
| 133400 | Subclavius_Both | Both | UpperLimb | Shoulder | Anterior | Subclavius |  |
| 133401 | Subclavius_Left | Left | UpperLimb | Shoulder | Anterior | Subclavius |  |
| 133402 | Subclavius_Right | Right | UpperLimb | Shoulder | Anterior | Subclavius |  |
| 200000 | Lower_Limb_Both | Both | LowerLimb |  |  |  |  |
| 200001 | Lower_Limb_Left | Left | LowerLimb |  |  |  |  |
| 200002 | Lower_Limb_Right | Right | LowerLimb |  |  |  |  |
| 210000 | Leg_Both | Both | LowerLimb | Leg |  |  |  |
| 210001 | Leg_Left | Left | LowerLimb | Leg |  |  |  |
| 210002 | Leg_Right | Right | LowerLimb | Leg |  |  |  |
| 211000 | Leg_Superficial_Posterior_Both | Both | LowerLimb | Leg | SuperficialPosterior |  |  |
| 211001 | Leg_Superficial_Posterior_Left | Left | LowerLimb | Leg | SuperficialPosterior |  |  |
| 211002 | Leg_Superficial_Posterior_Right | Right | LowerLimb | Leg | SuperficialPosterior |  |  |
| 211100 | Gastrocnemius_Both | Both | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius |  |
| 211101 | Gastrocnemius_Left | Left | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius |  |
| 211102 | Gastrocnemius_Right | Right | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius |  |
| 211110 | Gastrocnemius_Lateral_Head_Both | Both | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusLateralHead |
| 211111 | Gastrocnemius_Lateral_Head_Left | Left | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusLateralHead |
| 211112 | Gastrocnemius_Lateral_Head_Right | Right | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusLateralHead |
| 211120 | Gastrocnemius_Medial_Head_Both | Both | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusMedialHead |
| 211121 | Gastrocnemius_Medial_Head_Left | Left | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusMedialHead |
| 211122 | Gastrocnemius_Medial_Head_Right | Right | LowerLimb | Leg | SuperficialPosterior | Gastrocnemius | GastrocnemiusMedialHead |
| 211200 | Soleus_Both | Both | LowerLimb | Leg | SuperficialPosterior | Soleus |  |
| 211201 | Soleus_Left | Left | LowerLimb | Leg | SuperficialPosterior | Soleus |  |
| 211202 | Soleus_Right | Right | LowerLimb | Leg | SuperficialPosterior | Soleus |  |
| 211300 | Plantaris_Both | Both | LowerLimb | Leg | SuperficialPosterior | Plantaris |  |
| 211301 | Plantaris_Left | Left | LowerLimb | Leg | SuperficialPosterior | Plantaris |  |
| 211302 | Plantaris_Right | Right | LowerLimb | Leg | SuperficialPosterior | Plantaris |  |
| 212000 | Leg_Deep_Posterior_Both | Both | LowerLimb | Leg | DeepPosterior |  |  |
| 212001 | Leg_Deep_Posterior_Left | Left | LowerLimb | Leg | DeepPosterior |  |  |
| 212002 | Leg_Deep_Posterior_Right | Right | LowerLimb | Leg | DeepPosterior |  |  |
| 212100 | Popliteus_Both | Both | LowerLimb | Leg | DeepPosterior | Popliteus |  |
| 212101 | Popliteus_Left | Left | LowerLimb | Leg | DeepPosterior | Popliteus |  |
| 212102 | Popliteus_Right | Right | LowerLimb | Leg | DeepPosterior | Popliteus |  |
| 212200 | Flexor_Digitorum_Longus_Both | Both | LowerLimb | Leg | DeepPosterior | FlexorDigitorumLongus |  |
| 212201 | Flexor_Digitorum_Longus_Left | Left | LowerLimb | Leg | DeepPosterior | FlexorDigitorumLongus |  |
| 212202 | Flexor_Digitorum_Longus_Right | Right | LowerLimb | Leg | DeepPosterior | FlexorDigitorumLongus |  |
| 212300 | Flexor_Hallucis_Longus_Both | Both | LowerLimb | Leg | DeepPosterior | FlexorHallucisLongus |  |
| 212301 | Flexor_Hallucis_Longus_Left | Left | LowerLimb | Leg | DeepPosterior | FlexorHallucisLongus |  |
| 212302 | Flexor_Hallucis_Longus_Right | Right | LowerLimb | Leg | DeepPosterior | FlexorHallucisLongus |  |
| 212400 | Tibialis_Posterior_Both | Both | LowerLimb | Leg | DeepPosterior | TibialisPosterior |  |
| 212401 | Tibialis_Posterior_Left | Left | LowerLimb | Leg | DeepPosterior | TibialisPosterior |  |
| 212402 | Tibialis_Posterior_Right | Right | LowerLimb | Leg | DeepPosterior | TibialisPosterior |  |
| 213000 | Leg_Lateral_Both | Both | LowerLimb | Leg | Lateral |  |  |
| 213001 | Leg_Lateral_Left | Left | LowerLimb | Leg | Lateral |  |  |
| 213002 | Leg_Lateral_Right | Right | LowerLimb | Leg | Lateral |  |  |
| 213100 | Fibularis_Longus_Both | Both | LowerLimb | Leg | Lateral | FibularisLongus |  |
| 213101 | Fibularis_Longus_Left | Left | LowerLimb | Leg | Lateral | FibularisLongus |  |
| 213102 | Fibularis_Longus_Right | Right | LowerLimb | Leg | Lateral | FibularisLongus |  |
| 213200 | Fibularis_Brevis_Both | Both | LowerLimb | Leg | Lateral | FibularisBrevis |  |
| 213201 | Fibularis_Brevis_Left | Left | LowerLimb | Leg | Lateral | FibularisBrevis |  |
| 213202 | Fibularis_Brevis_Right | Right | LowerLimb | Leg | Lateral | FibularisBrevis |  |
| 214000 | Leg_Anterior_Both | Both | LowerLimb | Leg | Anterior |  |  |
| 214001 | Leg_Anterior_Left | Left | LowerLimb | Leg | Anterior |  |  |
| 214002 | Leg_Anterior_Right | Right | LowerLimb | Leg | Anterior |  |  |
| 214100 | Tibialis_Anterior_Both | Both | LowerLimb | Leg | Anterior | TibialisAnterior |  |
| 214101 | Tibialis_Anterior_Left | Left | LowerLimb | Leg | Anterior | TibialisAnterior |  |
| 214102 | Tibialis_Anterior_Right | Right | LowerLimb | Leg | Anterior | TibialisAnterior |  |
| 214200 | Extensor_Digitorum_Longus_Both | Both | LowerLimb | Leg | Anterior | ExtensorDigitorumLongus |  |
| 214201 | Extensor_Digitorum_Longus_Left | Left | LowerLimb | Leg | Anterior | ExtensorDigitorumLongus |  |
| 214202 | Extensor_Digitorum_Longus_Right | Right | LowerLimb | Leg | Anterior | ExtensorDigitorumLongus |  |
| 214300 | Extensor_Hallucis_Longus_Both | Both | LowerLimb | Leg | Anterior | ExtensorHallucisLongus |  |
| 214301 | Extensor_Hallucis_Longus_Left | Left | LowerLimb | Leg | Anterior | ExtensorHallucisLongus |  |
| 214302 | Extensor_Hallucis_Longus_Right | Right | LowerLimb | Leg | Anterior | ExtensorHallucisLongus |  |
| 214400 | Fibularis_Tertius_Both | Both | LowerLimb | Leg | Anterior | FibularisTertius |  |
| 214401 | Fibularis_Tertius_Left | Left | LowerLimb | Leg | Anterior | FibularisTertius |  |
| 214402 | Fibularis_Tertius_Right | Right | LowerLimb | Leg | Anterior | FibularisTertius |  |
| 220000 | Thigh_Both | Both | LowerLimb | Thigh |  |  |  |
| 220001 | Thigh_Left | Left | LowerLimb | Thigh |  |  |  |
| 220002 | Thigh_Right | Right | LowerLimb | Thigh |  |  |  |
| 221000 | Thigh_Posterior_Both | Both | LowerLimb | Thigh | Posterior |  |  |
| 221001 | Thigh_Posterior_Left | Left | LowerLimb | Thigh | Posterior |  |  |
| 221002 | Thigh_Posterior_Right | Right | LowerLimb | Thigh | Posterior |  |  |
| 221100 | Biceps_Femoris_Both | Both | LowerLimb | Thigh | Posterior | BicepsFemoris |  |
| 221101 | Biceps_Femoris_Left | Left | LowerLimb | Thigh | Posterior | BicepsFemoris |  |
| 221102 | Biceps_Femoris_Right | Right | LowerLimb | Thigh | Posterior | BicepsFemoris |  |
| 221110 | Biceps_Femoris_Long_Head_Both | Both | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisLongHead |
| 221111 | Biceps_Femoris_Long_Head_Left | Left | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisLongHead |
| 221112 | Biceps_Femoris_Long_Head_Right | Right | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisLongHead |
| 221120 | Biceps_Femoris_Short_Head_Both | Both | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisShortHead |
| 221121 | Biceps_Femoris_Short_Head_Left | Left | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisShortHead |
| 221122 | Biceps_Femoris_Short_Head_Right | Right | LowerLimb | Thigh | Posterior | BicepsFemoris | BicepsFemorisShortHead |
| 221200 | Semimembranosus_Both | Both | LowerLimb | Thigh | Posterior | Semimembranosus |  |
| 221201 | Semimembranosus_Left | Left | LowerLimb | Thigh | Posterior | Semimembranosus |  |
| 221202 | Semimembranosus_Right | Right | LowerLimb | Thigh | Posterior | Semimembranosus |  |
| 221300 | Semitendinosus_Both | Both | LowerLimb | Thigh | Posterior | Semitendinosus |  |
| 221301 | Semitendinosus_Left | Left | LowerLimb | Thigh | Posterior | Semitendinosus |  |
| 221302 | Semitendinosus_Right | Right | LowerLimb | Thigh | Posterior | Semitendinosus |  |
| 222000 | Thigh_Medial_Both | Both | LowerLimb | Thigh | Medial |  |  |
| 222001 | Thigh_Medial_Left | Left | LowerLimb | Thigh | Medial |  |  |
| 222002 | Thigh_Medial_Right | Right | LowerLimb | Thigh | Medial |  |  |
| 222100 | Adductor_Magnus_Both | Both | LowerLimb | Thigh | Medial | AdductorMagnus |  |
| 222101 | Adductor_Magnus_Left | Left | LowerLimb | Thigh | Medial | AdductorMagnus |  |
| 222102 | Adductor_Magnus_Right | Right | LowerLimb | Thigh | Medial | AdductorMagnus |  |
| 222200 | Adductor_Minimus_Both | Both | LowerLimb | Thigh | Medial | AdductorMinimus |  |
| 222201 | Adductor_Minimus_Left | Left | LowerLimb | Thigh | Medial | AdductorMinimus |  |
| 222202 | Adductor_Minimus_Right | Right | LowerLimb | Thigh | Medial | AdductorMinimus |  |
| 222300 | Adductor_Longus_Both | Both | LowerLimb | Thigh | Medial | AdductorLongus |  |
| 222301 | Adductor_Longus_Left | Left | LowerLimb | Thigh | Medial | AdductorLongus |  |
| 222302 | Adductor_Longus_Right | Right | LowerLimb | Thigh | Medial | AdductorLongus |  |
| 222400 | Adductor_Brevis_Both | Both | LowerLimb | Thigh | Medial | AdductorBrevis |  |
| 222401 | Adductor_Brevis_Left | Left | LowerLimb | Thigh | Medial | AdductorBrevis |  |
| 222402 | Adductor_Brevis_Right | Right | LowerLimb | Thigh | Medial | AdductorBrevis |  |
| 222500 | Gracilis_Both | Both | LowerLimb | Thigh | Medial | Gracilis |  |
| 222501 | Gracilis_Left | Left | LowerLimb | Thigh | Medial | Gracilis |  |
| 222502 | Gracilis_Right | Right | LowerLimb | Thigh | Medial | Gracilis |  |
| 223000 | Thigh_Anterior_Both | Both | LowerLimb | Thigh | Anterior |  |  |
| 223001 | Thigh_Anterior_Left | Left | LowerLimb | Thigh | Anterior |  |  |
| 223002 | Thigh_Anterior_Right | Right | LowerLimb | Thigh | Anterior |  |  |
| 223100 | Iliopsoas_Both | Both | LowerLimb | Thigh | Anterior | Iliopsoas |  |
| 223101 | Iliopsoas_Left | Left | LowerLimb | Thigh | Anterior | Iliopsoas |  |
| 223102 | Iliopsoas_Right | Right | LowerLimb | Thigh | Anterior | Iliopsoas |  |
| 223110 | Iliacus_Both | Both | LowerLimb | Thigh | Anterior | Iliopsoas | Iliacus |
| 223111 | Iliacus_Left | Left | LowerLimb | Thigh | Anterior | Iliopsoas | Iliacus |
| 223112 | Iliacus_Right | Right | LowerLimb | Thigh | Anterior | Iliopsoas | Iliacus |
| 223120 | Psoas_Major_Both | Both | LowerLimb | Thigh | Anterior | Iliopsoas | PsoasMajor |
| 223121 | Psoas_Major_Left | Left | LowerLimb | Thigh | Anterior | Iliopsoas | PsoasMajor |
| 223122 | Psoas_Major_Right | Right | LowerLimb | Thigh | Anterior | Iliopsoas | PsoasMajor |
| 223200 | Quadriceps_Femoris_Both | Both | LowerLimb | Thigh | Anterior | QuadricepsFemoris |  |
| 223201 | Quadriceps_Femoris_Left | Left | LowerLimb | Thigh | Anterior | QuadricepsFemoris |  |
| 223202 | Quadriceps_Femoris_Right | Right | LowerLimb | Thigh | Anterior | QuadricepsFemoris |  |
| 223210 | Vastus_Lateralis_Both | Both | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusLateralis |
| 223211 | Vastus_Lateralis_Left | Left | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusLateralis |
| 223212 | Vastus_Lateralis_Right | Right | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusLateralis |
| 223220 | Vastus_Intermedius_Both | Both | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusIntermedius |
| 223221 | Vastus_Intermedius_Left | Left | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusIntermedius |
| 223222 | Vastus_Intermedius_Right | Right | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusIntermedius |
| 223230 | Vastus_Medialis_Both | Both | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusMedialis |
| 223231 | Vastus_Medialis_Left | Left | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusMedialis |
| 223232 | Vastus_Medialis_Right | Right | LowerLimb | Thigh | Anterior | QuadricepsFemoris | VastusMedialis |
| 223240 | Rectus_Femoris_Both | Both | LowerLimb | Thigh | Anterior | QuadricepsFemoris | RectusFemoris |
| 223241 | Rectus_Femoris_Left | Left | LowerLimb | Thigh | Anterior | QuadricepsFemoris | RectusFemoris |
| 223242 | Rectus_Femoris_Right | Right | LowerLimb | Thigh | Anterior | QuadricepsFemoris | RectusFemoris |
| 223300 | Sartorius_Both | Both | LowerLimb | Thigh | Anterior | Sartorius |  |
| 223301 | Sartorius_Left | Left | LowerLimb | Thigh | Anterior | Sartorius |  |
| 223302 | Sartorius_Right | Right | LowerLimb | Thigh | Anterior | Sartorius |  |
| 223400 | Pectineus_Both | Both | LowerLimb | Thigh | Anterior | Pectineus |  |
| 223401 | Pectineus_Left | Left | LowerLimb | Thigh | Anterior | Pectineus |  |
| 223402 | Pectineus_Right | Right | LowerLimb | Thigh | Anterior | Pectineus |  |
| 230000 | Hip_Both | Both | LowerLimb | Hip |  |  |  |
| 230001 | Hip_Left | Left | LowerLimb | Hip |  |  |  |
| 230002 | Hip_Right | Right | LowerLimb | Hip |  |  |  |
| 231000 | Hip_Superficial_Both | Both | LowerLimb | Hip | Superficial |  |  |
| 231001 | Hip_Superficial_Left | Left | LowerLimb | Hip | Superficial |  |  |
| 231002 | Hip_Superficial_Right | Right | LowerLimb | Hip | Superficial |  |  |
| 231100 | Gluteus_Maximus_Both | Both | LowerLimb | Hip | Superficial | GluteusMaximus |  |
| 231101 | Gluteus_Maximus_Left | Left | LowerLimb | Hip | Superficial | GluteusMaximus |  |
| 231102 | Gluteus_Maximus_Right | Right | LowerLimb | Hip | Superficial | GluteusMaximus |  |
| 231200 | Gluteus_Medius_Both | Both | LowerLimb | Hip | Superficial | GluteusMedius |  |
| 231201 | Gluteus_Medius_Left | Left | LowerLimb | Hip | Superficial | GluteusMedius |  |
| 231202 | Gluteus_Medius_Right | Right | LowerLimb | Hip | Superficial | GluteusMedius |  |
| 231300 | Gluteus_Minimus_Both | Both | LowerLimb | Hip | Superficial | GluteusMinimus |  |
| 231301 | Gluteus_Minimus_Left | Left | LowerLimb | Hip | Superficial | GluteusMinimus |  |
| 231302 | Gluteus_Minimus_Right | Right | LowerLimb | Hip | Superficial | GluteusMinimus |  |
| 231400 | Tensor_Fasciae_Latae_Both | Both | LowerLimb | Hip | Superficial | TensorFasciaeLatae |  |
| 231401 | Tensor_Fasciae_Latae_Left | Left | LowerLimb | Hip | Superficial | TensorFasciaeLatae |  |
| 231402 | Tensor_Fasciae_Latae_Right | Right | LowerLimb | Hip | Superficial | TensorFasciaeLatae |  |
| 232000 | Hip_Deep_Both | Both | LowerLimb | Hip | Deep |  |  |
| 232001 | Hip_Deep_Left | Left | LowerLimb | Hip | Deep |  |  |
| 232002 | Hip_Deep_Right | Right | LowerLimb | Hip | Deep |  |  |
| 232100 | Gemelli_Both | Both | LowerLimb | Hip | Deep | Gemelli |  |
| 232101 | Gemelli_Left | Left | LowerLimb | Hip | Deep | Gemelli |  |
| 232102 | Gemelli_Right | Right | LowerLimb | Hip | Deep | Gemelli |  |
| 232110 | Gemellus_Superior_Both | Both | LowerLimb | Hip | Deep | Gemelli | GemellusSuperior |
| 232111 | Gemellus_Superior_Left | Left | LowerLimb | Hip | Deep | Gemelli | GemellusSuperior |
| 232112 | Gemellus_Superior_Right | Right | LowerLimb | Hip | Deep | Gemelli | GemellusSuperior |
| 232120 | Gemellus_Inferior_Both | Both | LowerLimb | Hip | Deep | Gemelli | GemellusInferior |
| 232121 | Gemellus_Inferior_Left | Left | LowerLimb | Hip | Deep | Gemelli | GemellusInferior |
| 232122 | Gemellus_Inferior_Right | Right | LowerLimb | Hip | Deep | Gemelli | GemellusInferior |
| 232200 | Piriformis_Both | Both | LowerLimb | Hip | Deep | Piriformis |  |
| 232201 | Piriformis_Left | Left | LowerLimb | Hip | Deep | Piriformis |  |
| 232202 | Piriformis_Right | Right | LowerLimb | Hip | Deep | Piriformis |  |
| 232300 | Obturator_Internus_Both | Both | LowerLimb | Hip | Deep | ObturatorInternus |  |
| 232301 | Obturator_Internus_Left | Left | LowerLimb | Hip | Deep | ObturatorInternus |  |
| 232302 | Obturator_Internus_Right | Right | LowerLimb | Hip | Deep | ObturatorInternus |  |
| 232400 | Obturator_Externus_Both | Both | LowerLimb | Hip | Deep | ObturatorExternus |  |
| 232401 | Obturator_Externus_Left | Left | LowerLimb | Hip | Deep | ObturatorExternus |  |
| 232402 | Obturator_Externus_Right | Right | LowerLimb | Hip | Deep | ObturatorExternus |  |
| 232500 | Quadratus_Femoris_Both | Both | LowerLimb | Hip | Deep | QuadratusFemoris |  |
| 232501 | Quadratus_Femoris_Left | Left | LowerLimb | Hip | Deep | QuadratusFemoris |  |
| 232502 | Quadratus_Femoris_Right | Right | LowerLimb | Hip | Deep | QuadratusFemoris |  |

{% include list-pages tag="segment" %}