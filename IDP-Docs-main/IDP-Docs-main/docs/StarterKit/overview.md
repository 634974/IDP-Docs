
The **IDP User APIs** are the primary set of APIs that client applications use to interact with the **Intelligent Document Processing (IDP)** service. These APIs enable consumers to **authenticate**, **upload documents securely**, **start document-processing jobs**, **track job progress**, and **retrieve extracted results** once processing is complete.

The User APIs follow a **job-based, asynchronous workflow**. Instead of processing documents synchronously in a single request, IDP creates a **job** for each document and processes it in the background. Clients use the returned **jobId** to poll for status updates and to fetch extraction results when ready. This approach supports long-running extraction tasks, avoids client-side timeouts, and provides traceability for monitoring and troubleshooting.

### What the User APIs enable

- **Authentication for IDP requests**  
  Clients obtain an access token (for example, via the *TenantToken* API) and include it in subsequent requests using the `Authorization` header.

- **Secure document upload (two supported patterns)**  
    - Inline upload for smaller documents (Base64 payload)
    - Pre-signed URL upload for large documents (direct binary upload to storage using HTTP `PUT`)

- **Asynchronous job creation and processing**  
  Each document is associated with a unique **jobId**, which becomes the central reference for tracking and retrieval.

- **Job status tracking**  
  Clients can list jobs or fetch a specific job to track processing states (for example: `queued`, `processing`, `completed`, `failed`).

- **Result retrieval**  
  When processing completes, clients retrieve extracted outputs (typically structured data such as JSON) using the **jobId**.

### Key User APIs

The IDP User API surface includes:

- **TenantToken** - Generates an access token used to call IDP User APIs.
- **Get Pre-signed URL** - Creates/initializes a job and returns a `jobId` plus a pre-signed upload URL.
- **UploadDocument** - Submits document metadata (such as document type) associated with a job and triggers processing (where applicable).
- **GetJobs** - Lists jobs and their summary information.
- **GetJobById** - Retrieves detailed status for a specific job.
- **GetJobData** - Retrieves the extracted output for a completed job.
- **ConsumeJob** - Marks the job as consumed.

### Typical end-to-end flow

1. **Get an access token** using `TenantToken`.
2. **Choose an upload flow**:
    - **Flow A (≤ 5 MB)**: Send Base64 inline to `/v1/models/idp`
    - **Flow B (> 5 MB)**: Use `/v1/models/idp/prepare` to get a pre-signed URL and upload the binary with `PUT`
3. **Submit document details** (for example, `doctype`) and start processing (if not already started).
4. **Track the job** using `GetJobById` until it reaches `completed` (or handle `failed`).
5. **Fetch results** using `GetJobData`.
6. **Marks the job as consumed** using `ConsumeJob`.

---

## Who should use this documentation

This guide is intended for **developers** and **integration engineers** who want to integrate IDP APIs into applications or automation workflows.

## Prerequisites

- Valid OAuth client credentials (`client_id` and `client_secret`)

---

## Base URLs

### Auth Server (Cognito) — token generation only

Use this endpoint to generate access tokens:

`https://{User Pool ID}.auth.{Region}.amazoncognito.com/`

!!!Note
    Contact IDP team to get the User Pool ID and Region information.

### IDP API Base URL (API Gateway)

Use this base URL for all IDP endpoints:

`https://doc-intake.prod.digital-idp.maximus.com/prod`

**Example**  
If the endpoint is `/v1/models/idp/prepare`, the full URL is:

`https://doc-intake.prod.digital-idp.maximus.com/prod/v1/models/idp/prepare`

---

## Authentication (high-level)

1. Generate an access token using the **TenantToken** API (OAuth2 `client_credentials`).
2. Call IDP APIs with the following header:

`Authorization: Bearer <access_token>`

To learn more, refer to:  
[Authentication API](../Authentication%20APIs/#auth-server-base-url-cognito)

!!! Security
    Do not hardcode or log `client_secret`, access tokens, or pre-signed URLs.

---

## Upload flows

IDP supports two upload patterns depending on file size and integration requirements.

### Flow A: Standard (≤ 5 MB) — Inline Base64

Use this flow for small documents. Convert the file to Base64 and submit it directly in the request payload.

High-level steps:

1. Generate token (**TenantToken**)
2. POST the document to `/v1/models/idp` with Base64 payload
3. Receive `jobId` and initial status
4. Track status (**GetJobById**) and retrieve results (**GetJobData**)

### Flow B: Large files (> 5 MB) — Pre-signed URL upload

Use this flow for large documents.

High-level steps:

1. POST `/v1/models/idp/prepare` → returns `jobId` and a pre-signed `url`
2. PUT the file (binary) to the pre-signed `url` → expect `200 OK`
3. POST `/v1/models/idp` with `jobId` and document details (for example, `doctype`) to start processing
4. Track status (**GetJobById**) and retrieve results (**GetJobData**)

!!! Note
    For the `PUT` request to the pre-signed URL, do **not** include the `Authorization` header.

To learn more about uploads, refer to:  
[Document Upload API](../Uploading%20document%20APIs)

---

## Job finalization (Consumed job)

After the extracted output is finalized and no further changes are required, mark the job as consumed:

`POST /v1/jobs/{jobId}/consumed`

This confirms the document is finalized and the job output is treated as complete.
