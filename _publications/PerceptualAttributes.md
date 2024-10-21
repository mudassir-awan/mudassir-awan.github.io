---
title: "Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network"
collection: publications
permalink: /publications/PerceptualAttributes
excerpt: "A CNN-LSTM framework for predicting haptic attributes from tactile data. Presented at ACM VRST 2023."
date: 2023-10-09
venue: 'ACM Symposium on Virtual Reality Software and Technology (VRST)'
paperurl: 'https://mudassir-awan.github.io/files/Predicting_Perceptual_Haptic_Attributes.pdf'
citation: 'Mudassir Ibrahim Awan, Waseem Hassan, and Jeon Seokhee.'
description: "This paper presents a CNN-LSTM deep learning network for predicting multi-dimensional haptic attribute values based on tactile signals generated from textured surfaces. The algorithm evaluates unseen textures, achieving reliable performance."
keywords: "haptic attributes, tactile data, CNN-LSTM, textured surfaces, deep learning, VRST 2023"
image: "https://mudassir-awan.github.io/images/haptic-attributes.png"  # Adjust the image path if needed.
---

This paper introduces a framework to predict multi-dimensional haptic attribute values that humans use to recognize material properties using physical tactile signals (acceleration) generated when a textured surface is stroked. To this end, two spaces are established: a haptic attribute space and a physical signal space. A five-dimensional haptic attribute space is established through human adjective rating experiments with 25 real texture samples. The physical space is constructed using tool-based interaction data from the same 25 samples. A mapping is modeled between these spaces using a newly designed CNN-LSTM deep learning network. 

A prediction algorithm is implemented that takes acceleration data and returns coordinates in the haptic attribute space. A quantitative evaluation was conducted to inspect the reliability of the algorithm on unseen textures, showing that the model outperformed other similar models.

[Download paper here](https://mudassir-awan.github.io/files/Predicting_Perceptual_Haptic_Attributes.pdf)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "name": "Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network",
  "author": [
    {
      "@type": "Person",
      "name": "Mudassir Ibrahim Awan",
      "url": "https://scholar.google.com/citations?user=VCllBHIAAAAJ&hl=en"
    },
    {
      "@type": "Person",
      "name": "Waseem Hassan"
    },
    {
      "@type": "Person",
      "name": "Jeon Seokhee",
      "url": "https://scholar.google.com/citations?user=LBKIIU8AAAAJ&hl=en"
    }
  ],
  "datePublished": "2023-10-09T00:00:00+00:00",
  "publisher": {
    "@type": "Organization",
    "name": "ACM Symposium on Virtual Reality Software and Technology (VRST)"
  },
  "inLanguage": "en",
  "headline": "Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network",
  "url": "https://mudassir-awan.github.io/publications/PerceptualAttributes",
  "image": "https://mudassir-awan.github.io/images/haptic-attributes.png",  # Adjust image path if required.
  "citation": "Mudassir Ibrahim Awan, Waseem Hassan, and Jeon Seokhee. Presented at ACM VRST 2023.",
  "description": "This paper introduces a CNN-LSTM framework for predicting haptic attributes based on tactile signals from textured surfaces."
}
</script>
