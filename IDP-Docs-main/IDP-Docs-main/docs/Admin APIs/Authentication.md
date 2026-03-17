Authentication for IDP Admin APIs is performed using an **OAuth-based access token**. All administrative operations—such as onboarding tenants, managing forms, or updating configuration—require a valid admin token to ensure only authorized users can perform these sensitive actions.

To obtain this token, administrators must use the Generate New Token option available under the OAuth section of the platform. This process issues a short‑lived bearer token, which must be included in the Authorization header for every Admin API request.

The created token is valid for 3600s(1 hour).

Endpoint: POST `https://cognito-idp.us-east-1.amazonaws.com`

### How to Generate an Admin Access Token

1. Open Postman and select the AdminToken request.
2. Go to the Authorization tab.
3. In the OAuth section, click **Get New Access Token**.

    ![accesstoken](../Admin%20APIs/Admin/Postman/generate%20access%20token.png)

4. Click **MicrosoftEntraIDSAML** to open SSO and signin using your Email Id and Password.

    ![SSO](../Admin%20APIs/Admin/Postman/SSO.png)

5. After successful login, the tool automatically generates a new access token.

    ![token](../Admin%20APIs/Admin/Postman/accesstoken.png)

6. Click **Use Token**.
7. Select **ID** from the drop-down of **Use Token Type**.

    ![ID](../Admin%20APIs/Admin/Postman/select%20ID%20token.png)

8. Copy the Bearer token and use it to authenticate other APIs.

    ![PW](../Admin%20APIs/Admin/Postman/copy%20the%20pw.png)

Once the token is active, all Admin API endpoints—such as onboarding tenants, configuring forms, exporting/importing configurations, or validating user access—become accessible.