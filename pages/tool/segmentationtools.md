---

layout: page
title: SegmentationTools
permalink: /tool/segmentationtools/

tags: tools
header: no

images:
  - image_name: 'flowchart.png'
    image_title: 'flowchart for whole leg automated muscle segmentation using convolutional neural network with the UNET architecture.'
    image_alt: 'flowchart for whole leg automated muscle segmentation'
  - image_name: 'neural-small.gif'
    image_title: 'whole leg automated segmentation using convolutional neural network with the UNET architecture.'
    image_alt: 'muscle segmentation using convolutional neural network'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})

This toolbox provides functions to perform automated muscle segmentation.
For this trained convolutional neural network using the UNET architecture are included.
Currently we support the segmentations of 14 leg and 17 thigh muscles as well as
segmentation of all lower extremity bones. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Ronneberger O, Fischer P, Brox T (2015) U-net: Convolutional networks for biomedical image segmentation. 9351:234–241.
[link››](https://arxiv.org/abs/1505.04597)
> - Rohm M, Markmann M, Forsting J, Rehmann R, Froeling M, Schlaffke L. (2021). 3D automated segmentation of
lower leg muscles using machine learning on a heterogeneous dataset. Diagnostics. 11(10):1747. [link››](https://doi.org/10.3390/diagnostics11101747)
