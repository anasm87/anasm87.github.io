---
title: "Multi-Threaded Vision Pipeline"
description: "This project implements a Thread Pool architecture to perform parallel Sobel edge detection. It is designed to maximize CPU throughput while minimizing lock contention and avoiding false sharing at thread boundaries."
tech_stack: ["C++17", "Thread Pool", "Sobel", "CMake"]
github_url: "https://github.com/anasm87/multi-threaded-vision"
speedup_metric: "3.83x"
---

### Key Engineering Features

* **Zero-Copy Memory Management:** Image buffers are managed via `std::shared_ptr<std::vector<uint8_t>>`. Data is passed to worker threads by reference, eliminating expensive memory allocations during frame handoffs.
* **Spatial Partitioning & Halo Regions:** Workloads are horizontally partitioned based on `std::thread::hardware_concurrency()`. The architecture implements +1/-1 pixel "Halo Regions" (ghost zones) to allow threads to read overlapping boundary pixels without crossing strict memory bounds, preserving L1/L2 Cache locality and preventing cache thrashing.
* **Custom Thread Pool:** Utilizes a fixed-size pool of worker threads synchronized via `std::condition_variable` and `std::mutex`, completely avoiding the overhead of thread creation/destruction per frame.