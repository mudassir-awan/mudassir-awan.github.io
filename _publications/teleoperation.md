---
title: "Model-Mediated Teleoperation for Remote Haptic Texture Sharing: Initial Study of Online Texture Modeling and Rendering"
collection: publications
permalink: /publications/teleoperation
excerpt: ''
date: 2023-05-19
venue: 'The International Conference on Robotics and Automation (ICRA)'
paperurl: ''
citation: 'Mudassir Ibrahim Awan, T Ogay, Waseem Hassan, Dongbeom Ko, S Kang, and Seokhee Jeon.'
---

<!-- This paper presents the first model-mediated teleoperation (MMT) framework capable of sharing surface haptic texture. It enables the collection of physical signals on the follower side, which are used to build and update a local texture simulation model on the leader side. This approach provides real-time, stable, and accurate feedback of texture. The paper includes an implemented proof-of-concept system that showcases the potential of this approach for remote texture sharing. -->

Introduction: This research paper presents a novel framework for model-mediated teleoperation (MMT) that allows the sharing of surface haptic texture. While MMT has been proven effective in ensuring transparency and stability, its potential in transmitting haptic texture has not been explored. Our framework addresses this gap by introducing a comprehensive approach to enable remote texture sharing.

Methodology: In our proposed framework, the follower side captures physical signals associated with haptic texture perception, such as high-frequency acceleration, and transmits them to the leader side. On the leader side, these signals are utilized to construct and continuously update a local measurement-based texture simulation model that accurately represents the remote surface. Simultaneously, the leader side runs a local simulation using the texture model, providing real-time, stable, and precise feedback of the surface texture.

Benefits of Model-Mediated Teleoperation for Haptic Texture Transmission: Given the demanding real-time requirements of rendering haptic texture, such as high update rates and low action-feedback latency, MMT proves to be an ideal platform for remote texture sharing. By leveraging the strengths of MMT, our approach enables the seamless transmission of surface haptic texture over remote connections.

Proof-of-Concept Implementation and Evaluation: To demonstrate the potential of our approach, we have implemented and evaluated an initial proof-of-concept system. The system supports single and homogeneous surfaces, and the results showcase promising outcomes in terms of the successful transmission and perception of haptic texture.

[Download paper here](http://mudassir-awan.github.io/files/MMT.pdf)



<!-- BibTeX citation box container -->
<div class="bibtex-container" style="width: 100%;">
  <!-- Header section with title for the citation -->
  <div class="bibtex-header" style="display: flex; justify-content: space-between; align-items: center;">
    <h4 style="margin: 0;">Cite this paper (BibTeX):</h4> <!-- Citation title with no extra margin -->
  </div>
  
  <!-- Preformatted text block that contains the BibTeX citation -->
  <pre id="bibtex-code" style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; font-size: 12px; margin-top: 10px; white-space: pre-wrap;">
@inproceedings{awan2023model,
  title={Model-Mediated Teleoperation for Remote Haptic Texture Sharing: Initial Study of Online Texture Modeling and Rendering},
  author={Awan, Mudassir Ibrahim and Ogay, Tatyana and Hassan, Waseem and Ko, Dongbeom and Kang, Sungjoo and Jeon, Seokhee},
  booktitle={2023 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={12457--12463},
  year={2023},
  organization={IEEE}
}
  </pre>
</div>

<!-- Basic CSS for styling the BibTeX box and layout -->
<style>
/* Container for the BibTeX citation box */
.bibtex-container {
  background-color: #f6f8fa; /* Light grey background for the box */
  border: 1px solid #d1d5da; /* Slight grey border around the box */
  padding: 12px; /* Space between the content and the border */
  width: 100%; /* Full width container */
  max-width: 800px; /* Maximum width set to 800px for readability */
  margin-bottom: 16px; /* Space below the citation box */
  border-radius: 8px; /* Slightly rounded corners */
}

/* Header section styling */
.bibtex-header {
  display: flex; /* Flexbox layout to position items horizontally */
  justify-content: space-between; /* Ensure even spacing between elements */
  align-items: center; /* Align the items vertically in the middle */
  margin-bottom: 10px; /* Add space between the header and the citation block */
}

/* Header title styling */
.bibtex-header h4 {
  margin: 0; /* Remove default margins */
  font-size: 16px; /* Set font size for the title */
}

/* Preformatted text block for the BibTeX content */
.bibtex-container pre {
  white-space: pre-wrap; /* Ensure text wraps properly in the box */
  background-color: #ffffff; /* White background inside the preformatted text */
  border: 1px solid #e1e4e8; /* Light grey border around the BibTeX text */
  padding: 8px; /* Padding inside the pre block for space */
  border-radius: 6px; /* Rounded corners around the pre block */
  font-family: "Courier New", Courier, monospace; /* Monospaced font for BibTeX text */
  font-size: 10px; /* Font size set to 12px for BibTeX content */
  margin: 0; /* Remove margin around the pre block */
  line-height: 1.4; /* Set the line height to improve readability */
}
</style>

