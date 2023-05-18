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
