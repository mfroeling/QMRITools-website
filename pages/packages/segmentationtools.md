---

layout: page
title: SegmentationTools
permalink: /tool/segmentationtools/

header: no

images:
  - image_name: 'flowchart_seg.gif'
    image_title: 'flowchart for whole leg automated muscle segmentation using convolutional neural network with the UNET architecture.'
    image_alt: 'flowchart for whole leg automated muscle segmentation'
  - image_name: 'neural-small.gif'
    image_title: 'whole leg automated segmentation using convolutional neural network with the UNET architecture.'
    image_alt: 'muscle segmentation using convolutional neural network'

tags: 
  - packages

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}}.html){:target="_blank"}
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/SegmentationTools.wl)

This toolbox provides functions to perform automated muscle segmentation.
For this trained convolutional neural networks using the UNET architecture are included.
Currently we support the segmentation of the muscles and bones of the lower leg, upper leg, hip and shoulder (2D and 3D) and of the arm (3D), with standardized full body [muscle labels](/seg/naming).
The toolbox also contains functions for data preparation, training of your own networks (including multi contrast training and transfer learning), network evaluation and quality control, and it can run [MuscleMap](https://musclemap.github.io/MuscleMap/){:target="_blank"}. The general neural network functions (building UNETs, loss layers, freezing layers) are in the [NeuralNetworkTools](/tool/neuralnetworktools/).
See the [segmentation pages](/seg/segmentation/) for details, and [Segmentation with command line scripts](/seg/script/) to use it without Mathematica. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Ronneberger O, Fischer P, Brox T (2015) U-net: Convolutional networks for biomedical image segmentation. 9351:234–241.
[link››](https://arxiv.org/abs/1505.04597)
> - Rohm M, Markmann M, Forsting J, Rehmann R, Froeling M, Schlaffke L. (2021). 3D automated segmentation of
lower leg muscles using machine learning on a heterogeneous dataset. Diagnostics. 11(10):1747. [link››](https://doi.org/10.3390/diagnostics11101747)
