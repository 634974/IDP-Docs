
1. I’m getting `401`/`403` on Admin APIs. What’s the most common cause?  
   *Most commonly: missing/expired token or the caller does not have the required admin role/permissions. Ensure you are using an admin-scoped access token with appropriate RBAC.*

2. What is the safest workflow to update a FormConfig?  
   *Fetch the latest config using **Get FormConfig**, update only the required fields, submit via **Update FormConfig** (creates a new version), then fetch again to verify the new version and smoke test with sample documents.*

3. Does Update FormConfig modify the existing version or create a new one?  
   *It creates a new version. Treat updates as versioned releases rather than in-place edits.*

4. How do I retrieve a specific version of FormConfig?  
   *Use **Get FormConfig** with the `versionIdentifier` query parameter to fetch one exact version.*

5. Revert FormConfig failed with `404 Not Found`. Why?  
   *The provided `tenantId`, `docTypeId`, or `version` does not exist (or doesn’t match). First list versions using Get FormConfig (without `versionIdentifier`), then revert to a valid version number.*

6. What does Revert FormConfig actually do?  
   *It rolls back the effective configuration to the specified prior version for that tenant/docType. Use it as your primary rollback mechanism after a bad update.*

7. What’s the difference between Offboard Form and Offboard Tenant?  
   *Offboarding a form disables a specific docType’s form configuration for a tenant. Offboarding a tenant disables the tenant’s access to IDP services broadly until reboarded.*

8. Offboard Form succeeded, but the docType still seems usable. How can that happen?  
   *There may be caching/delay, an alternate configuration path, or the consuming workflow isn’t strictly gated by the form config. Verify state using Get FormConfig and confirm the consumer checks the offboarded status.*

9. Reboard Form succeeded, but Get FormConfig still fails. What should I check?  
   *Confirm the `tenantId`/`docTypeId` are correct, the form config exists for that docType, and versions are present. If needed, fetch by `versionIdentifier` or list `versions[]`.*

10. Should we include `version` / `versionIdentifier` while reboarding forms?  
   *Only if your implementation supports version-targeted reboarding. If not required, omit them and let the platform reboard using its default behavior.*

11. Tenant credential rotation returned a new `clientId/clientSecret`. What should developers do next?  
   *Update client integrations immediately to use the new credentials. Old credentials may stop working, which will break tenant token generation and downstream API calls.*


