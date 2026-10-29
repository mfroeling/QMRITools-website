---

layout: page
title: NeuralNetworkTools
permalink: /tool/neuralnetworktools/

header: no

tags: 
  - packages

---

[Guide page ››](/assets/htmldoc/html/guide/{{page.title}}.html){:target="_blank"}
[Code on Github ››](https://github.com/mfroeling/QMRITools/blob/master/QMRITools/Kernel/NeuralNetworkTools.wl)

This toolbox contains the general building blocks for neural networks that are used by the [SegmentationTools](/tool/segmentationtools/). It can make (UNET) networks (`MakeUnet`) and classification networks (`MakeClassifyNetwork`), and contains loss layers (Dice, Jaccard, Tversky, cross-entropy, focal and top-K), configurable activation layers and functions to encode and decode classes. There are also functions to change the dimensions of a network, to freeze and copy layers for transfer learning, and to inspect network nodes and features (`NetSummary`, `GetNetNodes`, `AnalyzeNetworkFeatures`). [Back››](/tool/)
