---

permalink: /about/
title: "About QMRITools"

sidebar:
  nav: "about"
toc: true

---

## Introduction

`QMRITools` is written in Mathematica using Wolfram Workbench and
Eclipse and contains a collection of tools and functions for processing
quantitative MRI data. The toolbox does not provide a GUI and its
primary goal is to allow for fast and batch data processing, and
facilitate development and prototyping of new functions. The core of the
toolbox contains various functions for data manipulation and
restructuring.

The toolbox was developed mostly in the context of quantitative muscle
([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}), nerve and cardiac magnetic resonance
imaging. The library of functions grows along with the research it is
used for and started as a toolbox to analyze DWI data of muscle. Since
then it has grown to include many other features such as cardiac
analysis (tagging and T1 mapping), dixon reconstruction, EPG modeling
and fitting, j-coupling simulations and more. It currently contains over
350 custom functions (over 20.000 lines of code) complete with
documentation and demonstrations.

<p align="center">
<img src="\assets\images\processing.png" alt="Quantitative muscle MRI processing"  width="70%" />
</p>

The toolbox is developed for the [Wolfram
language](https://www.wolfram.com/language/) and maintained using
[Wolfram workbench](https://www.wolfram.com/workbench/) for
[eclipse](https://www.eclipse.org/) and runs in the latest version of
[Wolfram Mathematica](http://www.wolfram.com/mathematica/).

When using the toolbox please cite one of the following references:

1.  Froeling M: QMRTools: a Mathematica toolbox for quantitative MRI
    analysis. J Open Source Softw 2019; 4:1204.
    [link](https://joss.theoj.org/papers/ef8bfb6c31499845d353b6a5af0d6300)
2.  Froeling M, et al.: Reproducibility of diffusion tensor imaging in
    human forearm muscles at 3.0 T in a clinical setting. Magn Reson Med
    2010; 64:1182-1190.
    [link](https://onlinelibrary.wiley.com/doi/full/10.1002/mrm.22477)
3.  Froeling M, et al.: Diffusion-tensor MRI reveals the complex muscle
    architecture of the human forearm. J Magn Reson Imaging 2012;
    36:237-248.
    [link](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608)
4.  Schlaffke et al.: Multi‐center evaluation of stability and reproducibility of 
	quantitative MRI measures in healthy calf muscles; NMR Biomed. 2019;32:e4119
	[link](https://onlinelibrary.wiley.com/doi/full/10.1002/nbm.4119) 