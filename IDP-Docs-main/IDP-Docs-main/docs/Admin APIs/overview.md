The IDP Admin APIs provide administrators with full control over how tenants and forms are managed within the Intelligent Document Processing (IDP) platform. These APIs support the complete lifecycle of tenant and form configuration, including onboarding, updating, deboarding, and restoring resources, along with importing/exporting form templates and validating user access.

Administrators begin by generating an access token through the **OAuth → Generate New Token** option. This token is required to authenticate all subsequent Admin API calls.
At a high level, the Admin API suite enables:

- **Tenant Management** – Onboarding new tenants, updating metadata and credentials, deboarding inactive tenants, and reactivating them when needed.
- **Form Management** – Creating, updating, disabling, re-enabling, exporting, importing, and reverting form configurations used for document extraction and processing.
- **Configuration Versioning** – Exporting and importing form configurations for migration, backup, and replication across environments.
- **Access Validation** – Verifying that users have appropriate permissions to interact with a tenant or access IDP features.

These APIs form the administrative backbone of the IDP platform, ensuring controlled setup, configuration consistency, and secure access for all tenant-specific operations.