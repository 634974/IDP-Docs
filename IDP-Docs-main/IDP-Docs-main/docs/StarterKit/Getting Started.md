To use IDP, these are the steps you need to follow. Each step ensures that your tenant is authenticated, your environment is set up, and your documents can be uploaded and processed correctly.

### 1. Get The Tenant Credentials

Before you can call any IDP API, you must obtain your tenant-level credentials from the platform admin.
You will receive:

- clientId
- clientSecret

### 2. Access the IDP HITL Portal

You cannot log in to the HITL portal until your user account is explicitly approved for HITL access.
To get HITL access:

Contact the platform admin or onboarding team.
Provide:

- Your Maximus‑associated email address

The admin will update the configuration to:

- Add you as a HITL user
- Grant the appropriate HITL reviewer permissions

Once approved, you will be able to sign in to the HITL portal.

**HITL Portal Includes:**

- Review – Validate extracted information
- Reject – View rejected tasks and reasons
- Reports – Dashboards, AI metrics, pricing, glossary
- Admin – Configure doc types, dynamic fields, Textract features, preprocessing and postprocessing queries

Sign in using your corporate SSO.

To know more about HITL, Refer to the [HITL Guide](../../HITL User Guide/Overview).

---

### Make API Calls in Postman

Once your token and environment are ready, you can make your first IDP API calls.

**Step 1 - User obtains client credentials from the admin**

![Tenant Token](../HITL%20User%20Guide/UI%20Screens/postman/tanent%20token.png)

**Step 2 - Get PreSigned URL**

![PreSign URL](../HITL%20User%20Guide/UI%20Screens/postman/presign.png)

**Step 3 - Upload the Document to the PreSigned URL**

![Upload the Document to the PreSigned URL](../HITL%20User%20Guide/UI%20Screens/postman/Submit%20Document%20Metadata.png)

**Step 4 - Submit Document Metadata**

![Submit Document Metadata](../HITL%20User%20Guide/UI%20Screens/postman/Submit%20Document%20Metadata%202.png)

**Step 5 - Check Job Status**

![Check Job Status](../HITL%20User%20Guide/UI%20Screens/postman/Check%20Job%20Status.png)

!!!note
    To know more about job status, refer [Get Job by Job ID](Job%20Management%20API.md/#get-job-by-job-id-api)

**Step 6 - Retrieve Extracted Data**

![Retrieve Extracted Data](../HITL%20User%20Guide/UI%20Screens/postman/Retrieve%20Extracted%20Data.png)

**Step 7 - Mark the job as Consumed**

![Consumed](../HITL%20User%20Guide/UI%20Screens/postman/Consumed.png)