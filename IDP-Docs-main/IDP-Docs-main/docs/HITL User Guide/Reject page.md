
# Reject page

Use the **Reject** page to view and track tasks that were marked as **rejected** during document review. This page helps reviewers and administrators quickly locate rejected items, understand why they were rejected, and reference task metadata such as status, document type, and timestamps.


---

## How to access

1. Sign in to the IDP HITL portal.
2. In the left navigation, select **Reject**.

---

![Reject](../HITL%20User%20Guide/UI%20Screens/Reject%20main.png)

## Page layout

The Reject page includes:

- **Left navigation**
    - **Review**: Lists tasks that require review.
    - **Reject**: Lists rejected tasks (this page).
    - **Reports**: Reporting and analytics dashboards.
    - **Admin**: Administrative and configuration options.

- **Tenant selector (top-right)**
    - A dropdown used to select the tenant context (for example, `MH`).

- **Search bar**
    - A search field at the top of the page used to filter rejected tasks.

- **Rejected tasks table**
    - A table listing rejected tasks and related metadata (including rejection reason).

---

## Tenant selection

Use the **Tenant** dropdown (top-right) to switch the tenant context.

**Behavior**

- Changing the tenant refreshes the rejected task list to show tasks for the selected tenant.
- Tenant selection applies to the search results and the table contents.


---

## Search rejected tasks

Use the search bar to quickly find rejected tasks.

### Search behavior

- Enter a keyword in the search bar to filter the list.
- Search typically helps you locate tasks by common identifiers such as **Title**, **ID**, or visible task metadata.


---

## Rejected tasks table

The table lists tasks that have been rejected for the selected tenant.

### Columns

- **Assignee**
    - The user associated with the task.

- **ID**
    - Unique identifier for the task/job.
    - Use this ID for tracking and support requests.

- **Created**
    - Date the task was created.

- **Updated**
    - Date the task was last updated.

- **Status**
    - Current task status as shown in the portal (for example, the badge may display **Unclassified** in some views).

- **Doc Type**
    - Document type associated with the task.

- **Language**
    - Language associated with the document.

- **Reason**
    - Reason captured when the document was rejected.

- **Title**
    - Display name of the document/task.

---

## Open a rejected task

To view a rejected task:

1. Locate the task in the table.
2. Select the **Title**.

The portal opens the task details view.


# Document classification Review

Use the **Document classification Review** screen to view the rejected document and assign the correct classification.

![Reject document](../HITL%20User%20Guide/UI%20Screens/reject%20document%20page.png)

## Page layout

The screen is divided into two main areas:

- **Document viewer (left pane)**
    - Displays the document (for example, a PDF).
    - Use viewer controls (zoom, page navigation, etc.) to verify the content.

- **Classification panel (right pane)**
    - **Choose classification**: A dropdown to select the appropriate document classification.
    - **Comments**: A text field to add notes (optional).
    - **Submit**: Saves your classification selection.

A status panel may also be displayed at the top-right (for example, **Validation — Status: Pending**).

## Choose a classification

1. In **Choose classification**, open the dropdown.
2. Select the appropriate classification from the list.

> The available classification values depend on tenant and configuration.  
> Example:

> - *MassHealth federally required disclosure forms*
> - *MassHealth Provider Application (Medical Practitioner …)*
> - *Nonbilling Provider (ORP)*

## Add comments 

Use the **Comments** field to provide additional context for the classification decision (for example, why a particular category applies).

## Submit classification

To save the classification decision:

1. Confirm the selected value in **Choose classification**.
2. Enter comments.
3. Select **Submit**.

**Outcome**

- The portal saves the classification decision for the document.

---

## Related pages

- [Review page](Review%20page.md)
- [Admin page](Admin%20Page.md) 
- [Reports](Reports.md) 
