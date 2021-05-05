---
title: "QMRITools"
layout: splash
permalink: /

# feature_row:
#  - image_path: /assets/images/code.png
#    alt: "Software & Code"
#    title: "Software & Code"
#    excerpt: "The MRSHub code repository collects software packages and functions to process, manipulate, analyse, and display MRS data."
#    url: /software
#    btn_label: "To the MRSHub code listing"
#    btn_class: "btn--info btn--small"
#  - image_path: assets/images/forum.jpg
#    alt: "MRSHub Forum"
#    title: "Forum"
#    excerpt: "The MRSHub forum is a place for the MRS community to seek support, exchange ideas, ask questions, and collaborate."
#    url: https://forum.mrshub.org
#    btn_label: "To the MRSHub forum"
#    btn_class: "btn--info btn--small"
#  - image_path: /assets/images/data.jpg
#    alt: "Data"
#    title: "Data"
#    excerpt: "The MRSHub data repository collects MRS datasets for demonstration and testing of new methods."     
#    url: /datasets
#    btn_label: "To the MRSHub data listing"
#    btn_class: "btn--info btn--small"

---

{% capture notice-text %}
This website describes the functionality of QMRITools, a toolbox for analysis of quantitative magnetic resonance imaging data. The package contains processing tools related to quantitative MRI and spectroscopy of muscle, heart and nerves.

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3820494.svg)](https://doi.org/10.5281/zenodo.3820494){:target="_blank"}
[![DOI](https://joss.theoj.org/papers/10.21105/joss.01204/status.svg)](https://doi.org/10.21105/joss.01204){:target="_blank"}
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mfroeling/QMRITools){:target="_blank"}


[![MR-Hub](assets/images/MR-Hub.png)](https://ismrm.github.io/mrhub/)
[![MRSHub](assets/images/MRSHub.png)](https://mrshub.org/software_analysis/#QMRITools)
[![OpenSourceImaging](assets/images/open_source_images.png)](https://www.opensourceimaging.org/project/qmritools-mathematica-toolbox-for-quantitative-mri-data/)
{% endcapture %}

<div class="notice--info" align="center">
  <h1>Welcome to QMRITools!</h1>
  {{ notice-text | markdownify }}
</div>


## Introduction

`QMRITools` is a collection of tools and functions for processing
quantitative MRI data. The toolbox is developed for the [Wolfram
language](https://www.wolfram.com/language/) and maintained using
[Wolfram workbench](https://www.wolfram.com/workbench/) for
[eclipse](https://www.eclipse.org/) and runs in the latest version of
[Wolfram Mathematica](http://www.wolfram.com/mathematica/). The toolbox does not provide a GUI and its
primary goal is to allow for fast and batch data processing, and
facilitate development and prototyping of new functions. The core of the
toolbox contains various functions for data manipulation and
restructuring.

The toolbox was developed mostly in the context of quantitative muscle
([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}), nerve and cardiac magnetic resonance imaging. The library of functions grows along with the research it is
used for and started as a toolbox to analyze DWI data of muscle. Since
then it has grown to include many other features such as cardiac
analysis (tagging and T1 mapping), dixon reconstruction, EPG modeling
and fitting, j-coupling simulations and more. It currently contains over
350 custom functions (over 20.000 lines of code) complete with
documentation and demonstrations.

<p align="center">
<img src="\assets\images\processing.png" alt="Quantitative muscle MRI processing"  width="50%" />
</p>

## Referencing

When using the toolbox please cite one of the following references:

1.  Froeling M: *QMRTools: a Mathematica toolbox for quantitative MRI
    analysis*. J Open Source Softw 2019; 4:1204.
    [link](https://joss.theoj.org/papers/ef8bfb6c31499845d353b6a5af0d6300){:target="_blank"}
2.  Froeling M, et al.: *Reproducibility of diffusion tensor imaging in
    human forearm muscles at 3.0 T in a clinical setting*. Magn Reson Med
    2010; 64:1182-1190.
    [link](https://onlinelibrary.wiley.com/doi/full/10.1002/mrm.22477){:target="_blank"}
3.  Froeling M, et al.: *Diffusion-tensor MRI reveals the complex muscle
    architecture of the human forearm*. J Magn Reson Imaging 2012;
    36:237-248.
    [link](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}
4.  Schlaffke et al.: *Multi‐center evaluation of stability and reproducibility of 
	quantitative MRI measures in healthy calf muscles*. NMR Biomed. 2019;32:e4119
	[link](https://onlinelibrary.wiley.com/doi/full/10.1002/nbm.4119){:target="_blank"}

{% include feature_row %}
