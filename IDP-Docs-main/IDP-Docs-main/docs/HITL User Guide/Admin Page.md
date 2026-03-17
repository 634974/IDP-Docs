
# Admin Tab

The **Admin** tab allows administrators to configure document types, enable or disable features, define dynamic fields, set preprocessing rules, configure AI models, and manage field-level metadata used during extraction and HITL review. All changes made in this tab directly influence how the IDP pipeline parses, extracts, validates, and displays fields in the Review screen.

---
![main page](../HITL%20User%20Guide/UI%20Screens/Admin%20main.png )
## Overview

At the top of the Admin page, the following high-level selectors are available:

- **Tenant** – Select the active tenant for configuration.
- **DocType** – Choose the document type to manage (e.g., FRDF_MH).
- **Version/Filter** – Select versioned configuration sets.
- **Active Toggle** – Enable or disable the configuration for the selected DocType.

Once a DocType is selected, its associated settings, preprocessing queries, models, and field‑level metadata become editable.

---

## Document-level Inputs

![Document-level Inputs](../HITL%20User%20Guide/UI%20Screens/Document-level%20Inputs.png)

### **1. Document Count for Historic Accuracy**
Specifies the number of historical documents to be considered when calculating accuracy metrics for this DocType.

This value helps determine how accuracy benchmarks are weighted for reporting and analytics.

### **2. Document Review Percentage**
Defines the percentage of documents that should be routed for HITL review for this DocType.

Even if a document is accurately extracted, the system may still send a configurable percentage of cases to HITL for QA sampling or compliance checks.

### **3. Gen AI Post-processing Query**
A free‑form text area where administrators can enter the post‑processing prompt used to refine model output after extraction.

This prompt is executed on the LLM after initial extraction to clean, structure, normalize, or validate extracted fields.

---

## Settings

![Settings](../HITL%20User%20Guide/UI%20Screens/Settings.png)


###  Textract Feature Types
Controls which Textract features are used for extraction:

- **Layout**
- **Forms**
- **Queries**
- **Tables**
- **Signatures**

Multiple selections can be enabled concurrently.

###  Languages
Allows specifying which languages are supported for the DocType.

- Example: **en** (English)


### Gen AI Post-processing Models
Selects the Bedrock LLM used to refine the extracted data after IDP processing.

Once Textract and IDP finish extracting fields, the extracted content is passed to the selected Gen AI model, which:

- Cleans and formats the output
- Applies validation or normalization rules
- Ensures the final result is returned in a proper, structured JSON format

---

## Field Information

The **Field Information** section lists every field associated with the selected DocType. 

### Field Structure in the Field Information Section

Each field displayed under **Field Information** follows a consistent structure.  
This structure allows administrators to configure how a field behaves during extraction, post‑processing, and HITL review.

Below is the standard layout and meaning of each component.

#### Field Components

![Field Components](../HITL%20User%20Guide/UI%20Screens/Field%20Components.png)

Each field row contains the following editable attributes:

- **Field Name**  
  The descriptive label of the field (e.g., *Legal Name of Practitioner Last*).  
  This is defined in the backend and cannot be changed from the UI.

- **Field Type**  
  Defines the data type expected for the field, such as:  
  *string, number, date, signature, etc.*  
  The type helps control validation rules and UI behavior.

- **Default Value**  
  A pre‑populated value used when the field is empty or missing from extraction.

- **Page Number**  
  Indicates the page within the document where this field is located.  
  Critical for multi‑page documents.

- **Group Name**  
  Logical grouping used to classify fields within sections of a document  
  (e.g., *SECTION 1: PRACTITIONER*).  
  These groups determine how the fields are displayed in the HITL Review UI.

- **Order Number**  
  Controls the display order of fields within the same group.  
  Lower numbers appear first.

- **Required Toggle**  
  Enables or disables whether a field is mandatory during HITL review.  
  If enabled, the HITL reviewer must provide a value before proceeding.

A numeric value (0.0 – 1.0) that indicates the importance of a field during IDP review.
Fields with higher weightage influence the IDP engine more strongly during validation and decision‑making.

#### Additional Notes

- All fields shown in this section are **defined by the backend team** based on the document type.  
  The Admin UI does not allow creating or deleting fields—only configuring existing ones.
- Fields differ from document to document; each DocType has its own unique field layout.
- Configuration changes (required flags, transformations, validations, queries, etc.) take effect only after clicking **Save** at the bottom of the page.


Each field also provides three interactive configuration buttons:

####  1. Transformations
Transformations allow administrators to clean, normalize, or format the extracted values. Multiple transformations can be applied to the same field in sequence.

![Transformations main](../HITL%20User%20Guide/UI%20Screens/Transformations%20main.png)

---


##### Opening the Transformation Popup window

1. Click **Transformation** under the required field in the **Field Name** section.
2. The **Transformations** popup window appears.


---

##### Available Transformation Types

![Transformations](../HITL%20User%20Guide/UI%20Screens/Transformations.png)

The following transformation options are available from the dropdown:

- **Currency**  
    Converts extracted values into a standard currency format.

- **Custom**  
    Allows administrators to write a custom Python transformation function manually.

- **Date Format (DD/MM/YYYY)**  
    Converts any recognized date into the format **DD/MM/YYYY**.

- **Date Format (MM/DD/YYYY)**  
    Converts any recognized date into **MM/DD/YYYY** format.

- **Fax (XXX) XXX‑XXXX**  
    Reformats extracted fax numbers to a standardized pattern.

- **Lowercase**  
    Converts the entire extracted value to lowercase.

- **Uppercase**  
    Converts the entire extracted value to uppercase.

- **NPI (XXXXXXXXXX)**  
    Normalizes National Provider Identifier values into a 10‑digit numeric format.

- **Phone (XXX‑XXX‑XXXX)**  
    Formats the extracted phone number to a consistent pattern.

- **SSN (XXX‑XX‑XXXX)**  
    Formats Social Security Numbers into a standard structure.

- **ZIP (XXXXX‑XXXXX)**  
    Applies a formatting rule suitable for ZIP or ZIP+4 codes.


!!!note
    - Selecting a predefined transformation automatically populates the transformation code in the textbox.
    - Selecting **Custom** enables the textbox for manual input, where users can write a Python function to transform the value.

---

##### Adding a Transformation


1. Click **+ Add Transformation**.
2. Click ![button](../HITL%20User%20Guide/UI%20Screens/Quicksight/filter%20button.png) to open the dropdown.
3. Select the transformation type.
4. If using **Custom**, type the transformation logic in the textbox.
5. Click **Continue** to save the transformation.

---

##### Managing Transformations


- **Continue** - Saves the transformation rules.  
- **Cancel** - Discards any unsaved changes.  
- **Delete** - To remove a transformation, click ![Delete Transformation](../HITL%20User%20Guide/UI%20Screens/Delete%20Transformation.png).

User can add multiple transformations to a field, and they will be executed in the order they appear.



#### 2. Validations

Validations ensure that the extracted or manually entered value for a field adheres to the required format, structure, or numerical constraints. User can apply **multiple validations** to the same field.

---

##### Opening the Validation popup window

1. Click **Validation** for the required field in the **Field Name** section.  
2. The **Validations** popup window appears.

![Validations – Main](../HITL%20User%20Guide/UI%20Screens/validations_main.png)

A **dropdown** lets admin select from predefined validation types. Many validation types require a **Parameter** (e.g., maximum length, regex pattern, minimum value).

![Validations – Dropdown](../HITL%20User%20Guide/UI%20Screens/validations_dropdown.png)


---

##### Available Validation Types

The following validation types are available:

- **Currency Validator**  
  Validates whether the field value matches a valid currency format.

- **Custom Regex Validator**  
  Allows administrators to define a **custom regular expression** for advanced validation rules.  

- **Date Validator**  
  Verifies that the value is a valid date.

- **Decimal Validator**  
  Ensures the value is a valid decimal (supports fractional values).

- **Email Validator**  
  Validates the value as a properly formatted email address.

- **Maximum Length Validator**  
  Ensures the value does **not exceed** a specified number of characters.  
  *Parameter:* Maximum character length.

- **Maximum Value Validator**  
  Ensures the numeric value does **not exceed** a specified maximum.  
  *Parameter:* Maximum numeric value.

- **Minimum Length Validator**  
  Ensures the value contains **at least** the specified number of characters.  
  *Parameter:* Minimum character length.

- **Minimum Value Validator**  
  Ensures the numeric value is **greater than or equal to** the specified minimum.  
  *Parameter:* Minimum numeric value.

- **Numeric Validator**  
  Ensures the value contains **only digits** (0–9).

- **Phone Number Validator**  
  Validates that the value matches a phone number pattern.

- **SSN Validator**  
  Validates that the value matches Social Security Number patterns.

- **String Validator**  
  Confirms that the field contains valid string/text characters.

- **ZIP Code Validator**  
  Validates the value as a proper ZIP or ZIP+4 code.

---

##### Adding a Validation

1. Click **+ Add Validation** to create a new rule.  

2. Click the ![button](../HITL%20User%20Guide/UI%20Screens/Quicksight/filter%20button.png) and choose a validation type.

3. Enter the **Parameter** (e.g., length, min/max value, regex).  

4. Click **Continue** to save the rule.

---

##### Managing Validations

- **Continue** - Saves all validation rules.  
- **Cancel** - Closes the dialog without saving.  
- **Delete** - Remove a rule using ![Delete Transformation](../HITL%20User%20Guide/UI%20Screens/Delete%20Transformation.png) next to the validation.


User can add **multiple** validations to the same field; they will be evaluated together during HITL review.


#### 3. Queries
Allows linking field-specific Natural Language queries for data extraction.

Example:

- For *Date of Birth*, the query might be:  
  _“What is the practitioner's date of birth?”_


---

### Save Changes

A **Save** button displays at the bottom of the page.  
All configuration changes must be explicitly saved before they take effect.

---

### Summary

The Admin tab acts as the central configuration console for IDP. Administrators use it to:

- Manage DocTypes and activate/deactivate configurations  
- Select Textract feature types  
- Choose LLM models for extraction enhancement  
- Define field metadata, validations, and transformation logic  
- Control how fields appear and behave during extraction and HITL review  

This configuration layer allows each tenant and DocType to be customized precisely for their document structure and operational needs.
