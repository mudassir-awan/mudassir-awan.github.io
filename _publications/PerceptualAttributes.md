---
title: "Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network"
collection: publications
permalink: /publications/PerceptualAttributes
excerpt: "A CNN-LSTM framework for predicting haptic attributes from tactile data. Presented at ACM VRST 2023."
date: 2023-10-09
venue: 'ACM Symposium on Virtual Reality Software and Technology (VRST)'
paperurl: 'https://doi.org/10.1145/3611659.3615714'
citation: 'Mudassir Ibrahim Awan, Waseem Hassan, and Jeon Seokhee.'
description: "This paper presents a CNN-LSTM deep learning network for predicting multi-dimensional haptic attribute values based on tactile signals generated from textured surfaces. The algorithm evaluates unseen textures, achieving reliable performance."
keywords: "haptic attributes, tactile data, CNN-LSTM, textured surfaces, deep learning, VRST 2023"
image: "https://mudassir-awan.github.io/images/VRST.png"  # Adjust the image path if needed.
---

This paper introduces a framework to predict multi-dimensional haptic attribute values that humans use to recognize material properties using physical tactile signals (acceleration) generated when a textured surface is stroked. To this end, two spaces are established: a haptic attribute space and a physical signal space. A five-dimensional haptic attribute space is established through human adjective rating experiments with 25 real texture samples. The physical space is constructed using tool-based interaction data from the same 25 samples. A mapping is modeled between these spaces using a newly designed CNN-LSTM deep learning network. 

A prediction algorithm is implemented that takes acceleration data and returns coordinates in the haptic attribute space. A quantitative evaluation was conducted to inspect the reliability of the algorithm on unseen textures, showing that the model outperformed other similar models.

[Download (PDF)](https://mudassir-awan.github.io/files/Predicting_Perceptual_Haptic_Attributes.pdf)

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
  "url": "https://dl.acm.org/doi/10.1145/3611659.3615714",
  "image": "https://mudassir-awan.github.io/images/VRST.png",
  "citation": "Mudassir Ibrahim Awan, Waseem Hassan, and Jeon Seokhee. Presented at ACM VRST 2023.",
  "description": "This paper introduces a CNN-LSTM framework for predicting haptic attributes based on tactile signals from textured surfaces."
}
</script>

---

For more information, explore the full paper on [ResearchGate](https://www.researchgate.net/publication/374578828_Predicting_Perceptual_Haptic_Attributes_of_Textured_Surface_from_Tactile_Data_Based_on_Deep_CNN-LSTM_Network), [ACM](https://dl.acm.org/doi/10.1145/3611659.3615714), or [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=VCllBHIAAAAJ&citation_for_view=VCllBHIAAAAJ:IjCSPb-OGe4C).

---



<!-- BibTeX citation box -->
<div class="bibtex-container">
  <h3>Cite this paper (BibTeX):</h3>
  <pre id="bibtexCitation">
@inproceedings{awan2023predicting,
  title={Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network},
  author={Awan, Mudassir Ibrahim and Hassan, Waseem and Jeon, Seokhee},
  booktitle={Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology},
  pages={1--9},
  year={2023}
}
}
  </pre>
  <button class="copy-button" onclick="copyBibTex()">Copy BibTeX</button>
</div>

<!-- JavaScript to copy BibTeX to clipboard -->
<script>
function copyBibTex() {
  var bibtexText = document.getElementById("bibtexCitation").innerText;
  var textArea = document.createElement("textarea");
  textArea.value = bibtexText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("BibTeX copied to clipboard!");
}
</script>

<!-- Basic CSS for styling the BibTeX box and button -->
<style>
.bibtex-container {
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  padding: 16px;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 16px;
}

.bibtex-container pre {
  white-space: pre-wrap;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  padding: 10px;
  border-radius: 6px;
  font-family: "Courier New", Courier, monospace;
  margin: 0;
}

.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

.copy-button:hover {
  background-color: #218838;
}
</style>
