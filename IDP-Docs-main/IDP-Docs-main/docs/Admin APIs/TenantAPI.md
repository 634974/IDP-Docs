> ### Onboard Tenant API

**Purpose**  
Onboard a new tenant into the IDP platform. This API registers the tenant, initializes its associated projects, and sets up any common documents that the tenant can use across all projects.

---

**Endpoint**

`POST /v1/admin/tenant`

---

**Request**:

Send a POST request to the endpoint given.

**Headers**:

- Authorization: Bearer `<access_token>`

**Request Body**:

```json
{
  "id": "TestComDocu4",
  "name": "TestComDocu4",
  "dataRetentionPeriodInDays": 1,
  "projects": [
    {
      "id": "TestComDocu1",
      "name": "TestComDocu4"
    }
  ],
  "commonDocuments": ["Test"]
}

```

|Parameter|Definition|Data Type|Required/Optional|
|:-|:-|:-|:-|
|id|Unique identifier for the tenant|string|Required|
|name|Display name of the tenant|string|Required|
|dataRetentionPeriodInDays|Number of days to retain processed data|integer|Optional|
|projects|List of projects associated with the tenant|array|Required|
|&emsp;&emsp;&emsp;&emsp;id|Unique identifier for the project|string|Conditional|
|&emsp;&emsp;&emsp;&emsp;name|Display name of the project|string|Conditional|
|commonDocuments|List of common document types shared across tenant projects|array|Optional|

**Response**:

```json
{
    "tenantId": "xxxxxxx",
    "clientId": "xxxxxxxxxxxxxxx",
    "clientSecret": "xxxxxxxxxxxxxxxxxx"
}
```

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|403|User is not authorized to access this resource with an explicit deny in an identity-based policy|Update the access token.|
|400|Tenant already exists : xxxxxx|Tenant already exists.|
|400|Project already exists : xxxxx|Project already exists|
|400|Tenant xxxxxx has been onboarded, but Common Document: xxxxxxx does not exist|The `commonDocuments` mentioned does not exist.|
|400|Required parameter 'id' is missing|`id` is missing in the request body.|
|400|Required parameter 'name' is missing|`name` is missing in the request body.|
|400|Required parameter 'id' is missing in 'projects[0]'|If `projects` is given it is required to give `id` of that project.|



> ### Update Tenant API

**Purpose**  
Update an existing tenant's metadata or configuration details. This API allows administrators to modify tenant attributes such as name, retention settings, project details, and common documents.

---

**Endpoint**

`PATCH /v1/admin/tenant/update`

---

**Request**:

Send a PATCH request to the endpoint given.

**Headers**:

- Authorization: Bearer `<access_token>`

**Request Body**:

```json
{
  "id": "TestComDocu4",
  "name": "UpdatedTenantName",
  "dataRetentionPeriodInDays": 10,
  "projects": [
    {
      "id": "Proj001",
      "name": "UpdatedProjectName"
    }
  ],
  "commonDocuments": ["UpdatedDocType"]
}
```


|Parameter|Definition|Data Type|Required/Optional|
|-|-|-|-|
|id|Unique identifier of the tenant being updated|string|Required|
|name|Updated display name of the tenant|string|Required|
|dataRetentionPeriodInDays|Updated retention period for storing processed data|integer|Optional|
|projects|List of updated tenant projects|array|Required|
|&emsp;&emsp;&emsp;&emsp;id|Unique identifier of a project|string|Required|
|&emsp;&emsp;&emsp;&emsp;name|Updated project display name|string|Required|
|commonDocuments|Updated list of common document types shared across tenant projects|array|Optional|


**Response**:

```json
{
    "tenantId": "xxxxxxxx",
    "message": "Tenant details updated successfully"
}
```

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|404|Tenant does not exists : xxxxx, Please onboard it first to start using| Onboard the tenant first then i can be updated.|
|400|Required parameter 'id' is missing|`id` is missing in the request body.|
|400|Tenant name is required.|`name` is missing in the request body.|



> ### Update Tenant Credentials API

**Purpose**:

Update the client ID and secret for a specific tenant. This API will generate a new Client ID and secret for a tenant.

---

**Endpoint**:

`PATCH /v1/admin/tenant`

---

**Request**:

Sent a PATCH request to th endpoint given.

**Headers**:

- Authorization: Bearer <access_token>

**Request Body**:

```json
{
    "tenantId": "xxxxx",
    "clientId": "xxxxxx"
}
```

!!!note
    Include either tenant ID or Client ID in the request body.

|Parameter|Definition|Data Type|Required/Optional|
|-|-|-|-|
|tenantId|ID of the tenant for which the new client ID and secret to be generated.|string|Conditional|
|clientId| Client ID of the tenant.|string|Conditional|

**Response**:

```json
{
    "tenantId": "xxxxx",
    "clientId": "xxxxxxxxxxxxxxxxxxx",
    "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxx"
}
```


**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|Tenant doesn't exists for clientId: xxxxxx| Mentioned client ID does not have a tenant.|
|400|Tenant doesn't exists for specified tenantId: xxxxx| check the tenant ID given.|
|403|User is not authorized to access this resource with an explicit deny in an identity-based policy|Update the access token.|
|400|Error occured : Either tenantId or clientId is required|Either tenantId or clientId is required|

> ### Deboard Tenant API

**Purpose**:

Deactivate (temporarily disable) an existing tenant in the IDP platform. A deboarded tenant cannot process documents, onboard forms, or use IDP features until it is reboarded.

---

**Endpoint**:

`DELETE /v1/admin/tenant?tenantId={Tenant Id}`

---

**Request**:

Send a DELETE request to the endpoint given.

**Headers**:

- Authorization: Bearer <access_token>

**Query parameter**:

``tenantId``: The unique identifier of the tenant to be deboarded.

**Response**:

```json
{
    "message": "Tenant with ID InTest has been deboarded successfully.",
    "tenantId": "xxxxx"
}
```


**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|404|Tenant with ID xxxxx does not exist.|Check the tenant ID mentioned in the query parameter.|
|400|Tenant with ID xxxxxx is already deboarded.|The mentioned tenant ID is already deborded.|
|400|Error occured : Missing tenantId parameter|Tenant Id is not mentioned in the query parameter.|

> ### Reboard Tenant API

**Purpose**:

Reactivate a previously deboarded tenant. Once reboarded, the tenant regains full access to IDP services, including document processing, form configurations, and project operations. This API will generate a new client ID and Secret for the tenant.

---

**Endpoint**

`PATCH /v1/admin/tenant/reboard?tenantId={TenantId}`

---

**Request**:

Send a PATCH request to the endpoint given.

**Headers**:

- Authorization: Bearer `<access_token>`

**Query parameter**:

``tenantId``: The unique identifier of the tenant to be reboarded.

**Response**:

```json
{
    "tenantId": "xxxxx",
    "clientId": "xxxxxxxxxxxxxxxxxxx",
    "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

**Error Responses**


|HTTP Status|Message|Description|
|-|-|-|
|404|Tenant with ID xxxxx does not exist.|Check the tenant ID mentioned in the query parameter.|
|400|Tenant with ID xxxxxx is already in active state.|The mentioned tenant ID is already in active state.|
|400|Error occured : Missing tenantId parameter|Tenant Id is not mentioned in the query parameter.|
