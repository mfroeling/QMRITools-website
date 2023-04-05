---

layout: page
permalink: /about/

title: "About QMRITools"
subheadline: "a little bit of history"
teaser: "If you used it, please cite us"

header: no

images:
  - image_id: 'proc'
    image_name: 'processing.png'
    image_title: 'Quantitative muscle MRI processing'
    image_alt: 'Quantitative muscle MRI processing' 
  - image_id: 'app'
    image_name: 'applications of QMRITools.png'
    image_title: 'Applications of QMRITools'
    image_alt: 'Applications of QMRITools' 

---

<p align="center">
<a href="https://www.wolfram.com/language/" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="wolfram language" title="wolfram language" src="../assets/images/wolfram_language.png"></a>
<a href="https://www.wolfram.com/workbench/" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="wolfram workbench" title="wolfram workbench" src="../assets/images/wolfram_workbench.png"></a>
<a href="https://marketplace.visualstudio.com/items?itemName=WolframResearch.wolfram" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="visual studio code" title="visual studio code" src="../assets/images/visual-studio-code.png"></a>
<a href="https://www.eclipse.org/" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="eclipse" title="eclipse" src="../assets/images/eclipse.png"></a>
<a href="http://www.wolfram.com/mathematica/" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="Wolfram Mathematica" title="Wolfram Mathematica" src="../assets/images/wolfram_mathematica.png"></a>
<a href="https://community.wolfram.com/groups/-/m/t/1661539" target="_blank" style="text-decoration: none; border-bottom: none;">
<img alt="Wolfram Community" title="Wolfram Community" src="../assets/images/community.png"></a>
</p>

`QMRITools` is a collection of tools and functions for processing
quantitative MRI data. The toolbox is developed for the [Wolfram
language](https://www.wolfram.com/language/) and maintained using
[Wolfram workbench](https://www.wolfram.com/workbench/) for
[eclipse](https://www.eclipse.org/) and runs in the latest version of
[Wolfram Mathematica](http://www.wolfram.com/mathematica/). The toolbox does not provide a GUI and its
primary goal is to allow for fast batch data processing, and
facilitate development and prototyping of new functions. The core of the
toolbox contains various functions for data manipulation and restructuring.

The toolbox was developed mostly in the context of quantitative muscle
([Froeling et al. 2012](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}), nerve and cardiac magnetic resonance imaging. The library of functions grows along with the research it is
used for and started as a toolbox to analyze DWI data of muscle. Since
then it has grown to include many other features such as cardiac
analysis (tagging and T1 mapping), dixon reconstruction, EPG modeling
and fitting, j-coupling simulations and more. It currently contains over
450 custom functions (over 30.000 lines of code) complete with more than 750
documentation pages and demonstrations for each toolbox.

If you want to learn more about the workings of QMRITools you can watch a live discussion with the
Wolfram academic outreach team about <a href=" https://www.youtube.com/watch?v=wupxxiPJkxU&t=48s" target="_blank">QMRITools</a>
and the role of computational Wolfram technology.

{% include page-image im_id="proc" %}

### Referencing

When using the toolbox it is appreciated if you cite one of the following articles:

1. Froeling M: *QMRTools: a Mathematica toolbox for quantitative MRI
  analysis*. J Open Source Softw 2019; 4:1204.
  [link](https://joss.theoj.org/papers/ef8bfb6c31499845d353b6a5af0d6300){:target="_blank"}
2. Froeling M, et al.: *Reproducibility of diffusion tensor imaging in
  human forearm muscles at 3.0 T in a clinical setting*. Magn Reson Med
  2010; 64:1182-1190.
  [link](https://onlinelibrary.wiley.com/doi/full/10.1002/mrm.22477){:target="_blank"}
3. Froeling M, et al.: *Diffusion-tensor MRI reveals the complex muscle
  architecture of the human forearm*. J Magn Reson Imaging 2012; 36:237-248.
  [link](https://onlinelibrary.wiley.com/doi/10.1002/jmri.23608){:target="_blank"}
4. Schlaffke L, et al.: *Multi‐center evaluation of stability and reproducibility of
  quantitative MRI measures in healthy calf muscles*. NMR Biomed. 2019;32:e4119
  [link](https://onlinelibrary.wiley.com/doi/full/10.1002/nbm.4119){:target="_blank"}

{% include page-image im_id="app" %}

### Publications using QMRITools

- Froeling, M. et al. (2021) ‘PCA denoising and Wiener deconvolution of 31P 3D CSI data to enhance effective SNR and improve point spread function’, Magnetic Resonance in Medicine, 85(6), pp. 2992–3009. doi:10.1002/mrm.28654.
- Secondulfo, L. et al. (2021) ‘Supervised segmentation framework for evaluation of diffusion tensor imaging indices in skeletal muscle’, NMR in Biomedicine, 34(1), p. e4406. doi:10.1002/nbm.4406.
- Habets, L.E. et al. (2021) ‘Magnetic resonance reveals mitochondrial dysfunction and muscle remodelling in spinal muscular atrophy’, Brain [Preprint]. doi:10.1093/brain/awab411.
- Forsting, J. et al. (2021) ‘High inter-rater reliability of manual segmentation and volume-based tractography in healthy and dystrophic human calf muscle’, Diagnostics, 11(9), p. 1521. doi:10.3390/diagnostics11091521.
- Straatman, H.C.H. et al. (2021) ‘Quantitative Interpretation of Myocardial Fiber Structure in the Left and Right Ventricle of an Equine Heart Using Diffusion Tensor Cardiovascular Magnetic Resonance Imaging’, in Lecture Notes in Computer Science, pp. 178–188. doi:10.1007/978-3-030-78710-3_18.
- Güttsches, A.K. et al. (2021) ‘Quantitative Muscle-MRI Correlates with Histopathology in Skeletal Muscle Biopsies’, Journal of Neuromuscular Diseases, 8(4), pp. 669–678. doi:10.3233/JND-210641.
- Mazzoli, V. et al. (2021) ‘Diffusion Tensor Imaging of Skeletal Muscle Contraction Using Oscillating Gradient Spin Echo’, Frontiers in Neurology, 12(February), p. 45. doi:10.3389/fneur.2021.608549.
- Otto, L.A.M. et al. (2021) ‘Quantification of disease progression in spinal muscular atrophy with muscle MRI—a pilot study’, NMR in Biomedicine, 34(4), p. e4473. doi:10.1002/nbm.4473.
- Gursan, A. et al. (2021) ‘Residual quadrupolar couplings observed in 7 Tesla deuterium MR spectra of skeletal muscle’, Magnetic Resonance in Medicine [Preprint]. doi:10.1002/mrm.29053.
- Rehmann, R. et al. (2021) ‘Diffusion Tensor Imaging Shows Differences Between Myotonic Dystrophy Type 1 and Type 2’, Journal of Neuromuscular Diseases, 8(6), pp. 949–962. doi:10.3233/jnd-210660.
- Forsting, J. et al. (2021) ‘Evaluation of interrater reliability of different muscle segmentation techniques in diffusion tensor imaging’, NMR in Biomedicine, 34(2), p. e4430. doi:10.1002/nbm.4430.
- Stouge, A. et al. (2020) ‘MRI of skeletal muscles in participants with type 2 diabetes with or without diabetic polyneuropathy’, Radiology, 297(3), pp. 608–619. doi:10.1148/radiol.2020192647.
- Keene, K.R. et al. (2020) ‘T2 relaxation-time mapping in healthy and diseased skeletal muscle using extended phase graph algorithms’, Magnetic Resonance in Medicine, 84(5), pp. 2656–2670. doi:10.1002/mrm.28290.
- Forsting, J. et al. (2020) ‘Diffusion tensor imaging of the human thigh: consideration of DTI-based fiber tracking stop criteria’, Magnetic Resonance Materials in Physics, Biology and Medicine, 33(3), pp. 343–355. doi:10.1007/s10334-019-00791-x.
- Otto, L.A.M. et al. (2020) ‘Quantitative MRI of skeletal muscle in a cross-sectional cohort of patients with spinal muscular atrophy types 2 and 3’, NMR in Biomedicine, 33(10), p. e4357. doi:10.1002/nbm.4357.
- Hooijmans, M.T. et al. (2020) ‘Multi-parametric MR in Becker muscular dystrophy patients’, NMR in Biomedicine, 33(11), p. e4385. doi:10.1002/nbm.4385.
- Oudeman, J. et al. (2020) ‘Diagnostic accuracy of MRI and ultrasound in chronic immune-mediated neuropathies’, Neurology, 94(1), pp. e62–e74. doi:10.1212/WNL.0000000000008697.
- Hooijmans, M.T. et al. (2020) ‘Quantitative MRI Reveals Microstructural Changes in the Upper Leg Muscles After Running a Marathon’, Journal of Magnetic Resonance Imaging, 52(2), pp. 407–417. doi:10.1002/jmri.27106.
- Monte, J.R. et al. (2020) ‘The repeatability of bilateral diffusion tensor imaging (DTI) in the upper leg muscles of healthy adults’, European Radiology, 30(3), pp. 1709–1718. doi:10.1007/s00330-019-06403-5.
- Rehmann, R. et al. (2020) ‘Diffusion tensor imaging reveals changes in non-fat infiltrated muscles in late onset Pompe disease’, Muscle and Nerve, 62(4), pp. 541–549. doi:10.1002/mus.27021.
- Rehmann, R. et al. (2019) ‘Muscle diffusion tensor imaging in glycogen storage disease V (McArdle disease)’, European Radiology, 29(6), pp. 3224–3232. doi:10.1007/s00330-018-5885-1.
- Froeling, M. (2019) ‘QMRTools: a Mathematica toolbox for quantitative MRI analysis.’, Journal of Open Source Software, 4(38), p. 1204. doi:10.21105/joss.01204.
- Voskuilen, L. et al. (2019) ‘Crossing muscle fibers of the human tongue resolved in vivo using constrained spherical deconvolution’, Journal of Magnetic Resonance Imaging, 50(1), pp. 96–105. doi:10.1002/jmri.26609.
- Schlaffke, L. et al. (2019) ‘Multi-center evaluation of stability and reproducibility of quantitative MRI measures in healthy calf muscles’, NMR in Biomedicine, 32(9), p. e4119. doi:10.1002/nbm.4119.
- Oudeman, J. et al. (2018) ‘Diffusion tensor MRI of the healthy brachial plexus’, PLoS ONE, 13(5), p. e0196975. doi:10.1371/journal.pone.0196975.
- Sinha, S. et al. (2018) ‘Exploration of male urethral sphincter complex using diffusion tensor imaging (DTI)-based fiber-tracking’, Journal of Magnetic Resonance Imaging, 48(4), pp. 1002–1011. doi:10.1002/jmri.26017.
- Van Baalen, S. et al. (2018) ‘Mono, bi- and tri-exponential diffusion MRI modelling for renal solid masses and comparison with histopathological findings’, Cancer Imaging, 18(1), pp. 1–11. doi:10.1186/s40644-018-0178-0.
- Gurney-Champion, O.J. et al. (2018) ‘Comparison of six fit algorithms for the intravoxel incoherent motion model of diffusionweighted magnetic resonance imaging data of pancreatic cancer patients’, in PLoS ONE. Public Library of Science, p. 3434. doi:10.1371/journal.pone.0194590.
- Nelissen, J.L. et al. (2018) ‘An advanced magnetic resonance imaging perspective on the etiology of deep tissue injury’, Journal of Applied Physiology, 124(6), pp. 1580–1596. doi:10.1152/japplphysiol.00891.2017.
- Samari, B. et al. (2017) ‘Cartan frames for heart wall fiber motion’, in Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), pp. 32–41. doi:10.1007/978-3-319-59448-4_4.
- van der Bel, R. et al. (2017) ‘A tri-exponential model for intravoxel incoherent motion analysis of the human kidney: In silico and during pharmacological renal perfusion modulation’, European Journal of Radiology, 91(December 2016), pp. 168–174. doi:10.1016/j.ejrad.2017.03.008.
- Schlaffke, L. et al. (2017) ‘Diffusion tensor imaging of the human calf: Variation of inter- and intramuscle-specific diffusion parameters’, Journal of Magnetic Resonance Imaging, 46(4), pp. 1137–1148. doi:10.1002/jmri.25650.
- Samari, B. et al. (2017) ‘Denoising moving heart wall fibers using cartan frames’, in Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), pp. 672–680. doi:10.1007/978-3-319-66182-7_77.
- van Baalen, S. et al. (2017) ‘Intravoxel incoherent motion modeling in the kidneys: Comparison of mono-, bi-, and triexponential fit’, Journal of Magnetic Resonance Imaging, 46(1), pp. 228–239. doi:10.1002/jmri.25519.
- van Heerden, L.E. et al. (2017) ‘Image Distortions on a Plastic Interstitial Computed Tomography/Magnetic Resonance Brachytherapy Applicator at 3 Tesla Magnetic Resonance Imaging and Their Dosimetric Impact’, International Journal of Radiation Oncology Biology Physics, 99(3), pp. 710–718. doi:10.1016/j.ijrobp.2017.06.016.
- Mazzoli, V. et al. (2016) ‘Assessment of passive muscle elongation using Diffusion Tensor MRI: Correlation between fiber length and diffusion coefficients’, NMR in Biomedicine, 29(12), pp. 1813–1824. doi:10.1002/nbm.3661.
- Oudeman, J. et al. (2016) ‘A novel diffusion-tensor MRI approach for skeletal muscle fascicle length measurements’, Physiological Reports, 4(24), p. e13012. doi:10.14814/phy2.13012.
- van Heerden, L.E. et al. (2016) ‘Quantification of image distortions on the Utrecht interstitial CT/MR brachytherapy applicator at 3T MRI’, Brachytherapy, 15(1), pp. 118–126. doi:10.1016/j.brachy.2015.10.008.
- Gurney-Champion, O.J. et al. (2016) ‘Quantitative assessment of biliary stent artifacts on MR images: Potential implications for target delineation in radiotherapy’, Medical Physics, 43(10), pp. 5603–5615. doi:10.1118/1.4962476.
- Oudeman, J. et al. (2016) ‘Techniques and applications of skeletal muscle diffusion tensor imaging: A review’, Journal of Magnetic Resonance Imaging, 43(4), pp. 773–788. doi:10.1002/jmri.25016.
- Sieben, J.M. et al. (2016) ‘In vivo reconstruction of lumbar erector spinae architecture using diffusion tensor MRI’, Clinical Spine Surgery, 29(3), pp. E139–E145. doi:10.1097/BSD.0000000000000036.
- Froeling, M. et al. (2015) ‘Muscle changes detected with diffusion-tensor imaging after long-distance running’, Radiology, 274(2), pp. 548–562. doi:10.1148/radiol.14140702.
- Hooijmans, M.T. et al. (2015) ‘Evaluation of skeletal muscle DTI in patients with duchenne muscular dystrophy’, NMR in Biomedicine, 28(11), pp. 1589–1597. doi:10.1002/nbm.3427.
- Froeling, M. et al. (2014) ‘Diffusion Tensor MRI of the Heart - In Vivo Imaging of Myocardial Fiber Architecture’, Current Cardiovascular Imaging Reports, 7(7), pp. 1–11. doi:10.1007/s12410-014-9276-y.
- Froeling, M. et al. (2014) ‘Feasibility of in vivo whole heart DTI and IVIM with a 15 minute acquisition protocol’, Journal of Cardiovascular Magnetic Resonance, 16(S1), p. O15. doi:10.1186/1532-429x-16-s1-o15.
- Froeling, M. et al. (2014) ‘Ex vivo cardiac DTI: on the effects of diffusion time and b-value’, Journal of Cardiovascular Magnetic Resonance, 16(S1), p. P77. doi:10.1186/1532-429x-16-s1-p77.
- Zijta, F.M. et al. (2013) ‘Diffusion tensor imaging and fiber tractography for the visualization of the female pelvic floor’, Clinical Anatomy, 26(1), pp. 110–114. doi:10.1002/ca.22184.
- Froeling, M. et al. (2013) ‘DTI of human skeletal muscle: The effects of diffusion encoding parameters, signal-to-noise ratio and T2 on tensor indices and fiber tracts’, NMR in Biomedicine, 26(11), pp. 1339–1352. doi:10.1002/nbm.2959.
- Zijta, F.M. et al. (2012) ‘Evaluation of the female pelvic floor in pelvic organ prolapse using 3.0-Tesla diffusion tensor imaging and fibre tractography’, European Radiology, 22(12), pp. 2806–2813. doi:10.1007/s00330-012-2548-5.
- Froeling, M. et al. (2012) ‘Diffusion-tensor MRI reveals the complex muscle architecture of the human forearm’, Journal of Magnetic Resonance Imaging. 2012/02/16, 36(1), pp. 237–248. doi:10.1002/jmri.23608.
- Zijta, F.M. et al. (2011) ‘Feasibility of diffusion tensor imaging (DTI) with fibre tractography of the normal female pelvic floor’, European Radiology. 2011/01/05, 21(6), pp. 1243–1249. doi:10.1007/s00330-010-2044-8.
- Froeling, M. et al. (2010) ‘Reproducibility of diffusion tensor imaging in human forearm muscles at 3.0 T in a clinical setting’, Magnetic Resonance in Medicine. 2010/08/21, 64(4), pp. 1182–1190. doi:10.1002/mrm.22477.
