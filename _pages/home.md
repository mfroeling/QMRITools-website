---
title: "QMRITools"
layout: splash
permalink: /

# feature_row:
#  - image_path: /assets/images/code.png
#    alt: "Software & Code"
#    title: "Software & Code"
#    excerpt: "The MRSHub code repository collects software packages and functions to process, manipulate, analyse, and display MRS data."
#    url: /software
#    btn_label: "To the MRSHub code listing"
#    btn_class: "btn--info btn--small"
#  - image_path: assets/images/forum.jpg
#    alt: "MRSHub Forum"
#    title: "Forum"
#    excerpt: "The MRSHub forum is a place for the MRS community to seek support, exchange ideas, ask questions, and collaborate."
#    url: https://forum.mrshub.org
#    btn_label: "To the MRSHub forum"
#    btn_class: "btn--info btn--small"
#  - image_path: /assets/images/data.jpg
#    alt: "Data"
#    title: "Data"
#    excerpt: "The MRSHub data repository collects MRS datasets for demonstration and testing of new methods."     
#    url: /datasets
#    btn_label: "To the MRSHub data listing"
#    btn_class: "btn--info btn--small"

---

{% capture notice-text %}
This website describes the functionality of QMRITools, a toolbox for analysis of quantitative magnetic resonance imaging data. The package contains processing tools related to quantitative MRI and spectroscopy of muscle, heart and nerves.
** test **
{% endcapture %}

<div class="notice--info" align="center">
  <h1>Welcome to QMRITools!</h1>
  {{ notice-text | markdownify }}
</div>

{% include feature_row %}
