# Budget Planner

A console-based personal finance tracker built in Java that allows users to record income and expenses, categorize transactions, persist data to local storage, and generate financial summaries.

---

## Overview

Budget Planner is a simple command-line application designed to help users manage personal finances by tracking income and expenses.

The application provides:

* Income and expense management
* Transaction categorization
* Expense analysis by category
* Monthly financial summaries
* Persistent storage using local files

The project demonstrates practical use of Java fundamentals, collections, file handling, exception handling, and object-oriented design.

---

## Features

### Income Tracking

* Add income transactions
* Categorize income sources
* Store transaction notes

### Expense Tracking

* Add expense transactions
* Categorize spending
* Track individual expenses

### Financial Summary

* Total income calculation
* Total expense calculation
* Net balance calculation
* Budget status feedback

### Expense Analysis

* View expenses grouped by category
* Identify spending patterns

### Data Persistence

* Save transactions to a local file
* Automatically load previous records on startup

---

## Technologies Used

* Java
* Java Collections Framework
* File Handling (BufferedReader, FileWriter, PrintWriter)
* Exception Handling
* LocalDate API

---

## Project Structure

```text
budget-planner/
├── README.md
├── src/
│   ├── Main.java
│   └── Transaction.java
├── assets/
│   └── screenshots/
└── budget_data.txt
```

---

## Concepts Demonstrated

This project applies several core Java concepts:

* Classes and Objects
* ArrayList
* HashMap / TreeMap
* File Handling
* Exception Handling
* User Input Handling
* Data Persistence
* Modular Programming

---

## Running the Application

### Compile

```bash
javac Main.java
```

### Run

```bash
java Main
```

---

## Sample Menu

```text
=========================================
           BUDGET PLANNER v1.0
=========================================

----------- MENU -----------
1. Add Income
2. Add Expense
3. View All Transactions
4. View Monthly Summary
5. View by Category
6. Save & Exit
-----------------------------
```

---

## Future Improvements

Potential enhancements include:

* Monthly reports
* Budget goals and alerts
* Transaction editing and deletion
* CSV export functionality
* Database integration (SQLite/MySQL)
* Graphical User Interface (JavaFX/Swing)
* Expense visualization charts

---

## Learning Outcomes

Through this project, I gained practical experience with:

* Building console-based applications
* Designing reusable Java classes
* Managing data persistence
* Working with collections and file operations
* Creating user-friendly command-line interfaces

---

## Author

**Aahish Aayan**

GitHub: https://github.com/silverbullet-ai

