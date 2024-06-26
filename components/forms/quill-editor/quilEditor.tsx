
import dynamic from 'next/dynamic';
import React, { FunctionComponent, useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Importa os estilos do Quill


const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // Desativa a renderização no lado do servidor para este componente
});


// Módulos do editor Quill
const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image', 'video']
    ]
};

// Formatos suportados pelo editor Quill
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align',
    'script', 'direction', 'clean'
];

// Props do componente MyEditor
interface MyEditorProps {
    onContentChange: (content: string) => void; // Função callback para mudanças no conteúdo
}

const MyEditor: FunctionComponent<MyEditorProps> = ({ onContentChange }) => {
    const [text, setText] = useState('');

    // Handler para mudanças no editor com tipos definidos
    const handleChange = (content: string, delta: any, source: any, editor: any) => {
        const html = editor.getHTML(); // Obtem o HTML do editor
        setText(html); // Atualiza o estado local com o conteúdo HTML
        onContentChange(html); // Chama o callback com o novo conteúdo HTML
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

export default MyEditor;
