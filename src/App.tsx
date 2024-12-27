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
