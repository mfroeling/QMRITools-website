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


[![MR-Hub](assets/images/MR-Hub.png)](https://ismrm.github.io/mrhub/){:target="_blank"}
[![MRSHub](assets/images/MRSHub.png)](https://mrshub.org/software_analysis/#QMRITools){:target="_blank"}
[![OpenSourceImaging](assets/images/open_source_images.png)](https://www.opensourceimaging.org/project/qmritools-mathematica-toolbox-for-quantitative-mri-data/){:target="_blank"}

{% endcapture %}

<div class="notice--info" align="center">
  <h1>Welcome to QMRITools!</h1>
  {{ notice-text | markdownify }}
</div>

QMRITools is developed and maintained by [Martijn Froeling](https://www.researchgate.net/profile/Martijn-Froeling){:target="_blank"}
`QMRITools` is a collection of tools and functions for processing quantitative MRI data and runs in the latest version of
[Wolfram Mathematica](http://www.wolfram.com/mathematica/). The toolbox was developed mostly in the 
context of quantitative muscle ([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}), 
nerve and cardiac magnetic resonance imaging. The library of functions grows along with the research it is
used for.

{% include feature_row %}
