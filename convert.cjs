const fs = require('fs');

const htmlContent = fs.readFileSync('/Users/rishikesh.devkate/Documents/rvd.html', 'utf8');

// Extract style
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  fs.writeFileSync('src/index.css', styleMatch[1].trim());
}

// Extract body and script
// Let's use robust regex to capture everything inside the body tag including the script
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;
const bodyMatch = bodyRegex.exec(htmlContent);

if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}

let entireBody = bodyMatch[1];

// Extract script text for our useEffect
const scriptMatch = entireBody.match(/<script>([\s\S]*?)<\/script>/i);
let scriptContent = scriptMatch ? scriptMatch[1] : '';

// Remove script tags from the injected HTML so we don't double execute or have invalid children
let htmlMarkup = entireBody.replace(/<script>[\s\S]*?<\/script>/gi, '');

// We need to escape backticks and ${} because it will be enclosed in a template literal
let escapedHtml = htmlMarkup.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

// Also our script refers to DOM elements which need to be ready.
const appCode = `import React, { useEffect, useRef } from 'react';\nimport './index.css';\n\n` + 
`export default function App() {\n` + 
`  const containerRef = useRef(null);\n` +
`  useEffect(() => {\n` + 
`    if (!containerRef.current) return;\n` +
`    // Injecting the raw JS from the original script\n` +
`    ${scriptContent}\n` + 
`    \n` +
`    // Assign global functions from script that are called by inline onClick handlers\n` +
`    window.openUIModal = openUIModal;\n` +
`    window.closeUIModal = closeUIModal;\n` +
`    window.toggleSlideshow = toggleSlideshow;\n` +
`    window.runSSODemo = runSSODemo;\n` +
`    window.closeGoogleModal = closeGoogleModal;\n` +
`    window.selectGoogleAccount = selectGoogleAccount;\n` +
`    window.resetSSODemo = resetSSODemo;\n` +
`    window.runMFADemo = runMFADemo;\n` +
`  }, []);\n\n` + 
`  return (\n` +
`    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: \`${escapedHtml}\` }} />\n` +
`  );\n}\n`;

fs.writeFileSync('src/App.jsx', appCode);
console.log('Conversion complete!');
