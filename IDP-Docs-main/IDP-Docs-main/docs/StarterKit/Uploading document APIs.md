> ### Base URL

Use this base URL for all IDP endpoints (Prepare, UploadDocument, GetJobs, etc.):

`https://doc-intake.prod.digital-idp.maximus.com/prod`

> ### Document Upload Flow

IDP supports two upload methods, based on file size:

**Path 1**: Standard Flow (≤ 5 MB) → Convert the file to Base64 and send inline.

**Path 2**: Large File Flow (> 5 MB) → Generate a pre-signed URL, upload using PUT, then submit document details.

#### Path 1: Standard Flow (for file size ≤ 5 MB)

**Endpoint**:

`/v1/models/idp`

**Request**:

Send a POST request to the endpoint given.

- Authorization: Bearer <access_token>


```json

{
  "documentType": "ORP",
  "sourceSystem": "xxxxxx",
  "referenceId": "xxxxxx",
  "batchId": "xxxx",
  "version": 1,
  "versionIdentifier": "ORPNew2",
  "tags": {
    "xxxx":"xxxxx",
    "yyyyy":"yyyy"
  }
  "attachment": {
        "fileName": "ORP_S.pdf",
        "base64EncodedData": "<Base64 encoded file content>"
}
}
```

|Parameter|Definition|Data Type|Required/Optional|
|:-|:-|:-|:-|
|documentType|Type of the document|string|Optional|
|sourceSystem|Source system from which the document originated|string|Optional|
|referenceId|External reference ID for cross-system tracking |string|Optional|
|batchId|Identifier if the document is part of a batch process|string|Optional|
|version|Version number of the document |string|Optional|
|versionIdentifier|Custom version identifier string|string|Optional|
|tags|Key–value metadata for additional context|string|Optional|
|attachment|Object containing file attachment details|JSON|Required|
|&emsp;fileName|Name of the attached file|string|Required|
|&emsp;base64EncodedData|Base64 encoded content of the file|string|Required|

**Response**:

```json
{
    "jobId": "xxxxxx",
    "referenceId": "xxxxxx",
    "batchId": "xxxxxxx",
    "createdAt": "2025-08-18T13:39:09.157Z",
    "status": "QUEUED"
}
```

#### Path 2: Large File Flow (for file size > 5 MB)

!!!note
    Although intended for files > 5 MB, this flow is also supported for smaller files (≤ 5 MB).

***Step 1: Get PreSign URL API***

**Purpose**:

Generates a pre-signed URL to upload a document.
This API returns a jobId and an upload url. Use the url to upload the file using a PUT request. After a successful upload (200 OK), continue with UploadDocument to submit document details and start processing.

**Endpoint**:

`/v1/models/idp/prepare`

**Request**:

Send a POST request to the endpoint given.

Header:

- Authorization: Bearer <access_token>

```json
{
  "fileName": "TestPreSign.pdf"
}
```

**Parameter details**:

- `fileName`:
    Name of the file you plan to upload (include file extension, e.g., .pdf, .png, .jpg, .tiff).

**Response**:
Success (201 Created or 200 OK, depending on implementation)

```json
{
  "jobId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "url": "https://<presigned-url>"
}
```

|Parameter|Definition|
|:-|:-|
|jobId|Job identifier used in subsequent APIs such as UploadDocument, GetJobById, and GetJobData.|
|url|Pre-signed URL used to upload the document using PUT|

***Step 2: Upload File (PUT to PreSigned URL)***

**Purpose**:

Submits the document details (for example, document type and metadata) for the uploaded file and stores the file in tenant specific s3 bucket and waits under staging folder.
Call this API after the file upload to the pre-signed URL completes successfully (PUT returns 200 OK).

**Endpoint**:

The url returned from Step 1 is the endpoint.

**Request**:
Send a PUT request with the file in **binary format**.

**Response**:

`HTTP 200 OK`

!!!Note
    Do not include Authorization header in the PUT call to the pre-signed URL.

***Step 3: UploadDocument (Submit document details)***

After PUT returns 200 OK, submit the document details to start processing.

**Endpoint**:

`/v1/models/idp`

**Request**:

Header:

- Authorization: Bearer <access_token>

```json

{
  "jobId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "documentType": "invoice",
  "sourceSystem": "xxxx",
  "referenceId": "xxxxxx",
  "batchId": "yyyyy",
  "version": 1,
  "versionIdentifier": "ORP_New",
}
```

|Parameter|Definition|Data Type|Required/Optional|
|:-|:-|:-|:-|
|jobId|Job identifier used in subsequent APIs such as UploadDocument, GetJobById, and GetJobData.|string|Required|
|documentType|Type of the document |string|Optional|
|sourceSystem|Source system from which the document originated |string|Optional|
|referenceId|External reference ID for cross-system tracking |string|Optional|
|batchId|Identifier if the document is part of a batch process |string|Optional|
|version|Version number of the document |string|Optional|
|versionIdentifier|Custom version identifier string |string|Optional|

**Response**:

`201 Created`

```json
{
    "jobId": "xxxxxx",
    "referenceId": "xxxxxx",
    "batchId": "xxxxxxx",
    "createdAt": "2025-08-18T13:39:09.157Z",
    "status": "QUEUED"
}
```
