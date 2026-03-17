> ### Auth Server Base URL (Cognito)

Use this base URL only for generating access tokens (TenantToken API):

`https://{User Pool ID}.auth.{Region}.amazoncognito.com/`

!!!Note
    Contact IDP team to get the User Pool ID and Region information.

> ### TenantToken API

**Purpose**:

Generates an OAuth 2.0 access token using Client Credentials. This token is required to authenticate requests to the IDP User APIs (for example: Get PreSign URL, UploadDocument, GetJobs, GetJobById, GetJobData).

**Endpoint**:
`oauth2/token`

**Request**:

Send a POST request to the endpoint given.

**Body (x-www-form-urlencoded)**:


Example format:

|Key|Value|
|-|-|
|grant_type|client_credentials|
|client_id|xxxxxxx|
|client_secret|xxxxxxx|

**Response**:

Success (200 OK)

```json
{
  "access_token": "xxxxxxxx",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

**Field notes**:

- access_token: Use this in subsequent API calls: 
    - Authorization: Bearer <access_token>
    
- expires_in: Token validity in seconds
- token_type: Bearer
