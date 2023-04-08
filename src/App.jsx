import React,{useState,useEffect} from 'react';
import CodeEditor from './Editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const App = () => {
  const [html,setHtml] = useState('')
  const [css,setCss] = useState('')
  const [js,setJs] = useState('')
  const [srcDoc,setSrcDoc] = useState('')

useEffect(()=>{
const timeout = setTimeout(()=>{
setSrcDoc(`
<html>
<head>
<style>${css}</style>
</head>
<body >${html}</body>
<script type = "text/javascript" >${js}</script>
</html>
`)
},600)
console.log(srcDoc);
return ()=>{clearTimeout(timeout)}
},[html,css,js])

  return (
    <>
    <header>
      <p>
        Wandel's c
  <img src="https://img.icons8.com/ios/2x/codepen.png" alt="logo" />depen
      </p>
    </header>
    <div className='editor-container'>
      <div>
      <h2 className='title'>HTML Editor</h2>
      <CodeEditor value={html} 
      onChange = {setHtml}
      highlight={(value) => highlight(value, languages.html)}
      />
      </div>
      <div>
      <h2 className='title' >CSS Editor</h2>
      <CodeEditor
        value={css}
        onChange = {setCss}
        highlight={(value) => highlight(value, languages.css)}
      />
      </div>
      <div>
      <h2 className='title' >JavaScript Editor</h2>
      <CodeEditor
        value={js}
        onChange = {setJs}
        highlight={(value) => highlight(value, languages.javascript)}
      />
      </div>
      <div className="output">
      <iframe src="" 
      sandbox='allow-scripts' 
      srcDoc={srcDoc}
      ></iframe>
      </div>

    </div>
    </>
  );
};

export default App;
