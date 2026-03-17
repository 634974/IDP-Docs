## Summary

The **Deep Dive Data** tab exposes the row‑level operational dataset behind the dashboards. It’s designed for **analysts**, **QA leads**, and **operations teams** who need to audit **individual cases**, **trace workflow states**, **reconcile processing anomalies**, and **export data** for offline analysis.

This view lists every case that was picked up by the workflow—whether it completed, needed HITL, was rejected, or failed during classification/processing—and lets you apply the same filters available across the Reports pages for targeted investigations.

---

## Overview Metrics

![deepdive](../HITL%20User%20Guide/UI%20Screens/Quicksight/AI%20Metrics/Deepdive%20data.png)

At the top of the dashboard, **[global filters](Reports.md#filters-controls)** allow you to refine the grid:

- **Date Range** – Constrain records to a specific time window (supports Day/Month/Quarter/Year drill‑down).
- **Needs HITL Review** – Include only items that required human review (Y/N).
- **Workflow Status** – Filter by lifecycle stage (e.g., HITL In Progress, HITL Completed, HITL Rejected, Classification Failed, Error Status).
- **LanguageCode** – Focus on specific language cohorts.
- **DocType** – Isolate document categories for targeted QA.
- **Status** – Limit to Completed when reconciling final outcomes.
- **FileName** – Pinpoint one or more documents for case‑by‑case analysis.

## Dashboard

The central table presents one row per **document** with key operational attributes. 

Typical columns include:

- **Case ID** – System‑generated unique identifier for the case.
- **FileName** – Source file name (as uploaded).
- **CreatedTS** – Timestamp when the case entered the system (localized to reporting timezone).
- **Workflow Status** – Current/terminal state (e.g., HITL In Progress, HITL Completed, Rejected, Classification Failed).
- **NeedsReview** – Y/N flag indicating whether HITL action was required.
- **LanguageCode** – Detected language (e.g., en, es, fr).
- **DocTypeID** – Internal code for the document type (e.g., ORG_FORM, MP, RDF).
- **UserEmail** – The user who performed the last action.