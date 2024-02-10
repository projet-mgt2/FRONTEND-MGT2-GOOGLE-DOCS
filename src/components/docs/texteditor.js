import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

export default function TextEditor() {
   
     return (
    <div className="bg-[#F1F3F4] dark:bg-dark-extra min-h-screen pb-16 print:pb-0 ">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 sm:!justify-center print:!hidden dark:!bg-dark-mid !border-0"
        editorClassName="mt-4 print:!m-0 print:!mx-auto sm:mt-6 py-1 sm:py-5 px-4 sm:px-10 bg-white shadow-md print:!shadow-none max-w-[90%] sm:max-w-3xl !min-h-[1024px] mx-auto ring-1 print:ring-0 ring-gray-300 print:block"
      />
    </div>
  );
}
