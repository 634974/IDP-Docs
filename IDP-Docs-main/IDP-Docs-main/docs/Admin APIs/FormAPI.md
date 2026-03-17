> ### Onboard Form API

**Purpose**:

Onboards a new **form configuration** (FormConfig) for a specific `tenantId` and `docTypeId` in the IDP platform.  
Use this API to:

- create a new form configuration for a doc type under a tenant/project
- define extraction settings (Textract feature types, flags like fields/tables/queries/signatures)
- define language mappings, fields, queries, validations, transformations, and GenAI configuration (if applicable)

---

**Endpoint**:

`POST /v1/admin/forms`

---

**Request**

**Headers**

- `Authorization: Bearer <access_token>`


**Request Body**

Send a POST request to the endpoint given.

!!!Note
    The `id` field in the request body represents the **Doc Type ID** (same value you use as `docTypeId` in other APIs).

**Request body (example — truncated for readability)**

```json
{
  "id": "NEW_COMMON_SHARED",
  "tenantId": "SHARED",
  "projectId": "SHARED",
  "name": "ComDoc04",
  "version": 16,
  "versionIdentifier": "",
  "active": "Y",
  "description": "A Massachusetts state form for enrolling providers who do not submit claims to MassHealth but whose ",
  "outputLocation": "",
  "crossAcRole": "",
  "allText": "Y",
  "fields": "Y",
  "tables": "N",
  "signatures": "N",
  "queries": "Y",
  "textractFeatureTypes": ["LAYOUT", "FORMS", "QUERIES"],
  "customQueries": "N",
  "genAIPrompts": "N",
  "numberOfPages": 6,
  "adapterARN": "",
  "dynamicFields": "N",
  "genAIPreProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "genAIPostProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "genAIProcessingEngine": "bedrock",
  "documentCountForHistoricAccuracy": 10,
  "bypassOCR": "N",
  "docTypeLanguageMapping": [
    {
      "docTypeId": "ORP_MH",
      "languageCode": "en",
      "genAIClassificationName": "Nonbilling Provider (Ordering, Referring, and Prescribing Providers)"
    }
  ],
  "docTypeFields": [
    {
      "...": "field related data"
    }
  ]
}
```
**Request Parameters**

| Parameter | Description | Data Type | Required/Optional |
|---|---|---|---|
| id | Doc Type ID (identifier for the form configuration) | string | Required |
| tenantId | Tenant identifier | string | Required |
| projectId | Project identifier associated with the tenant | string | Required |
| name | Display name of the form/doc type | string | Required |
| version | Version number of the configuration | integer | Optional |
| versionIdentifier | Version identifier string (if used in your environment) | string | Optional |
| active | Whether this configuration is active (`Y`/`N`) | string | Required |
| description | Description of the form/doc type | string | Optional |
| outputLocation | Output storage/export location (if applicable) | string | Optional |
| crossAcRole | Cross-account role (if applicable) | string | Optional |
| allText | Enable full text extraction (`Y`/`N`) | string | Optional |
| fields | Enable field extraction (`Y`/`N`) | string | Optional |
| tables | Enable table extraction (`Y`/`N`) | string | Optional |
| signatures | Enable signature extraction (`Y`/`N`) | string | Optional |
| queries | Enable query-based extraction (`Y`/`N`) | string | Optional |
| textractFeatureTypes | Textract feature types enabled for this doc type | array | Optional |
| customQueries | Whether custom queries are enabled (`Y`/`N`) | string | Optional |
| genAIPrompts | Whether GenAI prompts are enabled (`Y`/`N`) | string | Optional |
| numberOfPages | Expected number of pages (if known) | integer | Optional |
| adapterARN | Adapter ARN (if applicable) | string | Optional |
| dynamicFields | Whether dynamic fields are enabled (`Y`/`N`) | string | Optional |
| genAIPreProcessingModelId | Model ID used for GenAI preprocessing | string | Optional |
| genAIPostProcessingModelId | Model ID used for GenAI postprocessing | string | Optional |
| genAIProcessingEngine | GenAI engine name (for example, `bedrock`) | string | Optional |
| documentCountForHistoricAccuracy | Historic accuracy sample size | integer | Optional |
| bypassOCR | Whether OCR is bypassed (`Y`/`N`) | string | Optional |
| docTypeLanguageMapping | Language mappings for the doc type | array | Optional |
| &emsp;&emsp;&emsp;&emsp;docTypeId | Doc Type ID for the language mapping | string | Conditional|
| &emsp;&emsp;&emsp;&emsp;languageCode | Language code (for example, `en`) | string | Conditional |
| &emsp;&emsp;&emsp;&emsp;genAIClassificationName | Classification label used for language | string | Optional |
| docTypeFields | Field definitions for extraction (fields, queries, validations, transformations) | array | Required |

**Response**
```json
{ "message": "Form onboarded successfully",
  "docTypeId": "ORP"
}
```

> ### Get FormConfig API

**Purpose**:

Retrieves the Form Configuration (FormConfig) for a given **Doc Type** and **Tenant**. Use this API to:

- fetch the configuration for the **currently configured** doc type under a tenant
- fetch the configuration for a **specific version** using `versionIdentifier`
- list **all available versions** of the configuration when `versionIdentifier` is not provided

---


**Endpoint**

`GET /v1/admin/formsConfig?docTypeId={docTypeId}&tenantId={tenantId}`

**Optional query parameter:**  

`versionIdentifier={versionIdentifier}`

**Example endpoint**

`GET /v1/admin/formsConfig?docTypeId=PHOTOID_SHARED&tenantId=SHARED`

**Example endpoint (specific version)**

`GET /v1/admin/formsConfig?docTypeId=PHOTOID_SHARED&tenantId=SHARED&versionIdentifier=PHOTOID_SHARED01`

---


**Request**:

Send a GET request to the endpoint given.

**Header**:

- `Authorization: Bearer <access_token>`

**Query Parameters**:

| Parameter | Description | Type | Required/Optional |
|---|---|---|---|
| `docTypeId` | Unique identifier of the Doc Type | string | Required |
| `tenantId` | Unique identifier of the tenant | string | Required |
| `versionIdentifier` | Identifier for a specific version of the Doc Type configuration | string | Optional |

---

**Response**:

***Case 1: versionIdentifier is provided (returns a specific configuration)***

When `versionIdentifier` is included, the API returns the `FormConfig` object for that exact version.

```json
{
  "id": "PHOTOID_SHARED",
  "tenantId": "xxxxx",
  "projectId": "xxxxx",
  "name": "DL",
  "version": 1,
  "versionIdentifier": "PHOTOID_SHARED01",
  "active": "Y",
  "description": "Drivers License card",
  "outputLocation": "",
  "crossAcRole": "",
  "allText": "Y",
  "fields": "Y",
  "tables": "N",
  "signatures": "Y",
  "queries": "Y",
  "textractFeatureTypes": [
    "LAYOUT",
    "FORMS",
    "QUERIES",
    "SIGNATURES"
  ],
  "customQueries": "N",
  "genAIPrompts": "N",
  "numberOfPages": null,
  "adapterARN": "",
  "dynamicFields": "N",
  "genAIPreProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "genAIPostProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "genAIProcessingEngine": "bedrock",
  "documentCountForHistoricAccuracy": 10,
  "createdBy": null,
  "createdTs": "2026-01-18T05:58:34Z",
  "updatedBy": 48,
  "updatedTs": "2026-01-27T06:59:34Z",
  "bypassOCR": "Y",
  "docTypeLanguageMapping": [
    {
      "id": "PHOTOID_SHARED_EN_912",
      "docTypeId": "PHOTOID_SHARED",
      "languageCode": "en",
      "genAIClassificationName": "English Photo ID card",
      "createdBy": null,
      "createdTs": "2026-01-18T16:41:19Z",
      "updatedBy": null,
      "updatedTs": "2026-01-18T16:41:19Z"
    }
  ],
  "docTypeFields": [
    {
      "id": 34127,
      "docTypeId": "PHOTOID_SHARED",
      "fieldName": "Name",
      "fieldType": "string",
      "defaultValue": null,
      "required": null,
      "validationId": null,
      "outputGroupName": "PHOTOID_SHARED",
      "pageNum": 1,
      "dynamic": null,
      "orderNum": null,
      "weightage": 0.5,
      "createdBy": null,
      "createdTs": "2026-01-18T16:41:19Z",
      "updatedBy": null,
      "updatedTs": "2026-01-18T16:41:19Z",
      "parentFieldID": null,
      "validations": [],
      "transformations": [],
      "docTypeQueries": [
        {
          "id": 34357,
          "docTypeId": "PHOTOID_SHARED",
          "docTypeFieldId": 34127,
          "languageCode": "en",
          "query": "Name",
          "pageNum": 1,
          "alias": "Name",
          "defaultBBox": null,
          "isFieldQuery": null,
          "dynamic": null,
          "dynamicKey": null,
          "queryType": "Bedrock Query",
          "stpThreshold": 1.0,
          "active": "Y",
          "createdBy": null,
          "createdTs": "2026-01-18T16:41:20Z",
          "updatedBy": null,
          "updatedTs": "2026-01-18T16:41:20Z"
        }
      ],
      "childFields": []
    }
  ]
}
```

***Case 2: versionIdentifier is NOT provided (returns versions[])***

When versionIdentifier is not included, the API returns a top-level versions array.

```json
{
  "versions": [
    {
      "id": "PHOTOID_SHARED",
      "tenantId": "xxxx",
      "projectId": "xxxxx",
      "name": "DL",
      "version": 1,
      "versionIdentifier": "PHOTOID_SHARED01",
      "active": "Y",
      "description": "Drivers License card",
      "textractFeatureTypes": ["LAYOUT", "FORMS", "QUERIES", "SIGNATURES"],
      "docTypeLanguageMapping": [
        {
          "id": "PHOTOID_SHARED_EN_912",
          "docTypeId": "PHOTOID_SHARED",
          "languageCode": "en",
          "genAIClassificationName": "English Photo ID card"
        }
      ],
      "docTypeFields": [
        {
          "id": 34127,
          "docTypeId": "PHOTOID_SHARED",
          "fieldName": "Name",
          "fieldType": "string",
          "pageNum": 1
        }
      ]
    },
    {
      "id": "PHOTOID_SHARED",
      "tenantId": "xxxxx",
      "projectId": "xxxx",
      "name": "DL",
      "version": 2,
      "versionIdentifier": "PHOTOID_SHARED02",
      "active": "N",
      "description": "Drivers License card - updated queries",
      "textractFeatureTypes": ["LAYOUT", "FORMS", "QUERIES", "SIGNATURES"]
    }
  ]
}
```

!!!note
    - `docTypeId` and `tenantId` are required in all requests.
    - If `versionIdentifier` is provided, the API returns only that version’s `FormConfig`.
    - If `versionIdentifier` is not provided, the API returns a versions array containing one or more versions (or an empty list if none exist).
    - The `active` flag indicates whether a configuration version is currently enabled (for example, "Y" or "N").


**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|Error occured : Missing tenantId parameter|Tenant Id is missing in query parameter.|
|403|User is not authorized to access this resource with an explicit deny in an identity-based policy|Update the access token.|
|400|Error occured : Missing docTypeId parameter|docTypeId is missing in query parameter.|
|404|No record found for the version identifier xxxxxxx| Version Identifier mentioned is not present in database. Check the version Identifier.|


> ### Update FormConfig API

**Purpose**

Updates an existing FormConfig for a given **Doc Type** and **Tenant** by creating a **new version** of the configuration.

A common workflow is:

1. Call **Get FormConfig API** to fetch the latest configuration for a `docTypeId` + `tenantId`.
2. Use the returned JSON as the request body for this API.
3. Modify only the fields you want to change (for example: prompts, feature flags, field/query definitions, activation state).
4. Send the updated JSON to **Update FormConfig API**.
5. The platform saves the changes as a **new version** and returns the new `versionId`.

---

**Endpoint**

`PATCH /v1/admin/formsConfig`

---

**Request**:

Send a PATCH request to the endpoint given.

**Headers**:

- `Authorization: Bearer <access_token>`


**Body**:

Send the **FormConfig object** you want to update as the request body.

> **Recommended approach**  

> Use the response from **Get FormConfig API** as your base payload, update the required fields, and then submit it to this endpoint.

**Body (example – structure only, truncated for readability)**

```json
{
  "id": "FRDF_MH",
  "tenantId": "xxxxx",
  "projectId": "xxxxxx",
  "name": "Form Name",
  "description": "Updated description",
  "active": "Y",
  "textractFeatureTypes": ["FORMS", "QUERIES", "SIGNATURES", "LAYOUT"],
  "bypassOCR": "Y",
  "dynamicFields": "N",
  "genAIProcessingEngine": "bedrock",
  "genAIPreProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "genAIPostProcessingModelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "docTypeLanguageMapping": [
    {
      "languageCode": "en",
      "genAIClassificationName": "English classification name"
    }
  ],
  "docTypeFields": [
    {
      "fieldName": "Name",
      "fieldType": "string",
      "pageNum": 1,
      "docTypeQueries": [
        {
          "query": "Name",
          "alias": "Name",
          "queryType": "Bedrock Query",
          "active": "Y"
        }
      ]
    }
  ]
}
```

**Response**:

```json
{
  "message": "Form updated successfully with new version",
  "docTypeId": "FRDF_MH",
  "versionId": 1069
}
```

!!!note
    - Updating a FormConfig creates a new version rather than modifying the existing version in place.
    - If multiple versions exist, use the Get FormConfig API to identify the version you want to reference and confirm which one is active.

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|DocType xxxxx does not exist|Check the Doc Type.|




> ### Revert FormConfig API

**Purpose**:

Reverts a FormConfig to a **previously created version** for a given `tenantId` and `docTypeId`.  
Use this API when you need to roll back configuration changes (for example, fields/queries/prompts/feature flags) to a known stable version.

> **Typical rollback workflow**

> 1. Use **Get FormConfig API** (without `versionIdentifier`) to view available versions.
> 2. Identify the `version` (and/or `versionIdentifier`) you want to restore.
> 3. Call **Revert FormConfig API** with the target version details.
> 4. Verify using **Get FormConfig API** after the revert.

---

**Endpoint**:

`PATCH /v1/admin/formsConfig/revert`


---

**Request**

Send a PATCH request to the endpoint given.

**Headers**

- `Authorization: Bearer <access_token>`


**Request Body (example)**:

```json
{
  "tenantId": "xxxxx",
  "docTypeId": "PHOTOID_SHARED",
  "version": 3,
  "versionIdentifier": "PHOTOID_SHARED"
}
```

**Response**

```json
{
  "tenantId": "xxxxx",
  "docTypeId": "PHOTOID_SHARED",
  "version": 3,
  "versionIdentifier": "PHOTOID_SHARED"
}
```

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|Error occured : Version x for docTypeId xxxxxx is not available|Check the version mentioned in the body.|
|400|Error: docTypeId xxxx is a common document. tenant_id xxxxx cannot revert common documents.||
|400|Error occured : docTypeId xxxx does not exists|DocType mentioned does not exist.|

> ### FormExport API

**Purpose**

The FormExport API allows Admin users to export full configuration details of all document types (forms) associated with a tenant.

It supports three export modes:

1. Export all doc types for the tenant — if no docTypes are provided.
2. Export specific doc types — when docTypes list contains only docTypeId.
3. Export a specific version of a doc type — when both docTypeId and versionIdentifier are provided.

---

**Endpoint**:

`POST /v1/admin/forms/export`

---

**Request**:

Send a POST request to the endpoint given.

- Use `Send and Download` option in the postman to download the JSON file at your desired location.
    
    ![send and download](../Admin%20APIs/Admin/Postman/send%20and%20download.png)

**Headers**

- `Authorization: Bearer <access_token>`


**Request Body (example)**

```json
{
  "tenantId": "MH",
  "docTypes": [
    { "docTypeId": "ORP_MH", "versionIdentifier": "Test-2" },
    { "docTypeId": "FRDF_MH" }
  ]
}
```

| Parameter | Description | Data Type | Required/Optional |
|---|---|---|---|
|tenantId|Tenant identifier whose forms must be exported.|string|Required|
|docTypes|List of document types to export. If omitted, exports all doc types.|array|Optional|
|&emsp;&emsp;&emsp;&emsp;docTypeId|The document type ID (e.g., FRDF_MH).|string|Optional|
|&emsp;&emsp;&emsp;&emsp;versionIdentifier|If provided, exports that specific version only.|string|Optional|


**Error Responses**:

|HTTP Status|Message|Description|
|-|-|-|
|400|Required parameter 'tenantId' is missing| Include `tenantId` in the request body.|
|404|Tenant with ID xxxxxxx does not exist.|Check the tenant ID given.|


> ### ImportForm API

**Purpose**:

The ImportForm API imports form configurations into a tenant. 

It accepts:

- Binary file (exported JSON)

---

**Endpoint**:

`POST /v1/admin/forms/import?tenantId=<tenantId>`

---

**Request**:

Send a POST request to the endpoint given.

**Headers**

- `Authorization: Bearer <access_token>`


**Request Body (example)**

**Binary Upload (multipart/form-data)**:

![upload](../Admin%20APIs/Admin/Postman/Uploadfile/1.png)


**Response**:

```json
{
    "message": "Forms imported successfully",
    "importedCount": 4
}
```

**Error Responses**:

|HTTP Status|Message|Description|
|-|-|-|
|400|Missing request body| Include the request body.|
|400|Error parsing JSON data - Expecting value: line 1 column 1 (char 0)|The JSON file provided is incorrect. Check it.|
|404|Tenant with ID xxxxxxx does not exist.| The provided tenant id does not exist.|

> ### Offboard Form API

**Purpose**

Offboards (removes/deactivates) a form configuration for a specific **Doc Type** under a given **Tenant**.  
After offboarding, the tenant can no longer use the offboarded `docTypeId` for form-based configuration and related IDP operations (for example, processing documents using that form config).

---

**Endpoint**:

`DELETE /v1/admin/forms`

---

**Request**:

Send a DELETE request to the endpoint given.

**Headers**

- `Authorization: Bearer <access_token>`


**Request Body (example)**

```json
{
  "docTypeId": "ORP_MH",
  "tenantId": "xxxxx"
}
```

**Response**:

```json
{
  "data": {
    "docTypeId": "ORP_MH",
    "tenantId": "xxxxxx"
  },
  "message": "ORP_MH has been offboarded successfully"
}
```

**Error Responses**:

|HTTP Status|Message|Description|
|-|-|-|
|400|Error occured : docTypeId is required|docTypeId required in the request body|
|400|Error occured : tenantId is required|tenantId required in the request body|
|400|Access not found for docTypeId: xxxxx and tenantId: xxxxx| The docTypeId is not associated with the mentioned Tenant id.|
|400|docTypeId: xxxxx is already in inactive state for tenantId: xxxx|The docTypeId is already in inactive state for the mentioned tenantId|
|400|docTypeId: xxxxx does not exist under the shared tenant|Mentioned docTypeId does not exist.|

### Reboard Form API

**Purpose**:

Reboards (reactivates) a previously offboarded form for a specific **Doc Type** under a given **Tenant**.  
After reboarding, the form becomes available again for tenant operations such as configuration retrieval and document processing (based on your platform behavior).

> **Typical workflow**

> 1. Offboard the form using **Offboard Form API** (DELETE `/v1/admin/forms`)
> 2. Re-enable it later using **Reboard Form API** (PATCH `/v1/admin/forms`)
> 3. Verify reboarding by calling **Get FormConfig API** for the same `docTypeId` + `tenantId`

---

**Endpoint**:

`PATCH /v1/admin/forms`

---

**Request**

**Headers**:

- `Authorization: Bearer <access_token>`


**Request Body (example)**:

```json
{
  "docTypeId": "PASSPORT_SHARED",
  "tenantId": "xxxxx"
}
```

Optional fields:

`version` (integer): Use to reboard a specific version.
`versionIdentifier` (string): Use to reboard a specific version identifier.

| Parameter | Description | Type | Required/Optional |
|---|---|---|---|
|docTypeId|Doc Type identifier of the form to reboard|string|Required|
|tenantId|Tenant identifier where the form should be re-enabled|string|Required|
|version|Version number to reboard|integer|Optional|
|versionIdentifier|Version identifier to reboard |string|Optional|

**Response**:

```json
{
  "data": {
    "docTypeId": "PASSPORT_SHARED",
    "tenantId": "xxxxxxx"
  },
  "message": "PASSPORT_SHARED has been reboarded successfully"
}
```

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|docTypeId: xxxxx does not exist under the shared tenant|Mentioned docTypeId does not exist.|
|400|tenantId: xxxx does not exists| The tenant ID mentioned does not exist.|
|400|docTypeId is required|docTypeId required in the request body|
|400|tenantId is required|tenantId required in the request body|