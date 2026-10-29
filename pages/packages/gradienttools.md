---

layout: page
title: GradientTools
permalink: /tool/gradienttools/

header: no

images:
  - image_id: 'grad'
    image_name: 'diffusion gradient optimization.png'
    image_title: 'Diffusion gradient optimization using electrostatic repulsion.'
    image_alt: 'diffusion gradient optimization'  
  - image_id: 'duty'
    image_name: 'gradient duty cycle optimization.png'
    image_title: 'Optimization of multi shell diffusion gradients accounting for duty cycle.'
    image_alt: 'gradient duty cycle optimization'
  - image_id: 'vis'
    image_name: 'diffusion gradient visualization.png'
    image_title: 'Visualization of multi shell diffusion gradients.'
    image_alt: 'visualization of the gradient optimization result'

tags: 
  - packages

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}}.html){:target="_blank"}
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/GradientTools.wl)

The main feature is an algorithm that uses static repulsion (Jones,
Horsfield, and Simmons 1999; Froeling et al. 2017) to generate
homogeneously distributed gradient directions for DWI experiments. It also provides functions to convert bval and bvec files to bmatrix and vice versa. [Back››](/tool/)

## Gradient design tool

Within QMRITools there is a function called `GenerateGradientsGUI`, this function allows to generate gradients tables compatible with the Philips MRI scanner. Since the list contains gradient directions and b-values in 4 separate columns it can easily be converted to other platforms such as Bruker, Siemens, Canon or GE.

{% include page-image im_id="grad" %}

For those who do not have a Mathematica license and therefore cannot run the QMRITools paclet there is also a standalone version of the gradient optimizer that will run in [Mathematica Player](https://www.wolfram.com/player/), which is free for everyone. The standalone notebook can be downloaded [here](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources/GenerateGradientsGUI_v14.nb){:target="_blank"} (`GenerateGradientsGUI_v14.nb`), or from [massive-data.org](https://www.massive-data.org/#h.cytj3ar4i2v){:target="_blank"}.

{% include page-image im_id="vis" %}

### Features include

- single shell
- multi shell (variable shell weighting)
- cartesian grids
- ivim with orthogonal sampling
- gradient duty cycle optimization / randomization
- half and full shell optimization
- gradient visualization
- text file export
- interleaving of low or zero b-values
- polar plot of gradient direction
- gradient load visualization
- gradient "overplus" generation

{% include page-image im_id="duty" %}

--------------------------------------------------------------------------

### References

> - Froeling, Martijn, Chantal M. W. Tax, Sjoerd B. Vos, Peter R. Luijten,
and Alexander Leemans. 2017. “MASSIVE brain dataset: Multiple
acquisitions for standardization of structural imaging validation and
evaluation.” *Magnetic Resonance in Medicine* 77 (5).
Milan: 1797–1809. [link››](https://doi.org/10.1002/mrm.26259).
