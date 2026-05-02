---
title: "Extended Kalman Filter (EKF) for Sensor Fusion"
description: "Unlike standard textbook implementations, this EKF is engineered for production-grade numerical stability, specifically designed to prevent covariance divergence in high-dimensional state spaces and floating-point edge cases."
tech_stack: ["C++17", "Eigen3", "GTest", "CMake"]
github_url: "https://github.com/anasm87/sensor-fusion-ekf"
---

### Key Engineering Features

* **Joseph Form Covariance Update:** Utilizes the robust Joseph form for the measurement update step. This guarantees that the state covariance matrix P remains positive semi-definite and symmetric, even in the presence of severe floating-point rounding errors.
* **Cholesky Decomposition:** Replaces direct matrix inversion with Eigen's LLT (Cholesky) decomposition `S.llt().solve()` when computing the Kalman Gain K. This provides superior numerical precision and computational efficiency.
* **Modern C++ Architecture:** Clean API utilizing `std::function` for injecting non-linear state transition and measurement functions.
* **Hermetic Build System:** Employs CMake `FetchContent` to automatically manage dependencies (Eigen3, Google Test), ensuring deterministic, zero-friction builds across Linux, macOS, and Windows.