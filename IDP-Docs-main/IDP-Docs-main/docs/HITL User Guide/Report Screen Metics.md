## Summary

The **Executive Dashboard** brings together all operational KPIs, visual insights, workflow health indicators, and user productivity metrics. It enables supervisors and analysts to monitor system performance, track HITL workload, assess accuracy, and make informed decisions based on real‑time processing data.

---

## Overview Metrics

![overview](../HITL%20User%20Guide/UI%20Screens/Quicksight/Overview%20Metrics.png)

The top KPI section displays key operational indicators:

- **Total Cases** – Total number of processed cases.
- **Straight Through Processing** – Count of cases processed without HITL.
- **HITL Completion %** – Percentage of HITL cases completed successfully.
- **HITL Rejection %** – Cases rejected during HITL.
- **HITL Pending %** – Cases still awaiting HITL action.
- **Processing Rejection %** – Cases rejected during automated extraction.
- **Total Field Count** – Total extracted data fields.
- **Data Extraction Accuracy %** – Overall extraction accuracy.
- **Field Edit %** – Fields corrected during HITL.
- **Total Pages Digitized** – Total pages processed.
- **Average Digitizing Time (SS)** – Average time IDP takes to process a record in the backend.
- **Average Processing Time (SS)** – Average total time taken by IDP plus HITL to complete a record.

---

## Visualizations

### 1. HITL Review by Case

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/HITL%20review%20by%20Case.png)

A donut chart displaying distribution across HITL statuses:

- Ready for HITL  
- HITL In Progress  
- HITL Rejected  
- HITL Completed  
- Error Status  
- Not Subject to Review  

---

### 2. Workflow Status by Case

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Workflow%20status%20by%20case.png)



The **Workflow Status by Case** visualization includes a dedicated multi‑category filter that allows users to refine the chart using three different dimensions. This provides flexibility in analyzing workflow distribution across document types, languages, and processing stages.

#### Available Filter Categories

The filter dropdown provides the following three selectable categories:

1. **Doc Type**  
   Filters workflow data by document type.  
   Useful for understanding workflow behavior for a specific document category.

2. **Language**  
   Filters data based on the detected language of the input document.  
   Helps analyze language‑specific workflow variations.

3. **Workflow Status**  

    Allows selecting specific workflow stages such as: 

    - Ready for HITL  
    - HITL In Progress  
    - HITL Completed  
    - HITL Rejected  
    - Classification Failed  
    - Error Status  
    - Consumed
   
    Enables focused analysis of particular stages in the processing pipeline.

##### How This Filter Works

- Click the filter dropdown to select one of the three categories.  
- Search for or select values within that category.  
- The donut chart updates dynamically based on the selected filter type and values.  

##### Purpose

This multi‑dimensional filter enables users to:

- Compare workflow distribution across different document categories  
- Identify language‑specific workflow trends  
- Pinpoint bottlenecks or anomalies in specific workflow statuses  

It provides a more granular and flexible way to explore workflow insights on the dashboard.

---

### 3. Total Cases by Timeline

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Total%20Cases%20by%20Timeline.png)

A timeline‑based scatter/line chart showing:

- Case count trends  
- Drill‑down capability by Year, Quarter, Month, or Day  

---

### 4. Top Files by Accuracy

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Top%20Files%20by%20Accuracy.png)

Ranks files by highest extraction accuracy, highlighting:

- Consistently high‑quality documents  
- Files requiring potential review  

---

### 5. Field Level Accuracy

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Field%20Level%20Accuracy.png)

Field‑level accuracy breakdown:

- Shows accuracy value per field  
- Color‑coded for readability  
- Only **Tenant** and **DocType** filters apply  

---

### 6. Data Extraction Accuracy by Timeline

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Data%20Extraction%20Accuracy%20by%20Timeline.png)

A timeline plot showing:

- Accuracy variation over time  
- Calculated only for HITL‑completed cases  

---

### 7. Workflow Status by Timeline

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/Workflow%20Status%20by%20Timeline.png)

Stacked bar chart showing:

- Workflow state distribution across selected timeline  
- Helps identify workload patterns and bottlenecks  

---

### 8. User Metrics

![Chart](../HITL%20User%20Guide/UI%20Screens/Quicksight/User%20Metrics.png)

A table showing reviewer‑level performance metrics:

- **Username**
- **Case Count**
- **HITL Completion %**
- **HITL Rejection %**
- **Field Edit %**
- **Average Processing Time (Min)**

Useful for productivity and quality analysis.

---

