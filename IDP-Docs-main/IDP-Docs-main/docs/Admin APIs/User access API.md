> ### Onboard Tenant API

**Purpose**  
Grants one or more users access to a specific tenant so they can view documents and dashboards in the HITL portal for that tenant.

---

**Endpoint**

`POST /v1/admin/tenant/users`

---

**Request**:

Send a POST request to the endpoint given.

**Headers**:

- Authorization: Bearer `<access_token>`

**Request Body**:

```json
{
  "users": [
    {
      "email": "xxxxxxxxx@maximus.com",
      "userRole": "AD",
      "tenantId": "NJ"
    },
    {
      "email": "yyyyyyyyy@maximus.com",
      "userRole": "AD",
      "tenantId": "NJ"
    }
  ]
}


```

|Parameter|Definition|Data Type|Required/Optional|
|:-|:-|:-|:-|
|users|List of user‑tenant mappings to grant.|array|Required|
|&emsp;&emsp;&emsp;&emsp;email|User’s email (login) to grant access.|string|Required|
|&emsp;&emsp;&emsp;&emsp;userRole|Role to assign (e.g., AD).|string |Required|
|&emsp;&emsp;&emsp;&emsp;tenantId|Target tenant identifier (e.g., NJ).|string |Required|


**Response**:

```json
[
  {
    "email": "xxxxxxxx@maximus.com",
    "access": "grant",
    "message": "NJ access granted to xxxxxxxx@maximus.com",
    "createdAt": "2025-09-04T07:41:56Z",
    "updatedAt": "2026-02-23T18:38:15Z"
  },
  {
    "email": "yyyyyy@maximus.com",
    "access": "grant",
    "message": "NJ access granted to yyyyyy@maximus.com",
    "createdAt": "2025-07-29T06:24:47Z",
    "updatedAt": "2026-02-23T18:38:15Z"
  }
]
```

**Error Responses**

|HTTP Status|Message|Description|
|-|-|-|
|400|Required parameter 'email' is missing in 'users[x]'|Include the email for the user number x.|
