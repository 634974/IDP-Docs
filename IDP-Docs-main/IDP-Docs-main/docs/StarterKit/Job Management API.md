Once the document is uploaded, check the job related apis to get more information about the job.

> ### Get Jobs API

**Purpose**:

   Retrieve a list of jobs created by the authenticated user or client. Supports optional query parameters for filtering (for example by date range, status, batch, etc.), along with pagination and sorting.

**Endpoint**:

`/v1/jobs`

**Request**:

Send a GET request to the end point given. Include the following in the request. 

   - Headers:
     - `Authorization`: Bearer <access_token>

**Optional query parameters**:

**How filtering works**: Any query parameter that is added to the endpoint URL is applied server-side.
If multiple query parameters are included, they are typically applied together (AND logic), meaning the job must satisfy all provided filters to appear in the response.

|Query parameter|Type|Description|Example|
|-|-|-|-|
|idType|string|Filters/targets results by the identifier type used by the service.|idType=referenceId|
|startDate|string (ISO 8601)|Filters jobs from this timestamp onward.|startDate=2025-03-21T13:18:47.132Z|
|toDate|string (ISO 8601)|Filters jobs up to this timestamp|toDate=2025-04-04T13:18:47.132Z|
|status|string|Filters by workflow/job status|status=completed|
|pageNum|integer|Page number for pagination.|pageNum=1|
|pageSize|integer|Number of records per page.|pageSize=10|
|sortBy|string|Field used to sort results|sortBy=ReferenceId|
|sortOrder|string|Sort order: asc or desc |sortOrder=desc|
|batchId|string|Filters jobs associated with a specific batch.|batchId=batch-id|
|tags|string|Filters jobs associated with a specific tag.|tags=project:IDP|


Example requests:

1. Get all jobs (no filter)
    
    `GET /v1/jobs`

2. Filter using a single parameter 


    `GET /v1/jobs?idType=referenceId`

3. Filter using multiple parameters


    `GET /v1/jobs?idType=referenceId&startDate=2025-03-21T13:18:47.132Z&toDate=2025-04-04T13:18:47.132Z&status=completed`


**Response**:

   Returns a paginated list of job objects with metadata for each job.
   
```json
   {
    "jobs": [
        {
            "jobId": "0057bbb4-99d1-498a-94b0-cb7e4dfed1a1",
            "fileName": "ORP_HW_SampleForm1.pdf",
            "referenceId": null,
            "batchId": null,
            "sourceSystem": null,
            "projectId": "MH_EF",
            "docTypeId": "ORP_MH",
            "languageCode": "en",
            "workflowStatus": "Error status",
            "needsReview": null,
            "tags": null,
            "uploadedAt": "2025-12-22T06:49:08Z",
            "updatedAt": null,
            "metrics": {
                "digitizingTime": null,
                "processingTime": null,
                "genAIInputTokens": 2758,
                "genAIOutputTokens": 86,
                "genAIModel": "anthropic.claude-3-7-sonnet-20250219-v1:0",
                "totalEditedShredCount": null,
                "totalFlaggedShredCount": null,
                "totalShredCount": null,
                "shredEditPercentage": 0,
                "textractMetrics": null
            }
        },
        {
            "jobId": "xxxxxxx",
            "fileName": "xxxxxxx.pdf",
            "referenceId": null,
            "batchId": null,
            "sourceSystem": null,
            "projectId": "xxxx",
            "docTypeId": "xxxxx",
            "languageCode": "en",
            "workflowStatus": "Ready for HITL",
            "needsReview": "Y",
            "tags": null,
            "uploadedAt": "2025-09-15T18:58:31Z",
            "updatedAt": null,
            "metrics": {
                "digitizingTime": 79,
                "processingTime": null,
                "genAIInputTokens": 7413,
                "genAIOutputTokens": 3131,
                "genAIModel": "anthropic.claude-3-5-sonnet-20240620-v1:0",
                "totalEditedShredCount": null,
                "totalFlaggedShredCount": null,
                "totalShredCount": 37,
                "shredEditPercentage": 0,
                "textractMetrics": {
                    "iterations": [
                        {
                            "features": [
                                "LAYOUT",
                                "FORMS"
                            ],
                            "iteration_no": 1
                        }
                    ]
                }
            }
        },
        // Additional Job entries...
    ],
    "pagination_metadata": {
        "pageNum": 1,
        "pageSize": 10,
        "totalCount": 1068,
        "totalPages": 107
    }
}
```


| Parameter | Definition |
|:-|:-|
| jobs | Array of job objects returned by the service |
| &emsp;&emsp;jobId | Unique identifier for the document processing job |
| &emsp;&emsp;fileName | Name of the source file processed in the job |
| &emsp;&emsp;referenceId | External reference ID for cross-system tracking  |
| &emsp;&emsp;batchId | Identifier if job was part of a batch process  |
| &emsp;&emsp;sourceSystem | Originating system name/id if provided  |
| &emsp;&emsp;projectId | Project or program identifier associated with the job |
| &emsp;&emsp;docTypeId | Document type identifier (e.g., ORP_MH) |
| &emsp;&emsp;languageCode | Language code of document content (e.g., en) |
| &emsp;&emsp;workflowStatus | Current workflow status (e.g., Error status, Ready for HITL) |
| &emsp;&emsp;needsReview | Indicates if manual review is required (Y/N or null) |
| &emsp;&emsp;tags | Optional tags associated with the job  |
| &emsp;&emsp;uploadedAt | Timestamp when the file was uploaded (ISO 8601 UTC) |
| &emsp;&emsp;updatedAt | Timestamp when the job was last updated  |
| &emsp;&emsp;metrics | Object containing processing metrics and model usage |
| &emsp;&emsp;&emsp;digitizingTime | Time (in seconds) spent in OCR/digitization  |
| &emsp;&emsp;&emsp;processingTime | Time (in seconds) spent in downstream processing  |
| &emsp;&emsp;&emsp;genAIInputTokens | Count of input tokens sent to GenAI model |
| &emsp;&emsp;&emsp;genAIOutputTokens | Count of output tokens generated by GenAI model |
| &emsp;&emsp;&emsp;genAIModel | Identifier of the GenAI model used (e.g., anthropic.claude-3-7-sonnet-20250219-v1:0) |
| &emsp;&emsp;&emsp;totalEditedShredCount | Number of extracted shreds (units of data) edited by reviewers  |
| &emsp;&emsp;&emsp;totalFlaggedShredCount | Number of shreds flagged for issues  |
| &emsp;&emsp;&emsp;totalShredCount | Total number of shreds extracted from the document  |
| &emsp;&emsp;&emsp;shredEditPercentage | Percentage of shreds edited (0–100) |
| &emsp;&emsp;&emsp;textractMetrics | Object with Textract-specific run metrics  |
| &emsp;&emsp;&emsp;&emsp;iterations | Array of Textract iterations executed |
| &emsp;&emsp;&emsp;&emsp;&emsp;features | Features enabled for the iteration (e.g., LAYOUT, FORMS) |
| &emsp;&emsp;&emsp;&emsp;&emsp;iteration_no | Iteration sequence number |
| pagination_metadata | Pagination information for the jobs list |
| &emsp;&emsp;pageNum | Current page number |
| &emsp;&emsp;pageSize | Number of records per page |
| &emsp;&emsp;totalCount | Total number of records available |
| &emsp;&emsp;totalPages | Total number of pages |


> ### Get Job by Job ID API

**Purpose**:

Retrieve detailed status and metadata for a specific job using its jobId.

**Endpoint**:

`/v1/jobs/{{jobId}}`

**Request**:

   Send a GET request to the endpoint given. Include the following in the request.

   - Header:
     - `Authorization`: Bearer <access_token>
   - Path parameter:
     - `jobId`: The job id for which the status is needed.

**Response**:

```json
{
    "jobId": "xxxxxxx",
    "fileName": "xxxxxx.pdf",
    "referenceId": null,
    "batchId": null,
    "sourceSystem": null,
    "projectId": "MH_EF",
    "docTypeId": "ORP_MH",
    "languageCode": "en",
    "workflowStatus": "Ready for HITL",
    "needsReview": "Y",
    "tags": null,
    "uploadedAt": "2026-01-07T06:09:03Z",
    "updatedAt": null,
    "metrics": {
        "digitizingTime": 179,
        "processingTime": null,
        "genAIInputTokens": 10229,
        "genAIOutputTokens": 4117,
        "genAIModel": "anthropic.claude-3-7-sonnet-20250219-v1:0",
        "totalEditedShredCount": 0,
        "totalFlaggedShredCount": null,
        "totalShredCount": 71,
        "textractMetrics": {
            "iterations": [
                {
                    "features": [
                        "LAYOUT",
                        "FORMS",
                        "QUERIES"
                    ],
                    "iteration_no": 1
                }
            ]
        }
    }
}
```

!!! note
    In the response, the current job status is returned in the `workflowStatus` field. Use the following definitions to interpret the value:

    - Queued - The document is in the queue for processing.
    - Classified - The document has been classified into a document type (for example: FRD, ORP, MP, etc.).
    - Ready for HITL - The job has entered a HITL condition and can be reviewed in the HITL UI.
    - HITL In Progress - A reviewer has opened the document and it is currently being reviewed/edited.
    - HITL Completed - The reviewer has submitted the document from the HITL UI.
    - HITL Rejected - The reviewer has rejected the document in the HITL UI.
    - Finalized State - The job did not enter HITL and was finalized via straight-through processing. Jobs in this state do not appear in the HITL UI.
    - ClassificationFailed - The document could not be classified into any supported document type.
    - Consumed - The Document is marked as Consumed and cannot be modified further.


    Polling behavior:

    If the job is still progressing (for example: Queued or Classified), call GetJobById again after some time to see the updated workflowStatus. Once the job reaches Ready for HITL / HITL In Progress / HITL Completed / HITL Rejected / Finalized State, subsequent calls will continue to return that same respective state unless your system transitions it further.

To know more about HITL, Refer to the [HITL Guide](../../HITL User Guide/Overview).

> ### Get Data API

   **Purpose**:

   Fetch the output data of a job. This API can be called after the job status is marked as Ready for HITL, HITL In Progress, HITL Completed, Finalized State.

**Endpoint**:

`/v1/jobs/{{jobId}}/data`

**Request**:

   Send a GET request to the endpoint given. Include the following in the request.

   - Header:
     - `Authorization`: Bearer <access_token>
   - Path parameter:
     - `jobId`: The job id for which the status is needed.

**Response**:

```json
{
    "document": {
        "jobId": "43dd3093-025b-47b3-b6af-2447aeaaf314",
        "textractjobId": [
            "b8eba8b2d548a14af4b04986f5ff458c77d03c3a8eeb5467573adfc20295f2f0"
        ],
        "tenantId": "MH",
        "caseId": "43dd3093-025b-47b3-b6af-2447aeaaf314",
        "referenceId": null,
        "sourceSystem": null,
        "batchId": null,
        "doctype": "ORP_MH",
        "type": ".PDF",
        "filename": "TestPreSign.pdf",
        "language": "en",
        "version": 16,
        "version_identifier": "Test",
        "groups": [
            {
                "group_name": "PROVIDER APPLICATION",
                "fields": [
                    {
                        "alias_name": "PROVIDER APPLICATION_APPLICATION TRACKING NUMBER (ATN)",
                        "name": "APPLICATION TRACKING NUMBER (ATN)",
                        "field_id": 28281,
                        "value": "",
                        "ocr_value": "",
                        "ocr_confidence_score": 0,
                        "field_threshold": 1,
                        "language_specific_name": "",
                        "order": "1",
                        "page_num": "1",
                        "required": "Y",
                        "feature_type": "FORMS",
                        "custom_field": false,
                        "field_type": "string",
                        "weightage": 0.8,
                        "default_bounded_box": {
                            "x": 0.761904761904762,
                            "y": 0.047222222222222214,
                            "width": 0.21203953279424972,
                            "height": 0.027777777777777776
                        },
                        "sub_fields": [],
                        "number_of_array_items": 0,
                        "transformations": [
                            {
                                "rule": "CURRENCY",
                                "code": "\ndef transform(amount: float) -> str:\n    return f\"${amount:,.2f}\"\n",
                                "custom_code": null
                            }
                        ],
                        "pre_transformation_value": "",
                        "transformation_applied": false,
                        "transformation_error": "Processing system error: Unknown format code 'f' for object of type 'str'",
                        "gen_ai_value": "",
                        "gen_ai_confidence_score": 0,
                        "idp_value": "",
                        "idp_confidence_score": 0,
                        "is_transformed": true,
                        "review_reason": "\nrule 2 - High weightage field, matching extraction, low accuracy history",
                        "validation": null,
                        "validations": [
                            {
                                "code": "MIN_LEN_VN",
                                "param": "20",
                                "valid": false,
                                "error_message": "Length must be greater than 20"
                            }
                        ]
                    },
                    {
                        "alias_name": "PROVIDER APPLICATION_Email",
                        "name": "Email",
                        "field_id": 28282,
                        "value": "xxxxxxx@maximus.com",
                        "ocr_value": "",
                        "ocr_confidence_score": 0,
                        "field_threshold": 1,
                        "language_specific_name": "",
                        "order": "4",
                        "page_num": "1",
                        "required": "Y",
                        "feature_type": "FORMS",
                        "custom_field": false,
                        "field_type": "string",
                        "weightage": 0.8,
                        "default_bounded_box": {
                            "x": 0.11320754716981132,
                            "y": 0.2284722222222222,
                            "width": 0.8203054806828393,
                            "height": 0.027083333333333338
                        },
                        "sub_fields": [],
                        "number_of_array_items": 0,
                        "transformations": [
                            {
                                "rule": "UPPERCASE",
                                "code": "\ndef transform(text: str) -> str:\n    return text.upper()",
                                "custom_code": null
                            }
                        ],
                        "pre_transformation_value": "xxxxxx@maximus.com",
                        "transformation_applied": true,
                        "transformation_error": "",
                        "gen_ai_value": "xxxxxx@maximus.com",
                        "gen_ai_confidence_score": 0.95,
                        "idp_value": "xxxxxxx@MAXIMUS.COM",
                        "idp_confidence_score": 0.95,
                        "is_transformed": true,
                        "review_reason": "\nrule 1 - High weightage field, different extraction, low accuracy history",
                        "validation": null
                    }
                ]
            }
            // Additional details...
        ],
        "document_accuracy_criteria_passed": false,
        "validation_passed": false,
        "review_needed": false
    }
}
```



| Parameter | Definition |
|:-|:-|
| document | Object containing document details |
| &emsp;&emsp;jobId | Unique identifier for the document processing job |
| &emsp;&emsp;textractjobId | Array of Textract Job IDs used for OCR processing |
| &emsp;&emsp;tenantId | Identifier for the tenant or organization |
| &emsp;&emsp;caseId | Unique identifier for the case associated with the document |
| &emsp;&emsp;referenceId | External reference ID, if provided |
| &emsp;&emsp;sourceSystem | Source system from which the document originated |
| &emsp;&emsp;batchId | Identifier for the batch if processed in bulk |
| &emsp;&emsp;doctype | Document type code (e.g., ORP_MH) |
| &emsp;&emsp;type | File type (e.g., .PDF) |
| &emsp;&emsp;filename | Name of the uploaded file |
| &emsp;&emsp;language | Language code of the document content |
| &emsp;&emsp;version | Version number of the document |
| &emsp;&emsp;version_identifier | Custom version identifier string |
| &emsp;&emsp;groups | Array of logical groups of fields in the document |
| &emsp;&emsp;&emsp;group_name | Name of the group (e.g., PROVIDER APPLICATION) |
| &emsp;&emsp;&emsp;fields | Array of extracted fields within the group |
| &emsp;&emsp;&emsp;&emsp;alias_name | Alias or descriptive name for the field |
| &emsp;&emsp;&emsp;&emsp;name | Actual name of the field |
| &emsp;&emsp;&emsp;&emsp;field_id | Unique identifier for the field |
| &emsp;&emsp;&emsp;&emsp;value | Final extracted or transformed value |
| &emsp;&emsp;&emsp;&emsp;ocr_value | Value extracted by OCR |
| &emsp;&emsp;&emsp;&emsp;ocr_confidence_score | Confidence score of OCR extraction |
| &emsp;&emsp;&emsp;&emsp;field_threshold | Minimum confidence threshold for the field |
| &emsp;&emsp;&emsp;&emsp;language_specific_name | Field name in a specific language |
| &emsp;&emsp;&emsp;&emsp;order | Display or processing order of the field |
| &emsp;&emsp;&emsp;&emsp;page_num | Page number where the field appears |
| &emsp;&emsp;&emsp;&emsp;required | Indicates if the field is mandatory (Y/N) |
| &emsp;&emsp;&emsp;&emsp;feature_type | Feature type used for extraction (e.g., FORMS, Queries) |
| &emsp;&emsp;&emsp;&emsp;custom_field | Boolean indicating if the field is custom |
| &emsp;&emsp;&emsp;&emsp;field_type | Data type of the field (e.g., string) |
| &emsp;&emsp;&emsp;&emsp;weightage | Importance score of the field |
| &emsp;&emsp;&emsp;&emsp;default_bounded_box | Object containing bounding box details for field location |
| &emsp;&emsp;&emsp;&emsp;&emsp;x | X-coordinate of bounding box |
| &emsp;&emsp;&emsp;&emsp;&emsp;y | Y-coordinate of bounding box |
| &emsp;&emsp;&emsp;&emsp;&emsp;width | Width of bounding box |
| &emsp;&emsp;&emsp;&emsp;&emsp;height | Height of bounding box |
| &emsp;&emsp;&emsp;&emsp;sub_fields | Array of sub-fields if the field contains nested data |
| &emsp;&emsp;&emsp;&emsp;number_of_array_items | Number of items if the field is an array |
| &emsp;&emsp;&emsp;&emsp;transformations | Array of transformation rules applied to the field |
| &emsp;&emsp;&emsp;&emsp;&emsp;rule | Name of the transformation rule (e.g., UPPERCASE) |
| &emsp;&emsp;&emsp;&emsp;&emsp;code | Code snippet for transformation logic |
| &emsp;&emsp;&emsp;&emsp;&emsp;custom_code | Custom transformation code if provided |
| &emsp;&emsp;&emsp;&emsp;pre_transformation_value | Original value before transformation |
| &emsp;&emsp;&emsp;&emsp;transformation_applied | Boolean indicating if transformation was applied |
| &emsp;&emsp;&emsp;&emsp;transformation_error | Error message if transformation failed |
| &emsp;&emsp;&emsp;&emsp;gen_ai_value | Value suggested by GenAI |
| &emsp;&emsp;&emsp;&emsp;gen_ai_confidence_score | Confidence score of GenAI suggestion |
| &emsp;&emsp;&emsp;&emsp;idp_value | Value suggested by IDP engine |
| &emsp;&emsp;&emsp;&emsp;idp_confidence_score | Confidence score of IDP suggestion |
| &emsp;&emsp;&emsp;&emsp;is_transformed | Indicates if the field value is transformed |
| &emsp;&emsp;&emsp;&emsp;review_reason | Reason why the field needs review |
| &emsp;&emsp;&emsp;&emsp;validation | Validation status or rule applied |
| &emsp;&emsp;&emsp;&emsp;validations | Array of validation rules applied to the field |
| &emsp;&emsp;&emsp;&emsp;&emsp;code | Validation rule code |
| &emsp;&emsp;&emsp;&emsp;&emsp;param | Parameter for validation rule |
| &emsp;&emsp;&emsp;&emsp;&emsp;valid | Boolean indicating if validation passed |
| &emsp;&emsp;&emsp;&emsp;&emsp;error_message | Error message if validation failed |
| &emsp;&emsp;document_accuracy_criteria_passed | Indicates if document accuracy criteria passed |
| &emsp;&emsp;validation_passed | Indicates if all validations passed |
| &emsp;&emsp;review_needed | Indicates if document needs manual review |



> ### Consumed Job API

   **Purpose**:

   Marks a job as consumed, which indicates that all data has been extracted and no more changes are required for the document.
After a job is consumed, the job has been finished processing and no further action needed.

**Endpoint**:

`/v1/jobs/{{jobId}}/consumed`

**Request**:

   Send a POST request to the endpoint given. Include the following in the request.

   - Header:
     - `Authorization`: Bearer <access_token>
   - Path parameter:
     - `jobId`: The job id for which the status to be marked as consumed.

**Response**:

```json
{
  "message": "Document consumed successfully",
  "jobId": "43dd3093-025b-47b3-b6af-2447aeaaf314"
}
```

!!! Note
    - To retrieve **consumed jobs** using the **Get Jobs API**, you must include a filter or query parameter for consumed status.
    - If consumed is **not specified**, the API will **exclude consumed jobs by default**.