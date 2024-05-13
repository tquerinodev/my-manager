import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa os estilos do Quill


const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }],
        [{ 'font': ['sans-serif', 'serif', 'monospace', 'roboto', 'open-sans', 'lora', 'inconsolata'] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
    ]
};


const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align',
    'script', 'direction', 'clean'
];

const ComponentsFormsQuillEditorWithTooltip = () => {
    const [text, setText] = useState('');

    const handleChange = (content, delta, source, editor) => {
        setText(editor.getHTML()); // Ou use editor.getText() para texto sem formatação
    };

    return (
        <div>
            <ReactQuill 
                theme="snow" 
                value={text} 
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default ComponentsFormsQuillEditorWithTooltip;
