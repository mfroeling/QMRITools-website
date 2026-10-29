---

layout: page
permalink: /doc/whatsnew/

title: "What's new in QMRITools 5"
subheadline: "New toolboxes, segmentation workflow and Muscle-BIDS pipeline"
teaser: "A summary of the changes since version 4"

header: no

---

QMRITools 5 requires Wolfram Language 15.0 or newer. The complete list of changes, per major version, is in the [changelog](https://github.com/mfroeling/QMRITools/blob/master/CHANGELOG.md){:target="_blank"}.

### New toolboxes

- **[NeuralNetworkTools](../../tool/neuralnetworktools/)**: building blocks for neural networks, loss layers, transfer learning and inspection of trained networks.
- **[ShapeTools](../../tool/shapetools/)**: statistical shape models and meshes of segmented structures.
- **[AmaresTools](../../tool/amarestools/)**: AMARES fitting of MR spectroscopy data.

### Muscle segmentation

- Complete train-and-deploy workflow with new architectures (UNET++, strided convolutions), training on multiple contrasts, masked pretraining and encoder freezing for transfer learning, and parallel data loading.
- More anatomy, including the shoulder, and merging of segmentations.
- Segmentation confidence maps and QC plots.
- Command line [scripts](../manuals/) for installing QMRITools and segmenting data without Mathematica.

See [automated muscle segmentation](../../seg/segmentation/).

### Muscle-BIDS

- An end-to-end pipeline from DICOM to per-muscle results, including T2 mapping, tractography and `MuscleBidsAnalysis`.
- Better DICOM conversion with multiple sessions and repeated scans, combining of config files and batch processing.
- Integration with [MuscleMap](https://musclemap.github.io/MuscleMap/){:target="_blank"}.
- A new [manual](../manuals/) with example configurations.

See [Muscle-BIDS](../../bids/).

### Diffusion, tractography and fasciculation

- Random permeable barrier model (RPBM) fitting, correction for gradient non-linearity and export of b-values and b-vectors.
- Import and export of MRtrix `.tck` files and tract length and curvature measures.
- Area based activation sizes for fasciculation analysis.

### Denoising, reconstruction, spectroscopy and simulation

- Self-supervised network denoising (`P2SDenoise`), harmonic denoising of tensors and denoising of spectroscopic imaging data.
- More reconstruction options: prewhitening, SENSE smoothing and weighting, k-space averaging.
- `SpectraSimulator` and EPG simulation that accounts for the refocusing pulse phase.

### Plotting

- Dark mode, `LoessPlot` and Crameri scientific colormaps ([ScientificColorData](../../tool/scientificcolordata/)).
