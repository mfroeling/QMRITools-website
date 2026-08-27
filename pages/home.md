---

layout: frontpage
permalink: /

title: "Quantitative analysis of muscle, nerve and cardiac MRI data"

homepage: true

widget1:
  title: "Analysis & Processing"
  url: /about/
  image: front-process.png
  text: 'QMRITools contains various toolboxes for the quantitative analysis muscle, nerve and cardiac MRI data.'

widget2:
  title: "Simulation & Validation"
  url: /tool/
  image: front-simulation.png
  text: 'QMRITools contains functions for the simulation of diffusion, dixon, EPG T2 mapping and spectroscopy data.'
  
widget3:
  title: "Demo & Documentation"
  url: /doc/
  image: front-demo.png
  text: 'For all functions extended documentation and demonstrations are available. It also includes various example data sets.'

---

<div align="center" ><h1>Welcome to QMRITools!</h1></div>

This website describes the functionality of `QMRITools`, a toolbox for analysis of quantitative magnetic resonance imaging data. `QMRITools` is a collection of tools and functions for processing quantitative MRI data, runs in the latest version of [Wolfram Mathematica](http://www.wolfram.com/mathematica/) and is developed and maintained by [Martijn Froeling](https://www.researchgate.net/profile/Martijn-Froeling){:target="_blank"}. The toolbox was initially developed for the analysis of diffusion imaging data of skeletal muscle ([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}). Over the years it has grown in its functionality and is currently used for the analysis, processing and simulations of quantitative muscle, nerve and cardiac magnetic resonance imaging and spectroscopy data. The library of functions grows along with the research it is used for.

<div align="center" style="background-color: #D3D3D3; border-radius: 10px; padding: 20px;" markdown="1">
  
**Release 4.10 is live!**<br>
New networks for [muscle segmentation](https://www.qmritools.com/seg/segmentation){:target="_blank"} now support derivatives (source, water, fat, in-phase and out-phase) from [GE and TSE Dixon scans](https://www.muscle-atlas.org/projects/progress){:target="_blank"} on both 2D and 3D data. <br>
QMRITools can also now call [MuscleMap](https://musclemap.github.io/MuscleMap/){:target="_blank"} for segmentation. All muscle labels are [standardized](https://www.qmritools.com/seg/naming/){:target="_blank"} and grouped by anatomical function.

[![Automated muscle segmentation](/assets/images/Muscle_segmentation.png)](https://www.qmritools.com/seg/networks){:target="_blank"}

<!-- Community Links Grid -->
<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; margin: 15px 0;">
  <a href="https://github.com/mfroeling/QMRITools" target="_blank"><img src="/assets/images/github.png" alt="GitHub" style="height: 32px;"></a>
  <a href="https://ismrm.github.io/mrhub/" target="_blank"><img src="/assets/images/MR-Hub.png" alt="MR-Hub" style="height: 32px;"></a>
  <a href="https://www.opensourceimaging.org/project/qmritools-mathematica-toolbox-for-quantitative-mri-data/" target="_blank"><img src="/assets/images/open_source_images.png" alt="OpenSourceImaging" style="height: 32px;"></a>
  <a href="https://mrshub.org/software_analysis/#QMRITools" target="_blank"><img src="/assets/images/MRSHub.png" alt="MRS-Hub" style="height: 32px;"></a>
  <a href="https://ormircommunity.github.io/packages.html#other-packages" target="_blank"><img src="/assets/images/ORMIR.png" alt="ORMIR" style="height: 32px;"></a>
  <a href="https://musclemap.github.io/MuscleMap/" target="_blank"><img src="/assets/images/MuscleMap.png" alt="MuscleMap" style="height: 32px;"></a>
</div>
<!-- Badges Row -->
<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px;">
  <a href="https://doi.org/10.5281/zenodo.595302" target="_blank"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.595302.svg" alt="DOI"></a>
  <a href="https://joss.theoj.org/papers/10.21105/joss.01204" target="_blank"><img src="https://joss.theoj.org/papers/10.21105/joss.01204/status.svg" alt="DOI Joss"></a>
  <a href="https://github.com/mfroeling/QMRITools" target="_blank"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="Contributions Welcome"></a>
</div>

</div>
