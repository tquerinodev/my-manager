
'use client'

import React, { useState, FormEvent } from 'react';
import useInsereRevisao from '@/components/api/useInsereRevisao';
// Definindo uma nova interface para os dados do formulário
interface RevisaoFormData {
    titulo: string;
    disciplina: string;
}
export default function CadastrarRevisao() {
    const [titulo, setTitulo] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const { sendRequest, isLoading, error } = useInsereRevisao();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: RevisaoFormData = { titulo, disciplina };

        try {
            const result = await sendRequest(formData);
            console.log('Dados enviados com sucesso:', result);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <input 
                type="textarea" 
                placeholder="Título da revisão" 
                className="form-input" 
                required 
                value={titulo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitulo(e.target.value)}
            />
            <div>
                <label htmlFor="ctnSelect1">Selecione a disciplina</label>
                <select 
                    id="ctnSelect1" 
                    className="form-select text-white-dark" 
                    required 
                    value={disciplina}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDisciplina(e.target.value)}
                >
                    <option>Open this select menu</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary !mt-6">
                Enviar
            </button>
        </form>
    );
}
