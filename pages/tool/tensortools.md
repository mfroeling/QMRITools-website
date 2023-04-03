---

layout: page
title: TensorTools
permalink: /tool/tensortools/

tags: tools
header: no

images:
  - image_name: 'fitted diffusion tensor.png'
    image_title: 'Fitted tensor from DTI data of calf muscle.'
    image_alt: 'fitted diffusion tensor'  
  - image_name: 'simulation of muscle dti data.png'
    image_title: 'MD and FA as a function of SNR and fat fraction. Results are from simulated data using an iWLLS algorithm with outlier rejection.'
    image_alt: 'dti reconstruction simulation'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})

The original toolbox where the project started. The main functions in
this toolbox are to fit and evaluate the diffusion tensor model. Various
fitting methods are implemented (e.g. LLS, NLS, WLLS, and iWLLS). The
default method is an iterative weighted linear least squares approach
(Veraart et al. 2013). The tensor fitting also includes outlier
detections using REKINDLE (Tax et al. 2015) and data preparation
includes drift correction (Vos et al. 2017). [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Veraart, Jelle, Jan Sijbers, Stefan Sunaert, Alexander Leemans, and Ben
Jeurissen. 2013. “Weighted linear least squares estimation of diffusion
MRI parameters: Strengths, limitations, and pitfalls.” *NeuroImage* 81
(November). Elsevier Inc.: 335–46. [link››](https://doi.org/10.1016/j.neuroimage.2013.05.028).
> - Tax, Chantal M.W., Willem M. Otte, Max A. Viergever, Rick M. Dijkhuizen,
and Alexander Leemans. 2015. “REKINDLE: Robust Extraction of Kurtosis
INDices with Linear Estimation.” *Magnetic Resonance in Medicine* 73
(2): 794–808. [link››](https://doi.org/10.1002/mrm.25165).
> - Vos, Sjoerd B., Chantal M. W. Tax, Peter R. Luijten, Sebastien Ourselin,
Alexander Leemans, and Martijn Froeling. 2017. “The importance of
correcting for signal drift in diffusion MRI.” *Magnetic Resonance in
Medicine* 77 (1): 285–99. [link››](https://doi.org/10.1002/mrm.26124).
