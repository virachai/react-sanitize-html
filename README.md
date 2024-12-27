# React-Sanitize-HTML

## Overview

This project demonstrates how to safely sanitize HTML content in React applications using the `sanitize-html` package. The goal is to prevent Cross-Site Scripting (XSS) attacks by sanitizing untrusted HTML before rendering it. This project helps developers understand the importance of sanitizing HTML and securely rendering it in a React app.

## Features

- **Sanitize HTML Content**: Safely clean untrusted HTML content before rendering.
- **Prevent XSS Attacks**: Protect your app from malicious content that could lead to XSS vulnerabilities.
- **React Integration**: Use `sanitize-html` within a React app to ensure safe HTML rendering.
- **Simple Setup**: Easily integrate into your existing React projects.

## Why Sanitize HTML?

Sanitizing HTML is a critical step when rendering content dynamically from untrusted sources (e.g., user input or third-party data). Without proper sanitization, your app can be vulnerable to **Cross-Site Scripting (XSS)** attacks, where an attacker injects malicious scripts into your app. This project shows how to use the `sanitize-html` package to clean HTML and allow only safe tags and attributes.

## Installation

To set up and run this project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/virachai/react-sanitize-html.git
cd react-sanitize-html
```

### 2. Install dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

This will install all required packages, including `sanitize-html`.

### 3. Start the development server

To run the project locally, use the following command:

```bash
npm start
```

This will start the React development server and open the app in your browser.

## Usage

### Example of sanitizing and rendering HTML in React

Here's how you can use `sanitize-html` in a React component to sanitize and render HTML:

```javascript
import React from "react";
import sanitizeHtml from "sanitize-html";

const rawHTML = `
  <div>
    <h1>Welcome to React!</h1>
    <p>This is a <strong>sample</strong> HTML content.</p>
    <script>alert('This is a malicious script');</script>
  </div>
`;

const sanitizedHTML = sanitizeHtml(rawHTML, {
  allowedTags: ["h1", "p", "strong", "em", "b"],
  allowedAttributes: {
    "*": ["href", "title"],
    a: ["href"],
  },
});

const App = () => {
  return (
    <div>
      <h1>Sanitized HTML Output</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};

export default App;
```

In this example, `sanitize-html` is used to clean up the raw HTML, removing the `<script>` tag (and any other unsafe tags). The sanitized HTML is then rendered within the React component using `dangerouslySetInnerHTML`.

### Allowed Tags and Attributes

In the example above, we've configured `sanitize-html` to allow only certain tags like `<h1>`, `<p>`, `<strong>`, and `<b>`. The `allowedAttributes` option allows only specific attributes like `href` for `<a>` tags.
