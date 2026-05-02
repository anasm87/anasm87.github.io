---
title: "Visual SLAM Front-End (C++)"
description: "A robust, mathematically rigorous Visual Odometry (VO) pipeline written in modern C++. This repository represents the perception front-end of a Simultaneous Localization and Mapping (vSLAM) system, engineered to track camera ego-motion across sequential video frames in real-time."
tech_stack: ["C++17", "OpenCV", "Eigen3", "ORB", "RANSAC", "vcpkg"]
github_url: "https://github.com/anasm87/visual-slam-cpp"
---

### Key Engineering Features

* **Strict Dependency Segregation:** The pipeline ingests frames using OpenCV (`cv::Mat`) but actively shields downstream modules by outputting relative poses using pure Eigen types (`Eigen::Matrix3d`, `Eigen::Vector3d`).
* **Real-Time Feature Tracking:** Utilizes ORB (Oriented FAST and Rotated BRIEF) coupled with a Hamming-distance Brute-Force Matcher.
* **Aggressive Outlier Rejection:** Applies Lowe's Ratio Test to discard ambiguous feature matches, followed by RANSAC during Epipolar geometry estimation to mathematically eliminate dynamic outliers.
* **Epipolar Geometry:** Robustly solves the Essential Matrix E to recover the relative rotation R and translation t between frames.