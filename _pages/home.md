---
title: "QMRITools"
layout: splash
permalink: /

feature_row:
- image_path: /assets/images/front-process.jpg
  alt: "Analysis & Processing"
  title: "Analysis & Processing"
  excerpt: "QMRITools contains various toolboxes for the quantitative analysis muscle, nerve and cardiac data."
  url: /tool/
  btn_label: "To the toolboxes"
  btn_class: "btn--info btn--small"

- image_path: assets/images/front-simulation.jpg
  alt: "Simulation & Validation"
  title: "Simulation & Validation"
  excerpt: "QMRITools conatains functions for the simulation of diffusion, dixon, EPG T2 mapping and spectroscopy data."
  url: /tool/description/#dixontools-
  btn_label: "To the descriptions"
  btn_class: "btn--info btn--small"

- image_path: /assets/images/front-demo.jpg
  alt: "Demo & Documentation"
  title: "Demo & Documentation"
  excerpt: "For all functions extended documentation and demonstrations are available. It also includes various example data sets."     
  url: /doc/demo/
  btn_label: "To the Demonstrations"
  btn_class: "btn--info btn--small"

---

{% capture notice-text %}

`QMRITools` is a collection of tools and functions for processing quantitative MRI data and runs in the latest version of [Wolfram Mathematica](http://www.wolfram.com/mathematica/) and is developed and maintained by [Martijn Froeling](https://www.researchgate.net/profile/Martijn-Froeling){:target="_blank"}. The toolbox was developed mostly in the context of quantitative muscle ([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}), nerve and cardiac magnetic resonance imaging. The library of functions grows along with the research it is used for.

[![DOI zenodo](https://zenodo.org/badge/DOI/10.5281/zenodo.3820494.svg)](https://doi.org/10.5281/zenodo.3820494){:target="_blank"}
[![DOI Joss](https://joss.theoj.org/papers/10.21105/joss.01204/status.svg)](https://doi.org/10.21105/joss.01204){:target="_blank"}
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mfroeling/QMRITools){:target="_blank"}

[![Github](assets/images/github.png)](https://https://github.com/mfroeling/QMRITools){:target="_blank"}
[![MR-Hub](assets/images/MR-Hub.png)](https://ismrm.github.io/mrhub/){:target="_blank"}
[![MRSHub](assets/images/MRSHub.png)](https://mrshub.org/software_analysis/#QMRITools){:target="_blank"}
[![OpenSourceImaging](assets/images/open_source_images.png)](https://www.opensourceimaging.org/project/qmritools-mathematica-toolbox-for-quantitative-mri-data/){:target="_blank"}

{% endcapture %}


<div class="notice--info" align="center"><h1>Welcome to QMRITools!</h1>{{ notice-text | markdownify }}</div>


This website describes the functionality of `QMRITools`, a toolbox for analysis of quantitative magnetic resonance imaging data. The package contains processing tools related to quantitative MRI and spectroscopy of muscle, heart and nerves.


{% include feature_row %}


