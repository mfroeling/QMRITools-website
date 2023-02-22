---

layout: page
permalink: /bids/ents_suffs/

title: "Entities and suffixes"
subheadline: "Naming conventions of entities and suffixes"
teaser: "The boring stuff but usefull..."

header: no

---

As mentioned in main description, Muscle-BIDS uses various standardized entities and suffixes. Any toolbox is allowed to add as many of those as they want. However, if one uses non-standard entities and suffixes other software packages will probably not know how to use them. 


## Entities

Within `QMRITools` currently, four entities are used to indicate the subject, session, stack or repetition.  Based on these values the software will know how to handle the data for further processing.

- `sub-<name>`: The subject label which is an unique identifier for each subject. All data of this subject should be contained within this subjects folder.
- `ses-<index>`: The session label which can be repeated scans of the same protocol, for example for reproducibility studies
- `stk-<index>`: For imaging extremities it is not uncommon to acquire the data in multiple stacks that have to be merged. This label indicates the stack number.
- `rep-<index>`: For muscle studies sometimes dynamic experiments are performed, e.g. the same data type but in different conditions (for example ankle flexion) within the same session. This label indicates the repetition description.


## Suffixes: general

MRI data can be stored as magnitude, phase, real or imaginary. For each, a predefined suffix is given that can be used for any type of data.

- `_`: magnitude
- `_ph`: phase
- `_real`: real
- `_imag`: imaginary 


## Suffixes: data type

The current data-type suffixes are recognized and can be automatically be processed and have their own folders:

- `_megre`: Multi-echo gradient echo scans (minimal of 3 echos) that will be used to perform Dixon reconstruction.
- `_dwi`: Spin echo diffusion-weighted imaging, used for DTI and IVIM analysis. All diffusion weighted data has the same pre-processing. Based on the script configuration it can be used for: fasciculation detection, DTI analysis or IVIM analysis, or any combination of these.
- `_dwiste`: Stimulated echo diffusion-weighted imaging, used for RBMP analysis.
- `_mese`: Multi-echo spin-echo, used for T2 mapping. These are the scans that will be used for EPG-based T2 reconstruction.
- `_seg`: Muscle segmentations with labels.


## Suffixes: Folder specific

For each data folder, the data that can be stored there is defined by its suffix or combination of suffixes, e.g. `"_t1w_fs"`, `"_dwi_ivim_dti"`, or `"_mese_t2"`. Although any suffixes can be combined and used the following suffixes related to data acquisition and type currently have meaning within `QMRITools`.

- `anat`
	- `_t1w`: T1 weighted data.
	- `_t1w_fs`: T1 weighted data with fat suppression.
	- `_t2w`: T2 weighted data.
	- `_t2w_fs`: T2 weighted data with fat suppression.
- `dix`
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

When the raw input data is processed its outputs are stored in the derived data folder. Muscle-BIDS recommends storing this derived data folder within the `"sub-<label>\ses-<label>\derivatives"` directory. However, `QMRITools` also allows specifying any other location to store these derived files. In that case, within the derived data folder a new Muscle-BIDS structure is created identical to that of the source data. 

`QMRITools` uses suffixes to indicate what data is generated. The following suffixes are used 

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
- `_dwi`
	- `_mean`: The geometric mean of each b-value.
	- `_den`: The denoised dwi data.
	- `_reg`: The registered dwi data.
	- `_sig`: The noise sigma estimated using PCA denosing.
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
	- `_fr`: The perfusion fraction form piecewise IVIM fitting.
	- `_fri`: The perfusion fraction from IVIM fitting.
	- `_s0i`: The estimated b = 0 s/mm2 from IVIM fitting.
	- `_resi`: The root-mean-square residuals after IVIM estimation.
- `dwi_fasc`
	- `_fasc`: The identified fasciculation from MU-MRI analysis. 
	- `_norm`: Normalized data per volume used for fasciculation detection.
- `mese_t2`
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
	- `_auto`: Indicates the segmentations have been generated automatically.
	- `_megre`: Indicates the segmentation aligns with the megre data.
	- `_dwi`: Indicates the segmentation aligns with the dwi data.
	- `_t2`:  Indicates the segmentation aligns with the t2 data.
	- `_smooth`: Indicates the segmentations have been processed with a mask smoothing algorithm.
	- `_ero`: Indicates the segmentations have been eroded.
