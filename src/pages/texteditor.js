import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
        ssr: false,
    }
);

export default function TextEditor() {
   
    return (
        
        <div className='bg-[#F8F9FA] min-h-screen pb-16'>
            <DynamicEditor
                
                toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
                editorClassName='mt-6 bg-white shadow-lg max-w-5xl mx-auto'
            />
        </div>
    );
}
