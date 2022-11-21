import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
 
const CodeBlock = ({codeString}) => {
  return (
    <SyntaxHighlighter language="javascript" style={gruvboxDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock