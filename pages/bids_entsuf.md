---

layout: page
permalink: /bids/ents_suffs/

title: "Entities and suffixes"
subheadline: "Naming conventions of entities and suffixes"
teaser: "The boring stuff but useful..."

header: no

tags: 
  - bids

---

As mentioned in main description, Muscle-BIDS uses various standardized entities and suffixes. Any toolbox is allowed to add as many of those as they want. However, if one uses non-standard entities and suffixes other software packages will probably not know how to use them. The list of BIDS entities can be found [here](https://bids-specification.readthedocs.io/en/stable/appendices/entities.html) and an overview of how to use entities and which are OPTIONAL or REQUIRED can be found [here](https://bids-specification.readthedocs.io/en/stable/appendices/entity-table.html). 

## Entities

Within `QMRITools` the following entities are used. Based on these values the software will know how to handle the data for further processing.

- `sub-<label>`: The subject label which is an unique identifier for each subject. All data of this subject should be contained within this subjects folder.
- `ses-<index>`: The session label which can be repeated scans of the same protocol, for example for reproducibility studies. If no session is given in the source data folder name, session `001` is used.
- `stk-<label>` or `chunk-<label>`: For imaging extremities it is not uncommon to acquire the data in multiple stacks/chunks that have to be merged. This label identifies the stack. Which word is used depends on the `Class` (`"Stacks"` or `"Chunks"`) of the dataset in the config file.
- `rep-<label>`: The same scan repeated several times (`Class` `"Repetitions"`).
- `acq-<label>`: For muscle studies sometimes dynamic experiments are performed, e.g. the same data type but in different conditions (for example ankle flexion) within the same session. This label indicates the acquisition description (`Class` `"Acquisitions"`).
- `vol-<label>`: A volume, used for single scans or diffusion scans that are joined into one dataset (`Class` `"Volume"` or `"Volumes"`).
- `part-<label>`: MRI data can be stored as magnitude, phase, real or imaginary. The label can be mag, phase, real, imag

The class words (`vol`, `stk`, `chunk`, `rep`, `acq`) are chosen by the `Class` of the dataset in the config file, see the [Muscle-BIDS manual](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.md#data-description-keys){:target="_blank"}.

## Suffixes: data type

The current data-type suffixes are recognized and can be automatically be processed and have their own folders. The data type is set by the `Type` of the dataset in the config file:

- `_megre` (and `_tse`): Multi-echo gradient echo (or turbo spin echo) scans, stored in the folder `dix` and used to perform Dixon reconstruction.
- `_dwi`: Spin echo diffusion-weighted imaging, used for DTI and IVIM analysis. All diffusion weighted data has the same pre-processing. Based on the script configuration it can be used for: fasciculation detection, DTI analysis or IVIM analysis, or any combination of these.
- `_mese`: Multi-echo spin-echo, stored in the folder `quant` and used for T2 mapping. These are the scans that will be used for EPG-based T2 reconstruction.
- `_seg`: Muscle segmentations with labels.
- `_t1`, `_t2`, `_wt2` (folder `quant`) and `_t1w`, `_t1w_fs`, `_t2w`, `_t2w_fs` (folder `anat`) are recognized for the folder structure but are currently not converted or processed by the pipeline.

## Suffixes: Folder specific

For each data folder, the data that can be stored there is defined by its suffix or combination of suffixes, e.g. `"_t1w_fs"`, `"_dwi_ivim_dti"`, or `"_mese_t2"`. Although any suffixes can be combined and used the following suffixes related to data acquisition and type currently have meaning within `QMRITools`.

- `anat`
  - `_t1w`: T1 weighted data.
  - `_t1w_fs`: T1 weighted data with fat suppression.
  - `_t2w`: T2 weighted data.
  - `_t2w_fs`: T2 weighted data with fat suppression.
- `megre`
  - `_dix`: Data intended for Dixon reconstruction.
- `dwi`
  - `_ivim`: DWI data intended for IVIM modelling.
  - `_dti`: DWI data intended for DTI modelling.
  - `_dki`: DWI data intended for DKI modelling.
  - `_fasc`: DWI data intended for fasciculation detection.
- `quant`
  - `_t1`: Data for calculation of a quantitative T1 map.
  - `_t2`: Data for calculation of a quantitative global T2 map.
  - `_wt2`: Data for calculation of a quantitative global T2 map.
- `seg`
  - `_man`: Manually drawn segmentations.
  - `_auto`: Automatically generated segmentations.

## Suffixes: Data processing

When the raw input data is processed its outputs are stored in the derived data folder (by default `03_derivatives`, and `04_merged` for merged data and segmentations, see [files and folders](../files_folders/)). Within the derived data folder a new Muscle-BIDS structure is created identical to that of the source data.

`QMRITools` uses suffixes to indicate what data is generated. The following suffixes are used:

- `megre_dix`
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
  - `_mag`, `_ph`: the magnitude and phase of the data.
  - `_snr`, `_sig`: the SNR map and the noise sigma estimated from the data.
  - `_phbp`, `_phbpt`, `_phii`, `_phbpi` (and `_dbond` for the double bond fit): additional phase and fat model outputs of the bipolar (and double bond) Dixon reconstruction.
- `_dwi`
  - `_raw`: The raw data before processing.
  - `_mean`: The geometric mean of each b-value.
  - `_den`: The denoised dwi data.
  - `_reg`: The registered dwi data.
  - `_filt`: The denoised data after anisotropic smoothing (`P2SDenoise`).
  - `_field`: The gradient non-linearity field, only when gradient correction is used.
  - `_sig`: The noise sigma estimated using PCA denoising.
  - `_snr`: The SNR map per volume.
  - `_snr0`: The average SNR of all b = 0 s/mm2 volumes.
- `dwi_dti`
  - `_md`: The mean diffusivity from DTI fitting.
  - `_rd`: The radial diffusivity from DTI fitting.
  - `_fa`: The fractional anisotropy from DTI fitting.
  - `_l1`, `_l2`, `_l3`: The tensor eigenvalues from DTI fitting (l1 is equal to the axial diffusivity).
  - `_s0`: The estimated b = 0 s/mm2 from DTI fitting.
  - `_out`: The outlier map estimated using REKINDLE.
  - `_tens`: The calculated diffusion tensor (xx, yy, zz, xy, xz, yz) using iWLLS estimation and outlier rejection.
  - `_res`: The root-mean-square residuals after tensor estimation.
  - `_data`: The data used for fitting after all preprocessing.
- `dwi_ivim`
  - `_adci`: The apparent diffusion coefficient from IVIM fitting.
  - `_fri`: The perfusion fraction from IVIM fitting.
  - `_s0i`: The estimated b = 0 s/mm2 from IVIM fitting.
- `dwi_fasc`
  - `_fasc`: The identified fasciculation from MU-MRI analysis.
  - `_fascm`: The selected fasciculations.
  - `_norm`: Normalized data per volume used for fasciculation detection.
- `mese_t2`
  - `_b1`: The B1 map from the EPG-based fitting (`EPGT2` method).
  - `_t2w`: The T2 water map from the EPG-based fitting.
  - `_t2f`: The T2 fat map from the EPG-based fitting.
  - `_fat`: The estimated fat signal from the EPG-based fitting.
  - `_wat`: The estimated water signal from the EPG-based fitting.
  - `_fatfr`: The calculated fat fraction from the EPG-based fitting.
  - `_res`: The root-mean-square residuals after EPG-based fitting.
  - `_t2`: The global T2 calculated with exponential fitting (`Exp` method).
  - `_s0`: The estimated signal at TE = 0 ms from exponential fitting (`Exp` method).
  - `_data`: The data used for fitting.
- `seg`
  - `_man`: Indicates the segmentations have been drawn manually.
  - `_auto`: Indicates the segmentations have been generated automatically.
  - `_megre`: Indicates the segmentation aligns with the megre data.
  - `_dwi`: Indicates the segmentation aligns with the dwi data.
  - `_t2`:  Indicates the segmentation aligns with the t2 data.

{% include list-pages tag="bids" %}