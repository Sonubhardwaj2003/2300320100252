# Campus Notification System Design

## Overview

This project is a React-based campus notification system developed for the Affordmed Frontend Evaluation.

The application fetches notifications from the provided API and displays them based on priority and recency.

---

## Features

- Fetch notifications from API
- Priority-based sorting
- Filter notifications by type
- Top 10 notifications display
- Responsive UI
- Logging middleware integration
- Material UI based design

---

## Priority Logic

Notifications are sorted based on:

1. Placement
2. Result
3. Event

If two notifications have the same type, then the latest notification is displayed first.

---

## Logging Middleware

A reusable logging middleware was implemented using:

```js
Log(stack, level, package, message)
```

The middleware sends logs to the provided logging API using Bearer Token authentication.

---

## Technologies Used

- React
- Vite
- Material UI
- JavaScript
- Fetch API

---

## Folder Structure

```plaintext
logging_middleware/
notification_app_be/
notification_app_fe/
notification_system_design.md
```

---

## Output

The application successfully displays notifications with filtering and priority sorting.