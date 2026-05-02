---
title: "Agentic AI Driving Decision Engine"
description: "An autonomous vehicle decision-making engine powered by LangChain and Google's Gemini LLMs. This engine uses a tool-calling architecture to gather real-time simulated telemetry and perception data, reason about the driving environment, and output rigid, structured control commands."
tech_stack: ["Python 3.10", "LangChain", "Google Gemini", "Pydantic", "pytest"]
github_url: "https://github.com/anasm87/agentic-driving-decision"
---

### Key Engineering Features

* **Reason (Thought):** The agent receives a driving scenario (e.g., "Approaching an intersection at 15 m/s") and determines what information is missing to make a safe decision.
* **Act (Tool Execution):** The agent calls specific tools to interact with the simulated vehicle environment (`telemetry_tool`, `perception_tool`).
* **Observe (Tool Output):** The agent receives the data from the tools and incorporates it into its reasoning context.
* **Final Decision:** Once sufficient information is gathered, the agent processes the consolidated context through its system prompt and produces a strictly formatted JSON output adhering to a Pydantic schema.