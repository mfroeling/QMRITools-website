---

layout: page
title: ProcessingTools
permalink: /tool/processingtools/

header: no

images:
  - image_name: 'joining multiple data stacks.png'
    image_title: 'Joining data acquired in multiple stacks with crossfading of the ovelapping region.'
    image_alt: 'Joining data acquired in multiple stacks'  
  - image_name: 'spliting data in left and right.jpg'
    image_title: 'Automatically find the plan where to split data into left and right leg.'
    image_alt: 'Split data in left and right'

tags: 
  - packages

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/ProcessingTools.wl)

The toolbox comprises a variety of functions that allow data
manipulation and analysis. The main functions allow joining multiple
data sets with overlapping slices into one continuous data set (Froeling et al. 2015)
and to automatically split data of two legs into two separate data-sets.
Furthermore, it contains a collection of functions for data evaluation and analysis. [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Froeling, Martijn, Jos Oudeman, G. J. Gustav J. Strijkers, Mario Maas,
M. R. Maarten R. Drost, Klaas Nicolay, and Aart J. A. J. Nederveen. 2015.
“Muscle Changes Detected with Diffusion-Tensor Imaging after
Long-Distance Running.” *Radiology* 274 (2): 548–62.
[link››](https://doi.org/10.1148/radiol.14140702).
