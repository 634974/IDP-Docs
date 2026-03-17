# Review page

After you sign in to the IDP HITL portal, the system redirects you to the **Review** page. This page lists tasks that require review and allows you to filter tasks and open a document for validation.

![Main page](../HITL%20User%20Guide/UI%20Screens/Main%20page.png)

## Page layout

The Review page includes:

- **Left navigation**  
    - **Review**: Lists tasks that require review.  
    - **Reject**: Lists tasks that have been rejected.  
    - **Reports**: Opens reporting and analytics views.  
    - **Admin**: Opens administrative functions.

- **Tenant selector (top-right)**  
  A dropdown used to select the tenant context for tasks.

- **Task scope (Assigned)**  
  An **Assigned** option is available near the top of the page to view tasks assigned to you (or the selected scope configured by the portal).

- **Filters**  
  Filter controls for narrowing the task list.

- **Tasks table**  
  Displays tasks and their key metadata.

## Tenant selection

Use the **Tenant** dropdown (top-right) to select the tenant you want to work on.

**Behavior**

- Changing the tenant refreshes the task list.
- Tenant selection applies to the filters and the tasks table on this page.

## Filters

Use filters to narrow the list of tasks displayed in the table.

### Available filters

- **Assignee**  
  Filters tasks by assignee. Start typing to search for a user.

- **Status**  
  Filters tasks by the current task status.

- **Doc Type**  
  Filters tasks by document type.

- **Language**  
  Filters tasks by language.

- **From / To (date range)**  
  Filters tasks within a selected date range. Use **From** for the start date and **To** for the end date.

### Apply or reset filters

- Click **Apply** to apply the selected filter values and refresh the task list.
- Click **Reset** to clear all filter values and return to the default view.

## Tasks table

The Tasks table lists tasks available for review under the selected tenant and filter criteria.

### Columns

- **Assignee**: The name of the user whose job has created the task.
- **ID**: Unique identifier for the task/job.
- **Created**: Date the task was created.
- **Updated**: Date the task was last updated.
- **Status**: Current state of the task.
- **Doc Type**: Document type associated with the task.
- **Language**: Language associated with the document.
- **Title**: Display name of the document/task.

## Open a task

To open a document for review:
1. Locate the task in the Tasks table.
2. Select the **Title** of the task.
3. The portal opens the **Document Review** page for the selected document.


---

# Document Review page (task details)

When you open a task from the Review page, the portal displays the **Document Review** page. Use this page to verify extracted content against the source document, update values if needed, and then submit or reject the document.

![Review Page](../HITL%20User%20Guide/UI%20Screens/Review%20page.png)

## Page layout

The Document Review page is divided into two primary areas:

- **Document viewer (left pane)**
    - Displays the uploaded document (for example, a PDF).
    - Use viewer controls (such as zoom and page navigation) to locate and verify content.

- **Fields panel (right pane)**
    - Shows extracted fields and lets you update values.

- **Bounded Boxes Toggle**

    - A Bounded Boxes toggle appears at the top‑right area of the Fields panel.
    - This feature allows HITL reviewers to visually map extracted fields to their exact location in the document.

## Document status

At the top of the page, the portal displays validation information (for example, **Validation: Pending**). Use this to understand the current state of the document in the workflow.

---

## Review and modify extracted content

The Fields panel typically shows:

- **Extracted Content**: Values captured from the document.
- **Modified Content**: Editable values that reflect your corrections.

### Update a field

To correct extracted values:

1. Locate the field you want to update (for example, Name, Telephone, Email).
2. In **Modified Content**, enter the corrected value.
3. Use the document viewer to confirm accuracy.

---

## Actions

After reviewing the document, choose one of the following actions:

- **Submit**
    - Submits the document review along with your modifications (if any).

- **Reject**
    - Marks the document as invalid and requires a rejection reason.

- **Cancel**
    - Exits the Document Review page without saving or submitting changes.

---

## Cancel review

Use **Cancel** to exit without applying any changes.

### What happens when you select Cancel

When you select **Cancel**, a confirmation dialog appears:

![Cancel Screen](../HITL%20User%20Guide/UI%20Screens/Cancel%20confirmation.png)

Choose one of the following options:

- **No**: Closes the dialog and keeps you on the Document Review page.
- **Yes**: Cancels the review and returns you to the **Review** page.

> **Important:** Selecting **Yes** discards any edits you made. No changes are saved or submitted.

---

## Reject a document

Use **Reject** to mark a document as invalid when it cannot be reviewed or processed (for example, content is illegible or the document type is incorrect).

### What happens when you select Reject

When you select **Reject**, the portal opens a dialog to capture the rejection reason.

![Rejection page](../HITL%20User%20Guide/UI%20Screens/Reject.png)

### Select a rejection reason

In the dialog, select one of the available reasons:

- **I can’t read the document**
    - Use when the document content is unclear, blurred, or unreadable.

- **Wrong document type**
    - Use when the uploaded document does not match the expected type.

- **Other**
    - Use when none of the listed reasons apply.
    - Provide additional details in the description field.

### Complete or cancel the rejection

- **Cancel**: Closes the dialog and returns to the Document Review page without rejecting.
- **Reject**: Confirms the rejection and marks the task as rejected.

### Outcome

After rejection, the task moves out of the Review list and appears in the **Reject** section.

---

## Related pages

- [Reject page](Reject%20page.md)
- [Admin page](Admin%20Page.md) 
- [Reports](Reports.md) 