# Checklist System Using Node.js

A simple Checklist System built with Node.js that evaluates conditions based on input data fetched from an API and displays the results on a dashboard.

---

## Features

- Fetches application data from the provided API.
- Evaluates checklist rules dynamically.
- Displays a user-friendly dashboard with the results of the checklist evaluation.
- Clean, modular code for easy future maintenance and extension.

---

## Checklist Rules

1. **Valuation Fee Paid**: `isValuationFeePaid` should be `true`.
2. **UK Resident**: `isUkResident` should be `true`.
3. **Risk Rating Medium**: `riskRating` should be `"Medium"`.
4. **LTV Below 60%**: Loan-to-Value (LTV) is calculated as:
   \[
   \text{LTV} = \frac{\text{Loan Required}}{\text{Purchase Price}} \times 100
   \]
   It should be less than 60%.

---

## Technology Stack

- **Backend**: Node.js (Express.js)
- **Frontend**: HTML, CSS, JavaScript
- **Dependency**: Axios for HTTP requests, EJS for templating

---

## Getting Started

### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Veerabramha/checklist-system.git
   cd checklist-system
   ```
