---

layout: page
permalink: /seg/networks

title: "The available segmentation networks"
subheadline: "Multi contrast, 2D and 3D"
teaser: "Aiming to cover the full body"

header: no

images:
  - image_id: 'location'
    image_name: 'Locations.png'
    image_title: 'Body locations for which muscle segmentation UNETs are developed.'
    image_alt: 'Body locations for which muscle segmentation UNETs are developed.' 
  - image_id: 'networks'
    image_name: 'Networks.png'
    image_title: 'Body locations for which muscle segmentation UNETs are done.'
    image_alt: 'Body locations for which muscle segmentation UNETs are done.'  

tags: 
  - segment

---

With our framework we are able to automatically detect the body location. For each body part dedicated small light weight networks are developed and trained. If the data contains multiple locations the data is cut in various regions with considerable overlap and each is segmented by the correct neural network after which everything is collected in one segmentation file.

{% include page-image im_id="location" %}

We aim to have segmentation networks for both GE and TSE Dixon based imaging that work on the raw magnitude data, in and out phase images and the reconstructed water and fat maps. Segmentation works best on 3D continuous datasets however those are not always available. Therefore we train our networks in 2D and 3D (except for the arm, see below). If data is acquired in 2D with slice gaps or extremely thick slices the 2D networks can be used. However 3D continuous data with 3D segmentation networks outperform the 2D variants consistently.

{% include page-image im_id="networks" %}

### Networks included in QMRITools

Before segmentation, one classification network (`Body_Pos_Side`) determines the body location and side of the data. The following region networks are included.

| Region | 2D network | 3D network | Label file |
| --- | --- | --- | --- |
| Shoulder | yes | yes | `N2_Shoulder` |
| Hip | yes | yes | `N4_Hip` |
| Upper leg | yes | yes | `N5_UpperLeg` |
| Lower leg | yes | yes | `N6_LowerLeg` |
| Arm | no | yes | `N7_Arm` |
| Torso | not yet available | not yet available | `N3_Torso` |
| Head and neck | not yet available | not yet available | `N1_HeadNeck` |

The output of the networks is converted to standardized [muscle labels](../naming). The full body label set (`S1`) is used by default, and older label sets for the legs and hip (`S2`), shoulder (`S3`) and upper arm (`S4`) are available. How to use the networks is described [here](../segmentation), and how to train your own networks [here](../methods).

{% include list-pages tag="segment" %}

We gratefully acknowledge the support of NVIDIA with the donation of GPU used for this work.
