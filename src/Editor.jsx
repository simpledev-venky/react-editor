

import React from 'react';
import Editor from 'react-simple-code-editor'; 
import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';


function CodeEditor({value,onChange,highlight}) {
  
const handleChange = (value)=>{
onChange(value)
}
  return (
    <Editor
      value={value}
      onValueChange={handleChange}
      highlight={ highlight }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        backgroundColor: '#f2f2f2',
      }}
      className='editor'
    />
  );
}

export default CodeEditor;
