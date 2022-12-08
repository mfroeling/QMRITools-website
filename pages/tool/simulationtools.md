---

layout: page
title: SimulationTools
permalink: /tool/simulationtools/

tags: tools
header: no

images:
  - image_name: 'simulation of muscle dti data.png'
    image_title: 'iWLLS reconstruction: fitted MD and FA as a function of SNR and fat fraction.'
    image_alt: 'dti reconstruction simulation'
  - image_name: 'simulation of dixon data.png'
    image_title: 'iDeal based Dixon reconstruction: fitted fat fractions as a function of the imposed fat fraction, SNR and B0 field offset.'
    image_alt: 'dixon reconstruction simulation'
  - image_name: 'simulation of T2 EPG data.png'
    image_title: 'EPG base T2 fitting: fitted T2 value as a function of B1, SNR and fat fraction.'
    image_alt: 'T2 EPG reconstruction simulation'

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}}) 

The main purpose of this toolbox is to simulate DTI based DWI data and
contains some functions to easily perform analysis of the fit results of
the simulated signals (Froeling et al. 2013). [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Froeling, Martijn, Aart J. Nederveen, Klaas Nicolay, and Gustav J.
Strijkers. 2013. “DTI of human skeletal muscle: The effects of diffusion
encoding parameters, signal-to-noise ratio and T2 on tensor indices and
fiber tracts.” *NMR in Biomedicine* 26 (11): 1339–52. 
[link››](https://doi.org/10.1002/nbm.2959).