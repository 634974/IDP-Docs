1. I’m getting 401 Unauthorized. What should I check?

    *Most commonly: the Authorization header is missing, the token is expired, or the token is the wrong type for the endpoint. Ensure you send Authorization: Bearer <access_token> and refresh tokens before expiry.*

2. I’m getting 403 Forbidden even though the token is valid. Why?

    *Your token may not have permission for the tenant/resource, or the user isn’t mapped/authorized for that tenant. Check tenant association and access policy.*

3. Presigned upload fails with 403 SignatureDoesNotMatch / AccessDenied. What causes this?

    *Typical causes include: using the wrong HTTP method (e.g., using POST instead of PUT), adding/altering headers that were part of the signature (like Content-Type), uploading after the URL expires, or client clock skew. Request a new presigned URL and upload raw binary using the required method.*

4. Do I need to send multipart/form-data when uploading to the presigned URL?

    *Usually no. Most presigned URL flows expect a direct binary upload (for example, a PUT with the file bytes). Using multipart can break the signature unless explicitly documented.*

5. My job stays “InProgress” for a long time. What should I do?

    *Use polling with exponential backoff and a maximum timeout. Large files, queueing, throttling, or downstream latency can extend processing time. If it exceeds your timeout, log the jobId and raise a ticket with timestamps and requestId/correlationId.*

6. What’s the recommended polling interval for job status?

    *Start with a small interval (2–3 seconds), then back off to 10–30 seconds with jitter. Polling too aggressively increases throttling risk and cost.*

7. Which details should we log for debugging without exposing sensitive data?

    *Log: endpoint, status code, latency, jobId, docTypeId, tenantId (if allowed), timestamps, and requestId/correlationId. Do not log tokens, secrets, full documents, or extracted text containing PII/PHI.*

8. How do we avoid duplicate processing when users retry requests?

    *Use client-side idempotency: track requests using client-generated IDs and reuse job references when possible. Ensure retry logic doesn’t unintentionally submit a second job for the same document.*

9. Which file formats and quality guidelines reduce extraction failures?

    *Prefer clean PDFs or high-resolution images (200–300 DPI), correct orientation, minimal blur, and complete pages. Poor image quality is one of the biggest drivers of rejects/failures.*

10. What information should we provide when raising a support ticket for a failed job?

    *Provide: timestamp/timezone, tenantId, docTypeId, jobId, requestId/correlationId, HTTP status + sanitized error response, file metadata (type/size/page count), and the sequence of API calls used.*