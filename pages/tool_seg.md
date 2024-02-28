---

layout: page
permalink: /tool/segmentation

title: "Automated muscle segmentation"
subheadline: "Full leg AI segmentation using CNN"
teaser: "based on UNET architecture"

header: no

images:
  - image_id: 'legseg'
    image_name: 'segmentation small.gif'
    image_title: 'Full leg automated muscle segmentation using a convolutional neural network with UNET architecture.'
    image_alt: 'Full leg automated muscle segmentation using a convolutional neural network with UNET architecture.'  
  - image_id: 'flow'
    image_name: 'flowchart_seg.gif'
    image_title: 'Full leg automated muscle segmentation using a convolutional neural network with UNET architecture.'
    image_alt: 'Full leg automated muscle segmentation using a convolutional neural network with UNET architecture.' 
  - image_id: 'unet'
    image_name: 'blocks.png'
    image_title: 'Schematic representation of the unet architecture and the unet encoding and decoding blocks.'
    image_alt: 'Schematic representation of the unet architecture and the unet encoding and decoding blocks.'
  - image_id: 'upper'
    image_name: 'upper-demo.gif'
    image_title: 'Example of data augmentation used for training the upper leg segmentation UNET.'
    image_alt: 'Example of data augmentation used for training the upper leg segmentation UNET.'         
  - image_id: 'lower'
    image_name: 'lower-demo.gif'
    image_title: 'Example of data augmentation used for training the lower leg segmentation UNET.'
    image_alt: 'Example of data augmentation used for training the lower leg segmentation UNET.'        
  - image_id: 'exp'
    image_name: 'seg example.png'
    image_title: 'Example segmentations of the thigh and leg automated segmention UNET neural networks.'
    image_alt: 'Example segmentations of the thigh and leg automated segmention UNET neural networks.' 


---

Within `QMRITools` there is a function called `SegmentData` which is part of [Segmentationtools](https://www.qmritools.com/tool/segmentationtools), this function allows to automaticly segment lower extremity muscles of the hip, thigh and leg.
The function is based on 4 neural nets, two that recognize the side and location, and two that perform the muscle segmenataion, as is shown in the flowchart below. 

{% include page-image im_id="flow" %}

The network is trained on 20 manually segmented thigh and leg datasets. It currently only works on out-phase gradient echo images, which can either be acquired 
or reconsturcted using dixon based methods. The implementation allows for any size data and works best is the data has a inplane resolution of 1-2.5 mm and a 
slice thinkness of 5-10 mm. The latest version of the trained networks are availible in the QMRItools package as `.wlnet` files. Upon request `*.ONNX` files are also
availible. An example of a fully segmented leg dataset is shown below.

{% include page-image im_id="legseg" %}

### Architecture and training

The segmentation networks are based on the UNET architectrue with ResNet convolution blocks that contain short skip connections. Below are the block diagrams of the encoding
and decoding blocks used in our unet architecture.

{% include page-image im_id="unet" %}

For training the data is heavily augmented using: scale, skew, rotation, translation, noise, sharpen, contrast and and brightness. Training is done with a batch size of 2 and a 
patch size of 32x112x112 voxels and 256 datasets are seen per epoch. Patches are selected after data augmentation. Below are two examples of the first 100 epochs for the upper and lower leg. 
Training is typically continued for 200-300 epochs (8-12 hours). The resulting segmentation of both neworks is shown below.

{% include page-image im_id="upper" %}
{% include page-image im_id="lower" %}
{% include page-image im_id="exp" %}

### Features include

- Automated region recognition
- Memory optimized segmentation
- CPU and GPU support
- Automated patching and merging
- Standardized muscle labels