---

layout: page
permalink: /bids/

title: "Muscle-BIDS"
subheadline: "Automated muscle MRI processing from DICOM to per-muscle results"
teaser: "Why QMRITools uses Muscle-BIDS"

header: no

images:
  - image_id: 'proc'
    image_name: 'flowchart_proc.gif'
    image_title: 'flowchart for whole leg automated muscle segmentation using convolutional neural network with the UNET architecture.'
    image_alt: 'flowchart for whole leg automated muscle segmentation'

tags: 
  - bids

---


## Why Muscle-BIDS

For automated data processing of processing with various tool-boxes data management is important. For this, the muscle MRI community is developing the Muscle BIDS data structure. When data is organized in this way all needed parameters and data sets can automatically be found, which enables automated processing and evaluation of large data sets. Furthermore, each toolbox that is Muscle-BIDS compatible can run its analysis on the same data without the need to restructure the data input. The last advantage is that the output is also standardized which makes the comparison of results and methods more convenient. More about Muscle-Bids can be found [here>>](https://muscle-bids.github.io/).

## QMRITools and Muscle-BIDS

QMRITools contains a complete Muscle-BIDS pipeline that takes a study from DICOM to per-muscle results. Of course, all functionality of QMRITools remains available without the use of Muscle-BIDS, but for standardized qMRI muscle studies using the Muscle-BIDS conventions can save lots of time.

Automated processing only works if all input data is well-curated and defined. The general rule of garbage in is garbage out applies here as well. A config file (`config.json`) for a study describes which data to expect and in which form. Based on the data described the correct (pre-)processing is selected and performed. If expected data is not found the processing step is skipped, and if data is not described in the config it is ignored. The config file can be general for the entire study folder, or can be defined on a per subject or session level to make exceptions.

**Muscle BIDS manual:** a complete manual with a step by step example, all config options and troubleshooting is available [on GitHub](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.md){:target="_blank"} (also as [pdf](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.pdf){:target="_blank"}). Example config files for different studies are listed under [manuals and scripts](../doc/manuals).

The pipeline runs in the following steps, each step writes its results in its own folder and already processed data is skipped:

> 1. `BidsDcmToNii`: conversion of DICOM to raw NIfTI (using dcm2niix).
> 2. `MuscleBidsConvert`: collecting, renaming and moving the data to Muscle-BIDS compliant files and folders, based on the config file.
> 3. `MuscleBidsProcess`: processing of the data, such as Dixon reconstruction, IVIM-DTI preprocessing and modelling, and water T2 mapping with EPG modelling.
> 4. `MuscleBidsMerge`: merging of multiple stacks into one dataset.
> 5. `MuscleBidsSegment`: automated muscle segmentation, see [automated muscle segmentation](../seg/segmentation/).
> 6. `MuscleBidsTractography`: whole volume muscle fiber tractography.
> 7. `MuscleBidsAnalysis`: extraction of the qMRI parameters per muscle, and of tract based and muscle architecture parameters, to Excel files for statistical analysis.

{% include page-image im_id="proc" %}

Reprocessing of data can be forced for all data, or for data processed before a specific date or with an older `QMRITools` version. To keep track of this `QMRITools` creates additional `.json` files with the suffix `_check`. The manual describes how to [view and check](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.md#checking-and-viewing-your-study){:target="_blank"} the study and how to force a redo.

## General guidelines

Within `QMRITools` a Muscle-BIDS dataset is composed of:

> - One NIfTI file containing the image data.
> - One JSON header named identical to the NIfTI file containing the imaging parameters relevant to the specific acquisition type and processing.

Multi-slice 2D acquisitions are saved as a 3D NIfTI volume. Where the voxel size stored in the Nifti file is the slice spacing rather than the actual slice thickness. In the header, the actual slice thickness and slice spacing are stored.
To reduce the number of files, where appropriate, 4D NIfTI datasets are used instead of multiple 3D files (for example, multi-echo or diffusion data). The quantity that changes in the fourth dimension is identified by the parameter `FourthDimension` in the header. E.g. `"FourthDimension": "EchoTime"`. The value of the `FourthDimension` field must have a corresponding entry in the header, which is a list of values corresponding to each index along the fourth dimension. E.g. `"EchoTime": [3.9, 6.3]`.

A Muscle-BIDS dataset must contain the source data, which in this case is the unprocessed nifty data with its headers. Each unique subject has its folder. Within the subject folder, there are session folders for when the same subject is scanned on multiple occasions. Within the session folder, each datatype is again stored in its subfolders.

`QMRITools` add various other logging and file tree files to each folder that are not mandatory but can be useful and are sometimes needed for processing. The folder structure of a study (`01_sourcedata` to `05_analysis`), with an example, is described on the [files and folders](../files_folders/) page.


{% include list-pages tag="bids" %}