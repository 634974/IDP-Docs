## Summary

The **IDP AI Metrics** tab provides a consolidated view of all model‑level performance indicators for Textract, Claude, and the combined IDP pipeline. These metrics help supervisors, analysts, and product teams evaluate the accuracy, reliability, and consistency of AI‑driven extraction across HITL‑completed cases.

This dashboard is particularly useful for quality monitoring, benchmarking model upgrades, and identifying areas where HITL effort can be reduced through model tuning.

---

## Overview Metrics

![main page](../HITL%20User%20Guide/UI%20Screens/Quicksight/AI%20Metrics/AI%20Metrics.png)

At the top of the dashboard, a set of **[global filters](Reports.md#filters-controls)** allows users to refine the metrics:

- **Date Range** – Filter metrics by a specific time window.
- **Needs HITL Review** – Focus exclusively on cases that required human review.
- **Language Code** – Analyze performance across supported languages.
- **DocType** – Compare accuracy metrics between different document types.
- **Status** – Filter on HITL‑completed cases to ensure consistent comparison.

A Drill‑Down Date control allows switching between Daily, Monthly, Quarterly, or Yearly trend views.

---

### Key AI Performance Metrics
The IDP AI Metrics dashboard highlights performance values for three major model contributors:

- **Textract** – Baseline OCR / extraction model performance
- **Claude** – LLM‑based refinement and field extraction corrections
- **IDP (Combined)** – Aggregated performance representing the entire IDP pipeline

Each model displays the following KPIs:

#### 1. Precision
Precision represents the percentage of extracted fields that were correct, without requiring corrections during HITL review.

Typical insights include:

- **Textract Precision** – Establishes raw extraction accuracy prior to LLM enhancement.
- **Claude Precision** – Shows improvement in correctness after LLM restructuring.
- **IDP Precision** – Reflects combined extraction quality after orchestration across models.

This metric helps determine how often models produce correct values without false positives.

#### 2. Recall
Recall measures the system’s ability to successfully identify and extract all required fields.

- Higher recall indicates fewer missing or unrecognized fields.
- Textract and Claude recall metrics help diagnose extraction gaps.
- IDP recall provides a holistic view of pipeline completeness.

This metric is essential for identifying model blind spots, especially in complex or low‑quality documents.

#### 3. F1 Score
The F1 Score is the harmonic mean of Precision and Recall.

It provides a balanced measure of overall extraction quality by considering both:

- **Correctness** (Precision)
- **Completeness** (Recall)

IDP’s F1 score reflects final pipeline performance after consolidation of Textract raw extraction and Claude’s refinement.