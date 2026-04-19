const fs = require('fs');
const HTMLtoJSX = require('html-to-jsx');

const htmlContent = fs.readFileSync('/Users/rishikesh.devkate/Documents/rvd.html', 'utf8');

// Extract style
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  fs.writeFileSync('src/index.css', styleMatch[1].trim());
}

// Extract body (minus script tags)
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove script tags from body
const scriptContentMatch = bodyContent.match(/<script>([\s\S]*?)<\/script>/i);
let scriptContent = scriptContentMatch ? scriptContentMatch[1] : '';
bodyContent = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, '');

// Convert to JSX
const converter = new HTMLtoJSX({
  createClass: false,
});

const jsx = converter.convert(bodyContent);

// Prepare App.jsx
const appCode = `import React, { useEffect } from 'react';\nimport './index.css';\n\n` + 
`export default function App() {\n` + 
`  useEffect(() => {\n` + 
`    ${scriptContent}\n` + 
`  }, []);\n\n` + 
`  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;

fs.writeFileSync('src/App.jsx', appCode);
console.log('Conversion complete!');
