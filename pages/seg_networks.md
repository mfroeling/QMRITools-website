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

With our framework we are able to automatically detect the body location. For each body part dedicated small light weight networks are developed and trained. If the data contains multiple locations the data is cut in various regions with considerable overlap and each is segmented by the correct neural network after which everything is collected in one segmentations file. 

{% include page-image im_id="location" %}

We aim to have segmentations networks for both GE and TSE Dixon based imaging that work on the raw magnitude data, in and out phase images and the reconstructed water and fat maps. Segmentation works best on 3D continuous datasets however those are not always available. Therefore we train all our networks in 2D and 3D. If data is acquired in 2D with slice gaps or extremely thick slices the 2D networks can be used. However 3D continuous data with 3D segmentation networks outperform the 2D variants consistently. 

{% include page-image im_id="networks" %}

{% include list-pages tag="segment" %}

We gratefully acknowledge the support of NVIDIA with the donation of GPU used for this work.
