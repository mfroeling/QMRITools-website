---

layout: page
title: DixonTools
permalink: /tool/dixontools/

tags: tools
header: no

images:
  - image_name: 'Dixon iDeal reconstruction.jpg'
    image_title: 'iDeal based Dixon reconstruction with phase and T2 star corrections.'
    image_alt: 'Dixon reconstruction output'  
  - image_name: 'simulation of dixon data.png'
    image_title: 'iDeal based Dixon reconstruction: fitted fat fractions as a function of the imposed fat fraction, SNR and B0 field offset.'
    image_alt: 'dixon reconstruction simulation'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/DixonTools.wl)

An IDEAL based Dixon reconstruction algorithm (Reeder et al. 2005; Yu et
al. 2008). The method provides multi-peak fitting B0 field and T2-
correction. The toolbox also provides a function for unwrapping phase
data in 2D and 3D based on a best path method (Abdul-Rahman et al. 2007;
Herraez et al. 2002). It also contains a function that allows simulating
gradient echo Dixon data. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Reeder, Scott B., Angel R. Pineda, Zhifei Wen, Ann Shimakawa, Huanzhou
Yu, Jean H. Brittain, Garry E. Gold, Christopher H. Beaulieu, and
Norbert T. Pelc. 2005. “Iterative decomposition of water and fat with
echo asymmetry and least-squares estimation (IDEAL): Application with
fast spin-echo imaging.” *Magnetic Resonance in Medicine* 54 (3):
636–44. [link››](https://doi.org/10.1002/mrm.20624).
> - Yu, Huanzhou, Ann Shimakawa, Charles A. McKenzie, Ethan Brodsky, Jean H.
Brittain, and Scott B. Reeder. 2008. “Multiecho water-fat separation and
simultaneous R\*2 estimation with multifrequency fat spectrum modeling.”
*Magnetic Resonance in Medicine* 60 (5): 1122–34. [link››](https://doi.org/10.1002/mrm.21737).
> - Abdul-Rahman, Hussein S., Munther A. Gdeisat, David R. Burton, Michael
J. Lalor, Francis Lilley, and Christopher J. Moore. 2007. “Fast and
robust three-dimensional best path phase unwrapping algorithm.” *Applied
Optics* 46 (26): 6623. [link››](https://doi.org/10.1364/AO.46.006623).
> - Herraez, Miguel Arevallilo, David R. Burton, Michael J. Lalor, and
Munther A. Gdeisat. 2002. “Fast two-dimensional phase-unwrapping
algorithm based on sorting by reliability following a noncontinuous
path.” *Applied Optics* 41 (35): 7437. [link››](https://doi.org/10.1364/AO.41.007437).
