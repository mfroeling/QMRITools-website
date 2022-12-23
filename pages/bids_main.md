---
layout: page
title: "Muscle-BIDS"
subheadline: "How to use Muscle-BIDS in QMRITools"
teaser: "Muscle-BIDS is a work in progress..."
permalink: /bids/
header: no
---

## Muscle-Bids

For automated data processing of processing with various tool-boxes data management is important. For this the muscle MRI community is developing the Muscle BIDS data structure. When data is organized in this way all needed parameters and data-sets can automatically be found, which enables automated processing and evaluation of large data-sets. Furthermore, each tool-box that is Muscle-BIDS compatible can run its analysis on the same data without the need to restructure the data input. The last advantage is that the output is also standardized which makes comparison of results and methods more convenient. More about Muscle-Bids can be found [here>>](https://muscle-bids.github.io/).

## QMRITools and Muscle-BIDS

A Muscle-BIDS pipeline can support the following steps:

1. Conversion of DICOM to raw Muscle-BIDS NIfTI
2. Processing of Muscle-BIDS data
3. Analysis of processed Muscle-BIDS data
4. Conversion of Muscle-BIDS output to DICOM

Currently QMRITools supports step 1 for Philips MRI data if the data acquisition is performed in a standardized way. Further more it fully supports step 2 and 3 for DIXON, T2 and DTI processing and analysis. On this page, for each step it is explained how QMRITools handles Muscle-BIDS data and what function can be used. Eventually the aim is to be able to fully automate steps 1 to 4 using stand-alone scripts that only need to be configured once per study or data-set. 

## QMRITools Muscle-BIDS definitions

Within the bids standard filenames contain information label such as subject name, data type and sessions followed by a suffix containing extra information. Each label if followed by a value \<label\>-\<value\> connected by a "-". Each label is concatenated by a "\_", for example `sub-PAT001_ses-001`. After the last "_" any number of suffixes can follow. The data type is the first suffix, for example `sub-PAT001_ses-001_dwi.nii.gz`.

#### Muscle-BIDS labels

QMRITools files and folders within Muscle-BIDS can currently contain and recognize the following labels:

- `sub-<name>`: The subject label which is an unique identifier for each subject. All data of this subject should be contained within this subjects folder.
- `ses-<index>`: The session label which can be repeated scans of the same protocol, for example for reproducibility studies
- `stk-<index>`: For imaging extremities it is not uncommon to acquire the data in multiple stacks that have to be merged. This label indicates the stack number.
- `rep-<index>`: For muscle studies sometimes dynamic experiments are performed, e.g. the same data type but in different conditions (for example ankle flexion) within the same session. This label indicates the repetition description.

#### Muscle-BIDS types

The current data-type suffixes are recognized and can be automatically be processed and have their own folders:

- `_megre`: Multi-echo gradient echo scans (minimal of 3 echos) that will be used to perform Dixon reconstruction.
- `_dwi`: Diffusion weighted data. All diffusion weighted data has the same pre-processing. Based on the script configuration it can be used for: fasciculation detection, DTI analysis or IVIM analysis, or any combination of these.
- `_t2`: Multi-echo spin echo scans that will be used for EPG-based T2 reconstruction.
- `_seg`: Muscle segmentations.

#### Muscle-BIDS suffixes

The QMRITools software uses following suffixes:

- `_megre`
	- `_b0i`: The B0 map from to in-phase echos of the megre data which is used as initialization of the iDeal reconstruction.
	- `_b0`: The B0 map from the iDeal reconstruction.
	- `_t2stari`: The T2\* map from exponential fitting of the megre echos which is used as initialization of the iDeal reconstruction.
	- `_t2star`: The T2\* map from the iDeal reconstruction.
	- `_r2star`: The R2\* map from the iDeal reconstruction.
	- `_inph`: Reconstructed in phase image from the iDeal reconstruction.	
	- `_outph`: Reconstructed out phase image from the iDeal reconstruction.
	- `_wat`: Reconstructed water signal from the iDeal reconstruction.
	- `_fat`: Reconstructed fat from the iDeal reconstruction.
	- `_fatfr`: Calculated fat fraction using the complex signal.
	- `_watfr`: Calculated water fraction using the complex signal.
	- `_itt`: the number of iDeal iteration used in the reconstruction.
	- `_res`: the root-mean-square residuals of the iDeal reconstruction.
	- `_phi`: the static phase offset from the iDeal reconstruction.
	- `_real`: the real data used for fitting.
	- `_imag`: the imaginary data used for fitting.
- `_dwi`
	- `_md`: The mean diffusivity from DTI fitting.
	- `_rd`: The radial diffusivity from DTI fitting.
	- `_fa`: The fractional anisotropy from DTI fitting.
	- `_l1`, `_l2`, `_l3`: The tensor eigenvalues from DTI fitting (l1 is equal to the axial diffusivity).
	- `_adci`: The apparent diffusion coefficient from IVIM fitting.
	- `_fr`: The perfusion fraction form piecewise IVIM fitting.
	- `_fri`: The perfusion fraction from IVIM fitting
	- `_s0`: The estimated b = 0 s/mm2 from DTI fitting.
	- `_s0i`: The estimated b = 0 s/mm2 from IVIM fitting.
	- `_den`: The denoised dwi data.
	- `_reg`: The registered dwi data.
	- `_mean`: The geometric mean of each b-value.
	- `_sig`: The noise sigma estimated using PCA denosing.
	- `_snr`: The SNR map per volume.
	- `_snr0`: The average SNR of all b = 0 s/mm2 volumes. 
	- `_out`: The outlier map estimated using REKINDLE.
	- `_tens`: The calculated diffusion tensor (xx, yy, zz, xy, xz, yz) using iWLLS estimation and outlier rejection.
	- `_res`: The root-mean-square residuals after tensor estimation.
	- `_resi`: The root-mean-square residuals after IVIM estimation.
	- `_fasc`: The identified fasciculation from MU-MRI analysis. 
	- `_norm`: Normalized data per volume used for fasciculation detection.
	- `_data`: The data used for fitting.
- `_t2`
	- `_b1`: The B1 map from the EPG-based fitting.
	- `_t2w`: The T2 water map from the EPG-based fitting.
	- `_t2f`: The T2 fat map from the EPG-based fitting.
	- `_fat`: The estimated fat signal from the EPG-based fitting.
	- `_wat`: The estimated water signal from the EPG-based fitting.
	- `_fatfr`: The calculated fat fraction from the EPG-based fitting.
	- `_watfr`: The calculated water fraction from the EPG-based fitting.
	- `_res`: The root-mean-square residuals after EPG-based fitting.
	- `_s0`: The estimated signal at TE = 0 ms from EPG-based fitting.
	- `_s0g`: The estimated signal at TE = 0 ms from exponential fitting.
	- `_t2g`: The global T2 calculated with exponential fitting.
	- `_data`: The data used for fitting.
- `_seg`
	- `_man`: Indicates the segmentations have been drawn manually.
	- `_megre`: Indicates the segmentation aligns with the megre data.
	- `_dwi`: Indicates the segmentation aligns with the dwi data.
	- `_t2`: \ Indicates the segmentation aligns with the t2 data.
	- `_smooth`: Indicates the segmentations have been processed with a mask smoothing algorithm.
	- `_ero`: Indicates the segmentations have been eroded.

#### Example of a Muscle-BIDS data-set

Below is an example of a Muscle Bids data-sets containing two subjects and two types. For each types 5 stacks were acquired.

<div style="
	background-color:black; 
	font-family:Roboto Mono,SFMono-Regular,Consolas,Menlo,monospace; 
	line-height: 1.17; 
	padding-top: 25px; 
	padding-bottom: 25px;
	padding-left: 15px;
	padding-right: 15px;
	color: white; 
	font-weight: bold; 
	font-size: 12px">
└─02_rawdata/<br>
&nbsp;&nbsp;├─sub-Test001/<br>
&nbsp;&nbsp;│&nbsp;├─ses-001/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dix/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_megre_imag.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_megre_imag.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_megre.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─..<<34>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-005_megre_ph.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-005_megre_real.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;└─sub-Test001_ses-001_stk-005_megre_real.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_dwi_dti.bval<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_dwi_dti.bvec<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-001_dwi_dti.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─..<<14>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-005_dwi_dti.bvec<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test001_ses-001_stk-005_dwi_dti.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;└─sub-Test001_ses-001_stk-005_dwi_dti.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─101_20221213162506_20221212-set1_Ph_20221212-set1_SURVEY_2_LEG_GR.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─101_20221213162506_20221212-set1_Ph_20221212-set1_SURVEY_2_LEG_GR.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─201_20221213162506_20221212-set1_Ph_20221212-set1_SURVEY_2_LEG_GR.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─..<<512>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─905_20221213162506_20221212-set1_Ph_20221212-set1_WIP_DTI5_SE.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─905_20221213162506_20221212-set1_Ph_20221212-set1_WIP_DTI5_SE.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;└─DcmToNiiLog.txt<br>
&nbsp;&nbsp;│&nbsp;├─BIDSConvert.log<br>
&nbsp;&nbsp;│&nbsp;└─FileTree.txt<br>
&nbsp;&nbsp;├─sub-Test002/<br>
&nbsp;&nbsp;│&nbsp;├─ses-001/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dix/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_megre_imag.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_megre_imag.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_megre.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─..<<34>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-005_megre_ph.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-005_megre_real.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;└─sub-Test002_ses-001_stk-005_megre_real.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_dwi_dti.bval<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_dwi_dti.bvec<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-001_dwi_dti.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─..<<14>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-005_dwi_dti.bvec<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;├─sub-Test002_ses-001_stk-005_dwi_dti.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;│&nbsp;└─sub-Test002_ses-001_stk-005_dwi_dti.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─101_20221213173147_20221212-set2_Ph_20221212-set2_SURVEY_2_LEG-1_GR.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─101_20221213173147_20221212-set2_Ph_20221212-set2_SURVEY_2_LEG-1_GR.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─201_20221213173147_20221212-set2_Ph_20221212-set2_SURVEY_2_LEG-2_GR.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─..<<432>>..<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─805_20221213173147_20221212-set2_Ph_20221212-set2_WIP_DTI5_SE.json<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;├─805_20221213173147_20221212-set2_Ph_20221212-set2_WIP_DTI5_SE.nii.gz<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;&nbsp;&nbsp;└─DcmToNiiLog.txt<br>
&nbsp;&nbsp;│&nbsp;├─BIDSConvert.log<br>
&nbsp;&nbsp;│&nbsp;└─FileTree.txt<br>
&nbsp;&nbsp;├─DcmToNii_221222-123645.log<br>
&nbsp;&nbsp;├─DcmToNii_221222-123816.log<br>
&nbsp;&nbsp;├─DcmToNii_221222-150508.log<br>
&nbsp;&nbsp;├─DcmToNii_221222-173029.log<br>
&nbsp;&nbsp;├─DcmToNii_221222-183923.log<br>
&nbsp;&nbsp;├─FileTreeMain.txt<br>
&nbsp;&nbsp;└─FileTree.txt
</div>

### Conversion of DICOM to raw Muscle-BIDS NIfTI

Work in progress

### Processing of Muscle-BIDS data

Work in progress

### Analysis of Muscle-BIDS data

Work in progress
