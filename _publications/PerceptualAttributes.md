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
<div class="bibtex-container" style="width: 100%;">
  <div class="bibtex-header" style="display: flex; justify-content: space-between; align-items: center;">
    <h4 style="margin: 0;">Cite this paper (BibTeX):</h4>
    <button class="copy-button" onclick="copyBibTeX()" title="Copy BibTeX to clipboard" style="background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer;">Copy BibTeX</button>
  </div>
  <pre id="bibtex-code" style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; font-size: 12px; margin-top: 10px; white-space: pre-wrap;">
@inproceedings{awan2023predicting,
  title={Predicting Perceptual Haptic Attributes of Textured Surface from Tactile Data Based on Deep CNN-LSTM Network},
  author={Awan, Mudassir Ibrahim and Hassan, Waseem and Jeon, Seokhee},
  booktitle={Proceedings of the 29th ACM Symposium on Virtual Reality Software and Technology},
  pages={1--9},
  year={2023}
}
  </pre>
</div>

<script>
function copyBibTeX() {
  const bibtexText = document.getElementById('bibtex-code').textContent.trim();
  
  // Create a temporary text area to cleanly copy the BibTeX
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = bibtexText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
  
  // Change the button text to indicate success
  const button = document.querySelector('.copy-button');
  button.textContent = "Copied!";
  setTimeout(() => {
    button.textContent = "Copy BibTeX";
  }, 2000); // Reset to original after 2 seconds
}
</script>

<!-- Basic CSS for styling the BibTeX box and button -->
<style>
.bibtex-container {
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  padding: 12px;
  width: 100%;
  max-width: 700px; /* Increased width for better readability */
  margin-bottom: 16px;
  border-radius: 8px;
}

.bibtex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.bibtex-header h4 {
  margin: 0;
  font-size: 16px; /* Adjust as needed */
}

.copy-button {
  padding: 5px 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 4px;
}

.copy-button:hover {
  background-color: #218838;
}

.bibtex-container pre {
  white-space: pre-wrap;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  padding: 8px;
  border-radius: 6px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px; /* Adjust font size */
  margin: 0;
  line-height: 1.4;
}
</style>
