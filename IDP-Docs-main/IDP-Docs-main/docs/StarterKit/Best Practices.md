

- Use the correct user/tenant token for user endpoints; don’t reuse admin tokens in user flows.
- Centralize token acquisition/refresh in one shared module; refresh proactively (e.g., when <5 minutes to expiry) to prevent random auth failures.
- Never log access tokens; if you must reference them in logs, log only a masked tail (last 4 chars).
- Treat presigned uploads as strict contracts: use the exact HTTP method (typically PUT), upload raw binary, and avoid adding extra headers that can break signatures.
- Handle presigned URL expiry cleanly: if upload fails due to expiration/signature, request a fresh presigned URL and retry once (avoid infinite retries).
- Validate files client-side before upload (format, size limits, page count, encoding for CSV) to fail fast and reduce wasted job processing.
- Implement async job polling with exponential backoff + jitter (start small, back off to 10–30s); avoid aggressive polling that triggers throttling.
- Add a hard timeout for job tracking and provide a “check later” path; don’t block UI threads or backend workers indefinitely.
- Handle all job terminal states (COMPLETED, FAILED, CANCELLED if applicable) and return actionable messages (include jobId and requestId/correlationId).
- Implement client-side idempotency where possible (client request IDs / dedupe logic) to avoid duplicate processing on retries.
- Capture and propagate a correlation/request ID end-to-end (generate one if the platform doesn’t return it) to accelerate debugging and support.
- Log only what’s needed: endpoint, status, latency, jobId, docTypeId, tenantId (if allowed), requestId—never log full documents or extracted PII/PHI.
- Validate and sanitize extracted outputs before writing downstream (types, required fields, date formats) to prevent cascading failures.
- Separate environment configs cleanly (dev/test/prod): base URLs, tenant IDs, credentials—add safeguards to prevent accidental production calls from non-prod.
