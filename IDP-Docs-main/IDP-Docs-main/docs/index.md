
## Intelligent Document Processing (IDP)

**Intelligent Document Processing (IDP)** is a Maximus-produced service that converts **unstructured documents**—such as scanned PDFs, images, and digital forms—into **structured, machine-readable data** that downstream systems can reliably consume. IDP is built to help teams automate document-centric workflows by providing a consistent, API-driven way to ingest documents, process them, and retrieve extraction results.

IDP delivers an end-to-end capability to **upload documents securely**, **process them asynchronously**, and **return extracted output in a standard format** (for example, JSON). By offering a shared, reusable service, IDP reduces duplicated effort across teams, improves consistency of extraction outcomes, and supports scalable processing for multiple document types and business use cases.

### What IDP does

- **Secure document ingestion**  
  Enables clients to upload documents using a controlled mechanism (for example, pre-signed upload URLs), avoiding the need to pass large binary files through the core API layer.

- **Job-based, asynchronous processing**  
  Creates a **job** for each document and processes it in the background. Clients use a **job ID** to track progress, making the integration reliable for long-running extraction tasks.

- **Document data extraction and structuring**  
  Extracts relevant document information (such as text and document data elements) and returns results in a structured response, making it easier to integrate with downstream applications.

- **Status tracking and result retrieval**  
  Provides APIs to **check job status** and **retrieve processed output** once complete, enabling predictable, automation-friendly integration patterns.

- **Extensible quality controls**  
  Supports the ability to incorporate additional validation and review mechanisms (for example, Human-in-the-Loop patterns) for exceptions or low-confidence outputs, where applicable.

### Outcome

With IDP, teams can move from manual and fragmented document handling to an automated approach that delivers **repeatable, scalable, and traceable document processing**—from upload to extraction results—through a single Maximus-managed service.
