---

layout: page
title: DenoiseTools
permalink: /tool/denoisetools/

tags: tools
header: no

images:
  - image_name: 'muscle dti denoising.jpg'
    image_title: 'Comparision of raw and denoised muscle dti data using principal component analysis.'
    image_alt: 'dti data denoising using MP-PCA'  
  - image_name: 'comparison of denoising methods.gif'
    image_title: 'comparison of MP-PCA, anisotropic filtering, LMMSE and patch2self.'
    image_alt: 'comparison of denoising methods'  

---

[`Demonstrations.nb` ››](/doc/demo/) <br>
[Guide page ››](/assets/htmldoc/html/guide/{{page.title}})
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/DenoiseTools.wl)

The toobox provides two algorithms that allow denoising of DWI data. The
first is based on and LMMSE framework (Aja-Fernandez et al. 2008) and
the second is based on a random matrix theory and Principal component
analysis framework (Veraart et al. 2016). Furthermore, it provides an anisotropic filters for denoising the
estimated diffusion tensor which provides more reliable fiber
orientation analysis and fiber tractography (Lee et al. 2006; Damon et al. 2021). [Back››](/tool/)

{% include page-images %}

--------------------------------------------------------------------------

### References

> - Veraart, Jelle, Dmitry S. Novikov, Daan Christiaens, Benjamin Ades-aron,
Jan Sijbers, and Els Fieremans. 2016. “Denoising of diffusion MRI using
random matrix theory.” *NeuroImage* 142 (November). Elsevier Inc.:
394–406. [link››](https://doi.org/10.1016/j.neuroimage.2016.08.016).
> - Aja-Fernandez, Santiago, Marc Niethammer, Marek Kubicki, Martha E.
Shenton, and Carl Fredrik Westin. 2008. “Restoration of DWI data using a
rician LMMSE estimator.” *IEEE Transactions on Medical Imaging* 27 (10):
1389–1403. [link››](https://doi.org/10.1109/TMI.2008.920609).
> - Lee, Jee Eun, M. K. Chung, and A. L. Alexander. 2006. “Evaluation of
Anisotropic Filters for Diffusion Tensor Imaging.” In *IEEE International
Symposium on Biomedical Imaging*, 77–80. IEEE. [link››](https://doi.org/10.1109/ISBI.2006.1624856).
> - Damon, B. M., Ding, Z., Hooijmans, M. T., Anderson, A. W., Zhou, X.,
Coolbaugh, C. L., George, M. K., & Landman, B. A. (2021). "A MATLAB toolbox for muscle
diffusion-tensor MRI tractography." *Journal of Biomechanics*, 124, 110540. [link››](https://doi.org/10.1016/j.jbiomech.2021.110540)
