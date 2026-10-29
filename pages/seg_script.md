---

layout: page
permalink: /seg/script

title: "Script based segmentation without mathematica"
subheadline: "Using the wolfram engine"
teaser: "simple, fast and reliable"

header: no

images:
  - image_id: 'script'
    image_name: 'segIms\script.png'
    image_title: 'Use of wolfram script to segment muscle data.'
    image_alt: 'Use of wolfram script to segment muscle data.'  

tags: 
  - segment

---

Everything in QMRITools can also run from the command line using the Wolfram engine.
For segmentation there are dedicated scripts that install and run the segmentation software.
Below is a short manual on how to use these tools. The scripts and so example data can be found on [the github page](https://github.com/mfroeling/QMRITools/tree/master/scripts).

## Wolfram engine and script

- Install the free Wolfram Engine as described here:
<https://www.wolfram.com/engine/>
<https://support.wolfram.com/45743>
- Install WolframScript as described here
<https://reference.wolfram.com/language/workflow/InstallWolframScript.html>

## QMRITools

Install the latest version of QMRITools for the Wolfram engine using the `Install_QMRITools.wls` WolframScript.

``` bash
wolframscript -f "path to file\Install_QMRITools.wls"
```

To install an other version of the QMRITools from the GitHub release [pages](https://github.com/mfroeling/QMRITools/releases) use

``` bash
wolframscript -f "path to file\Install_QMRITools.wls" https://github.com/mfroeling/QMRITools/releases/download/<version>/QMRITools-<version>.paclet
```

For the situation where you run the scrip from its own folder with the test folder also there this will be script

``` bash
wolframscript -f "Install_QMRITools.wls" https://github.com/mfroeling/QMRITools/releases/download/<version>/QMRITools-<version>.paclet
```

## Segmentation script

To see how to use the script run:

``` bash
wolframscript -script "path to file\Segment_Nii.wls" --h
```

Use `-script` and not `-f`, `wolframscript -f` does not pass arguments starting with `-` to the script. This will give the up to data help that might change over time, currently it is:

``` bash
Usage:
  script.wls --i <input> [--o <output>] [--g Y|N] [--l <region>]
Flags:
  --i    Input NIfTI file (required)
  --o    Output NIfTI file (default: <input>_seg.nii(.gz))
  --g    Use GPU? (Y/N, default: N)
  --l    Region to segment (default: Body), one of:
         <list of all regions, keys of $SegmentationLabels>
  --h, --help  Show this help message
```

The default region `Body` segments the full body with the full body muscle labels. The regions `Legs`, `LegsHip`, `UpperLegs`, `LowerLegs`, `Hip`, `Shoulder` and `Arm` give the older labels files, the other regions give the full body labels. The labels file is written next to the output file.

Run the segmentation script (works on in or out phase data, raw echo data, water or fat reconstruction):

``` bash
wolframscript -script "path to file\Segment_Nii.wls" --i "file to be segmented.nii.gz" --o "output file.nii"
```

It does not matter which body region is in the data (the region is detected automatically) and if one or two legs are in the field of view. To segment a specific region add for example `--l UpperLegsBody`.
For the situation where you run the scrip from its own folder with the test folder also there this will be script.

``` bash
wolframscript -script "Segment_Nii.wls" --i "test data\test_up.nii.gz" --o "test data\out_up.nii"
```

``` bash
wolframscript -script "Segment_Nii.wls" --i "test data\test_low.nii.gz" --o "test data\out_low.nii"
```

By default the CPU is used, to use the GPU add `--g Y`.

{% include page-image im_id="script" %}

{% include list-pages tag="segment" %}

We gratefully acknowledge the support of NVIDIA with the donation of the GPU used for this work.
