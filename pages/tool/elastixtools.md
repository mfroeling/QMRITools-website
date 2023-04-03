---

layout: page
title: ElastixTools
permalink: /tool/elastixtools/

tags: tools
header: no

images:
  - image_name: 'affine registration of muscle dti data.gif'
    image_title: 'affine registration of muscle dti data after..'
    image_alt: 'affine registration of muscle dti data'
  - image_name: 'registration of longitudinal dixon data.png'
    image_title: 'Non rigid registration over time points using Dixon data for longitudinal analysis.'
    image_alt: 'non rigid registration over time points'  
  - image_name: 'non rigid registration of cardiac dti data.gif'
    image_title: 'non rigid registration of mulit slice 2D cardiac diffusion data.'
    image_alt: 'cardiac diffusion data registration'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})

A wrapper that calls the Elastix registration framework (Klein et al.
2010; Shamonin 2013). The toolbox determines what registration or
transformations need to be performed, exports the related data to a temp
folder and calls an automatically generated command line script that
performs the registration. After registration is completed the data is
again loaded into Mathematica. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Klein, Stefan, Marius Staring, Keelin Murphy, Max A. Viergever, and
Josien P. W. Pluim. 2010. “Elastix: A toolbox for intensity-based
medical image registration.” *IEEE Transactions on Medical Imaging* 29
(1): 196–205. [link››](https://doi.org/10.1109/TMI.2009.2035616).
> - Shamonin, Denis. 2013. “Fast parallel image registration on CPU and GPU
for diagnostic classification of Alzheimer’s disease.” *Frontiers in
Neuroinformatics* 7 (January): 50. [link››](https://doi.org/10.3389/fninf.2013.00050).
