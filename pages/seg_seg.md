---

layout: page
permalink: /seg/segmentation

title: "Automated muscle segmentation"
subheadline: "AI muscle segmentation of the leg, hip, shoulder and arm using CNN"
teaser: "muscle segmentation based on UNET architecture"

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
  - image_id: 'augmentation'
    image_name: 'augment.png'
    image_title: 'Example of data augmentation used for training the upper and lower leg segmentation UNET.'
    image_alt: 'Example of data augmentation used for training the upper and lower leg segmentation UNET.'         
  - image_id: 'lower'
    image_name: 'lower-demo.gif'
    image_title: 'Example of data augmentation used for training the lower leg segmentation UNET.'
    image_alt: 'Example of data augmentation used for training the lower leg segmentation UNET.'        
  - image_id: 'exp'
    image_name: 'seg example.png'
    image_title: 'Example segmentations of the thigh and leg automated segmentation UNET neural networks.'
    image_alt: 'Example segmentations of the thigh and leg automated segmentation UNET neural networks.' 
  - image_id: 'train'
    image_name: 'train.gif'
    image_title: 'Animation of 3D UNET learning to segment muscle data.'
    image_alt: 'Animation of 3D UNET learning to segment muscle data.' 

tags: 
  - segment

---

The `SegmentData` function within the `QMRITools` package automatically segments the muscles of the lower extremities, hip and shoulder, and (3D only) the arm, and can segment several of these regions in one dataset. This function is an essential tool in the [SegmentationTools](https://www.qmritools.com/tool/segmentationtools) package, leveraging neural networks for precise muscle segmentation. It is the segmentation engine used in the [Muscle-BIDS](../../bids/) pipeline.

## Function Overview for muscle segmentation

`SegmentData` works in two steps:

- **Side and location recognition:** one classification network (`Body_Pos_Side`) identifies the body location (lower leg, knee, upper leg, hip, torso, shoulder, head and neck) and the side (left/right) of the data. If the data contains multiple locations, it is cut in regions with overlap.
- **Muscle segmentation:** for each region a dedicated network, available in 2D and 3D, performs the segmentation (shoulder, hip, upper leg and lower leg; the arm network is 3D only). The results are merged into one segmentation with standardized [muscle labels](../naming). An overview is given on the [networks page](../networks).

{% include page-image im_id="flow" %}

The networks work on gradient echo and turbo spin echo Dixon data (in-phase, out-phase, raw echo, water and fat images) and diffusion data. The implementation supports any data size, and if the voxel size is given the data is rescaled to the resolution of the network. 3D continuous data with the 3D networks gives the best results; the 2D networks can be used for data with slice gaps or very thick slices. The trained networks are available as `.wlnet` files within the [QMRITools package](https://github.com/mfroeling/QMRITools/releases), and `.ONNX` files can be requested.

``` mathematica
seg = SegmentData[data];                        (* full body default *)
seg = SegmentData[{data, vox}, "UpperLegsBody"]; (* a specific region, with voxel size *)
```

With the `what` argument the region is selected, e.g. `"Body"` (default), `"LegsBody"`, `"HipBody"`, `"UpperLegsBody"`, `"LowerLegsBody"` or `"ShoulderBody"`. The legacy options `"Legs"`, `"LegsHip"`, `"UpperLegs"`, `"LowerLegs"`, `"Hip"`, `"Shoulder"` and `"Arm"` return the older label sets. The options `SegmentationDimension` (`"2D"` or `"3D"`), `TargetDevice` (`"CPU"` or `"GPU"`) and `NetworkOutput` (e.g. `"Both"` to also return the confidence) control the segmentation. `SegmentDataGUI[]` opens a graphical interface, and [MuscleMap](https://musclemap.github.io/MuscleMap/){:target="_blank"} can be run with `RunMuscleMap`.

## Architecture and Training

The segmentation networks are based on the UNET architecture with ResNet convolution blocks that contain short skip connections. Other architectures (UNET++, strided-convolution downscaling) and block types are available. The networks are built with the [NeuralNetworkTools](../../tool/neuralnetworktools/). The block diagrams of the encoding and decoding blocks used in our UNET architecture are shown below.

{% include page-image im_id="unet" %}

## Data Augmentation and Training

For training, data is heavily augmented using various techniques such as scale, skew, rotation, translation, noise, sharpen, contrast, and brightness adjustments. Patches are selected after data augmentation. The default training settings are a batch size of 2, a patch size of 32x96x96 voxels and 256 patches seen per training round, see the [methods page](../methods) for details and for training your own network. Below are examples of 36 different patches with augmentation selected from the same dataset. The resulting segmentation from both networks are displayed. The training for the upper leg is shown below.

{% include page-image im_id="augmentation" %}
{% include page-image im_id="train" %}

## Using SegmentData as a Script

No Mathematica license? Not a problem it also works without, using the free Wolfram Engine and the script `Segment_Nii.wls`, which also lets you select the region and the GPU. How this works you can read [in the script tutorial](https://www.qmritools.com/seg/script){:target="_blank"}. The README in the [scripts folder](https://github.com/mfroeling/QMRITools/tree/master/scripts){:target="_blank"} on GitHub has the same instructions.

{% include page-image im_id="exp" %}

## Features Include

- Automated region recognition
- Multiple regions and contrasts, in 2D and 3D
- Memory optimized segmentation
- CPU and GPU support
- Automated patching and merging
- Standardized muscle labels
- Confidence maps and segmentation quality checks
- Train your own networks, with multi-contrast training and transfer learning

{% include list-pages tag="segment" %}

We gratefully acknowledge the support of NVIDIA with the donation of the GPU used for this work.
