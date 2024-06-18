---

layout: page
permalink: /tool/gradient

title: "Multi shell gradient optimization"
subheadline: "Runs in Mathematica or CDF player"
teaser: "Q-shell sampling"

header: no

images:
  - image_id: 'grad'
    image_name: 'diffusion gradient optimization.png'
    image_title: 'Diffusion gradient optimization using electrostatic repulsion'
    image_alt: 'diffusion gradient optimization'  
  - image_id: 'duty'
    image_name: 'gradient duty cycle optimization.png'
    image_title: 'Optimization of multi shell diffusion gradients accounting for duty cycle'
    image_alt: 'gradient duty cycle optimization'
  - image_id: 'vis'
    image_name: 'diffusion gradient visualization.png'
    image_title: 'visualization of multi shell diffusion gradients'
    image_alt: 'visualization of the gradient optimization result'

tags: 
  - tools

---

Within QMRITools there is a function called `GenerateGradientsGUI`, this function allows to generate gradients tables compatible with the philips MRI scanner. Since the list contains gradient directions and b-values in 4 separate columns it can easily be converted to other platforms such as Bruker, Siemens, Cannon or GE.

{% include page-image im_id="grad" %}

For those who do not have a Mathematica license and therefore cannot run the QMRITools paclet there is also a standalone version of the gradient optimizer that will run in [Mathematica Player](https://www.wolfram.com/player/) that is free for everyone. The standalone notebook can be downloaded [here](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Resources) where you should download `GenerateGradientsGUI_v14.nb`.

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
