---

layout: page
permalink: /doc/manuals/

title: "Manuals and scripts"
subheadline: "Everything you can download and run"
teaser: "Manuals, example configs, scripts and demo notebooks"

header: no

---

All files are in the [QMRITools GitHub repository](https://github.com/mfroeling/QMRITools){:target="_blank"}.

### Manuals

- **[Muscle-BIDS manual](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.md){:target="_blank"}**
  The full manual for the Muscle-BIDS pipeline, from DICOM conversion, via the config file, processing, segmentation and tractography to the per-muscle analysis. Also available as a [pdf](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS-config.pdf){:target="_blank"}. A short introduction is given [here](../../bids/).
- **[Processing flowchart](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS%20processing.jpg){:target="_blank"}**
  Overview of the Muscle-BIDS processing steps ([notebook](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/BIDS%20processing.nb){:target="_blank"}).
- **[All functions](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/All-Functions.pdf){:target="_blank"}**
  A list of all functions with their documentation, also as [notebook](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/All-Functions.nb){:target="_blank"}. The same documentation is available as [online guide pages](../../assets/htmldoc/html/guide/QMRITools.html){:target="_blank"}.

### Example Muscle-BIDS configurations

Example config files for different studies. Use them as a starting point for your own project.

- [config.json](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/config.json){:target="_blank"}: the default configuration
- [boch_config.json](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/boch_config.json){:target="_blank"}
- [motion_config.json](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/motion_config.json){:target="_blank"}
- [motor_config.json](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/motor_config.json){:target="_blank"}
- [twitch_config.json](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/BIDS%20Example/twitch_config.json){:target="_blank"}

### Scripts

The [scripts](https://github.com/mfroeling/QMRITools/tree/master/scripts){:target="_blank"} run from the command line with the free Wolfram Engine and do not need Mathematica. A step by step manual is given [here](../../seg/script).

- **[Install_QMRITools.wls](https://github.com/mfroeling/QMRITools/blob/master/scripts/Install_QMRITools.wls){:target="_blank"}**
  Installs QMRITools (latest or a specific release) for the Wolfram Engine.
- **[Segment_Nii.wls](https://github.com/mfroeling/QMRITools/blob/master/scripts/Segment_Nii.wls){:target="_blank"}**
  Segments a NIfTI file with the trained muscle segmentation networks. Example data is in the [test data](https://github.com/mfroeling/QMRITools/tree/master/scripts/test%20data){:target="_blank"} folder.
- **[segmentGUI.nb](https://github.com/mfroeling/QMRITools/blob/master/scripts/segmentGUI.nb){:target="_blank"}**
  A notebook with a graphical interface for segmentation within Mathematica.

### Demonstration notebooks and data

- **[Demonstrations.nb](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/Demonstrations.nb){:target="_blank"}** with demonstrations of most toolboxes, see [here](../demo). After installation open it with `OpenDemonstrationNotebook[]`.
- **[Demo_UNet.nb](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/Demo_UNet.nb){:target="_blank"}** shows how to build and train a segmentation network.
- **[DemoData](https://github.com/mfroeling/QMRITools/tree/master/QMRITools/Resources){:target="_blank"}**: the data sets used in the demonstrations (`DemoData.zip`).

### Gradient design

The interactive [diffusion gradient design tool](../../tool/gradienttools/) is also available as [notebook](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/GenerateGradientsGUI_v14.nb){:target="_blank"}.
