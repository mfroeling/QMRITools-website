---

layout: page
title: GradientTools
permalink: /tool/gradienttools/

tags: tools
header: no

images:
  - image_name: 'diffusion gradient optimiazation.png'
    image_title: 'Diffusion gradient optimization using electrostatic repulsion.'
    image_alt: 'diffusion gradient optimiazation'  
  - image_name: 'gradient duty cycle optimization.png'
    image_title: 'Optimization of multi shell diffusion gradients accounting for duty cycle.'
    image_alt: 'gradient duty cycle optimization'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})

The main feature is an algorithm that uses static repulsion (Jones,
Horsfield, and Simmons 1999; Froeling et al. 2017) to generate
homogeneously distributed gradient directions for DWI experiments which
is also availible as a standalone tool which can be found [here](https://www.massive-data.org/#h.cytj3ar4i2v) or [here](https://github.com/mfroeling/QMRITools/tree/master/QMRITools/Resources).
It also provides functions to convert bval and bvec files to bmatrix and vice versa. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Froeling, Martijn, Chantal M. W. Tax, Sjoerd B. Vos, Peter R. Luijten,
and Alexander Leemans. 2017. “MASSIVE brain dataset: Multiple
acquisitions for standardization of structural imaging validation and
evaluation.” *Magnetic Resonance in Medicine* 77 (5). 
Milan: 1797–1809. [link››](https://doi.org/10.1002/mrm.26259).