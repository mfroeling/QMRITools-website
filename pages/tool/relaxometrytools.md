---

layout: page
title: RelaxometryTools
permalink: /tool/relaxometrytools/

tags: tools
header: no

images:
  - image_name: 'epg simulation with slice profile.jpg'
    image_title: 'Simulated EPG signal over the slice profile for combined water and fat signals.'
    image_alt: 'EPG simulation with slice profile'  
  - image_name: 'simulation of T2 EPG data.png'
    image_title: 'Demonstration of EPG based T2 fitting: the fitted water T2 relaxation as a function of B1, SNR and fat fraction.'
    image_alt: 'T2 EPG reconstruction simulation'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})

A collection of tools to fit T2, T2\*, T1rho and T1 relaxometry data.
The main function of this toolbox is an extended phase graph (EPG)
(Weigel 2015) method for multi-compartment T2 fitting of multi-echo spin
echo data (Marty et al. 2016). Therefore it provides functions to
simulate and evaluate EPG (Keene et al. 2020). [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Weigel, Matthias. 2015. “Extended phase graphs: Dephasing, RF pulses,
and echoes - pure and simple.” *Journal of Magnetic Resonance Imaging*
41 (2). Wiley-Blackwell: 266–95. [link››](https://doi.org/10.1002/jmri.24619).
> - Marty, Benjamin, Pierre Yves Baudin, Harmen Reyngoudt, Noura Azzabou,
Ericky C. A. Araujo, Pierre G. Carlier, and Paulo L. de Sousa. 2016.
“Simultaneous muscle water T2and fat fraction mapping using transverse
relaxometry with stimulated echo compensation.” *NMR in Biomedicine* 29
(4): 431–43. [link››](https://doi.org/10.1002/nbm.3459).
> - Keene, K. R., Beenakker, J. W. M., Hooijmans, M. T., Naarding, K. J., Niks, E. H.,
Otto, L. A. M., van der Pol, W. L., Tannemaat, M. R., Kan, H. E., and Froeling, M. "T2 relaxation-time
mapping in healthy and diseased skeletal muscle using extended phase graph
algorithms." *Magnetic Resonance in Medicine*, 84(5), 2656–2670. [link››](https://doi.org/10.1002/mrm.28290)
