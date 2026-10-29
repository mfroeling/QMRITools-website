---

layout: page
permalink: /bids/files_folders/

title: "Files and folders"
subheadline: "Naming conventions of files and folders"
teaser: "Muscle-BIDS file structure explained."

header: no

tags: 
  - bids

---


Within the bids standard filenames contain information label such as subject name, data type and sessions followed by a suffix containing extra information. Each label if followed by a value `\<label\>-\<value\>` connected by a `"-"`. Each label is concatenated by a `"\_"`, for example `sub-PAT001_ses-001`. After the last "_" any number of suffixes can follow. The data type is the first suffix, for example `sub-PAT001_ses-001_dwi.nii.gz`.

## File Names

Next to the folder structure, the file names of a Muscle-BIDS dataset will tell a lot about what kind of file it is and what it contains. A Muscle-BIDS name contains a list of entities followed by a list of suffixes and is ended with an extension. In Muscle-BIDS filenames `"-"` and `"_"` have special meanings and can never be used outside their intended use.

- An entity starts with a known key followed by its value (label or index) separated by an `"-”` and multiple entities are separated by a `"_"`
**Example:** `<key1>-<label>_<key2>-<index>`
- A suffix or list of suffixes comes after the entities and each suffix is separated by a `"_"`
  - The first suffix describes the data type and must be maintained
  - The rest of the suffixes can be ones chosen from the defined suffixes per data type or a custom one
**Example:** `<key1>-<label>_<key2>-<index>_<suf1>_<suf2>`
- The extension finalizes the file name
**Example:** `<key1>-<label>_<key2>-<index>_<suf1>_<suf2>.<ext>`

Based on the Muscle-BIDS filename and its location it should be clear what data is contained within the file. Some examples are:

> - "sub-test01_ses-001_megre_b0.nii"
> - "sub-test01_ses-001_rep-flexion_dwi_dti_md.nii"
> - "sub-anonab_ses-002_stk-upper_wt2_t2.nii.gz"
> - "sub-anonab_ses-002_stk-upper_wt2_t2.json"

## Study folder

A Muscle-BIDS study is one study folder (`dir`) that holds the file `config.json` and the following folders (the default names, which can be changed in the `folders` section of the config). `QMRITools` creates the ones it needs.

| Folder | Contents |
| --- | --- |
| `01_sourcedata` | The DICOM files from the scanner, one folder per subject and session (`subject` or `subject_session`) |
| `02_rawdata` | Converted NIfTI files with BIDS names, sorted by subject and session |
| `03_derivatives` | Processed maps (for example fat fraction and diffusion maps), in the native space of the scan |
| `04_merged` | Joined and registered data, segmentations and tractography results |
| `05_analysis` | Excel sheets with the results per subject and one combined file for all subjects |

After a run the study folder looks like this (for one subject `001_1` with Dixon data):

```text
<study>/
  config.json
  01_sourcedata/001_1/
  02_rawdata/sub-001/ses-1/
    raw/                    dcm2niix output
    dix/                    sub-001_ses-1_stk-DIXON1_megre_dix_*.nii and .json
  03_derivatives/sub-001/ses-1/dix/    fitted maps and *_check.json files
  04_merged/sub-001/ses-1/
    dix/                    merged maps: sub-001_ses-1_megre_dix_wat.nii
    seg/                    sub-001_ses-1_seg_auto_megre_dix_outph.nii
  05_analysis/
    sub-001/ses-1/          sub-001_ses-1.xlsx
    All_<date>.xlsx         all subjects in one table
```

More details and a complete step by step example are given in the [Muscle-BIDS manual](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.md#folder-layout-after-a-run){:target="_blank"}.

## Folders

To prevent ambiguity most MRI acquisitions are stored in predefined folders. Muscle-BIDS-compliant software will look in these folders for their needed raw source data. The following folders have been defined in Muscle-BIDS. QMRITools uses the following subfolders to store data in the Muscle-BIDS dataset.

- `anat`: Structural imaging for anatomical or diagnostic reference (e.g T1 or T2).
- `dwi`: Diffusion-weighted data (e.g. DTI or IVIM).
- `dix`: Dixon data.
- `quant`: Relaxometry data (e.g. T1 or T2 mapping).
- `seg`: Segmentation labels (e.g. manual segmentations).
- `raw`: Unspecified non-BIDS files (the dcm2niix output before sorting).

An example of a folder structure is shown below:

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

└─example/<br>
&nbsp;&nbsp;├─sub-cont001/<br>
&nbsp;&nbsp;│&nbsp;├─ses-visit1a/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dix/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─quant/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;│&nbsp;├─ses-visit1b/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dix/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─quant/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;│&nbsp;└─ses-visit2/<br>
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─raw/<br>
&nbsp;&nbsp;├─sub-pat0054/<br>
&nbsp;&nbsp;│&nbsp;├─ses-visit1/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;├─quant/<br>
&nbsp;&nbsp;│&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;│&nbsp;└─ses-visit2/<br>
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─dix/<br>
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├─dwi/<br>
&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└─raw/<br>
&nbsp;&nbsp;└─sub-test002/<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ses-visit1/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;├─quant/<br>
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;└─raw/<br>
&nbsp;&nbsp;&nbsp;&nbsp;└─ses-visit2/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─dwi/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─quant/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─raw/

</div>


{% include list-pages tag="bids" %}