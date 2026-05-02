---
title: "Agentic VQA System"
description: "This project implements a Production-Grade Visual Question Answering (VQA) Pipeline. The pipeline is designed to take an image (e.g., a dashcam frame) and a text prompt, process them using an open-source Vision-Language Model (VLM), and return a descriptive answer."
tech_stack: ["Python", "PyTorch", "Hugging Face Transformers", "BLIP"]
github_url: "https://github.com/anasm87/agentic-vqa-system"
---

### Key Engineering Features

* **Framework:** Built with PyTorch, ensuring efficient tensor operations and GPU acceleration where available.
* **Model Library:** Integrated with the Hugging Face `transformers` library to utilize the `BlipForQuestionAnswering` architecture.
* **Pre-trained Model:** Defaults to `Salesforce/blip-vqa-base`, which is optimized for visual question answering tasks.
* **Processing:** Uses `BlipProcessor` for multimodal input handling (image + text).