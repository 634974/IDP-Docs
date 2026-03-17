
## HITL User Guide — Overview

This guide explains how reviewers use the **IDP HITL (Human-in-the-Loop) portal** to validate, correct, and finalize document extraction results when a job requires manual review. It is intended for **HITL reviewers** (and **Leads/Admins**, where applicable) who work in the UI to ensure extracted **fields** are accurate before downstream systems consume the final output.

### Where HITL fits in the IDP workflow
After a document is processed by IDP, some jobs are routed to HITL based on confidence thresholds, validation rules, or tenant/document-type review requirements. Reviewer actions in the portal determine the **final reviewed output** that downstream consumers retrieve.

### What you’ll learn in this guide
At a high level, the guide covers:

- **Accessing the HITL portal**: login/session behavior, tenant selection, and role-based access (**Reviewer / Lead / Admin**).
- **Navigating the UI**: tasks/queues, filters/search, and opening a task to view document details.
- **Performing a review**: verifying extracted values against the source document, correcting fields/tables, and adding notes for context and auditability.
- **Applying decisions**: **Approve/Submit** or **Reject**, including when each action should be used and what information is required (rejection reasons, notes, etc.).
- **Understanding workflow impact**: how review outcomes affect job status and results, including typical UI status progression (for example: *Ready for HITL → HITL In Progress → HITL Completed / HITL Rejected*) and how reviewed results are reflected to downstream consumers via APIs.
- **Best practices and troubleshooting**: avoiding common reviewer pitfalls, handling ambiguous fields, and resolving access or UI issues.

### Prerequisites
You must have an active portal account with the appropriate role for the relevant **tenant** and **document type**.

## In the Scope and Not in Scope

**In scope:** Using the HITL portal to locate review tasks, verify/correct extracted data, and submit or reject documents.

**Not in scope:** API-based submission flows (TenantToken, Prepare, UploadDocument), tenant onboarding/configuration, and backend troubleshooting.

### Related documentation
- [IDP User API Guide](../StarterKit/overview.md): for API-based job submission, status tracking, and retrieving reviewed results (developer/integrator audience).
