import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MyEditor() {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    const Quill = require("quill");
    if (Quill && Quill.imports && Quill.imports['formats/font']) {
      Quill.register(Quill.imports['formats/font'], true);
    }
  }, []);

  const handleChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorContent}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],     
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],   
          [{ 'indent': '-1'}, { 'indent': '+1' }], 
          [{ 'size': ['small', false, 'large', 'huge'] }], 
          ['link', 'image', 'video'],               
          ['clean']                                        
        ],
      }}
      formats={[
        'header',
        'bold', 'italic', 'underline', 'strike', 
        'list', 'bullet', 'indent',      
        'link', 'image', 'video',                  
        'size'                            
      ]}
      placeholder=""
      className="bg-white text-black h-full"
    />
  );
}

