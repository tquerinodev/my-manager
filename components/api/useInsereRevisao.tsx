import { useState } from 'react';

// Definindo uma nova interface para os dados do formulário
interface RevisaoFormData {
    titulo: string;
    disciplina: string;
}

function useInsereRevisao() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const sendRequest = async (formData: RevisaoFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            console.log(formData);
            const response = await fetch('https://www.missaodelta.com.br/class_revisao.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
                

                
            });
            if (!response.ok) {
                throw new Error('Falha na requisição: ' + response.statusText);
            }
            const data = await response.json();
            setIsLoading(false);
            return data;
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Ocorreu um erro desconhecido');
            }
            setIsLoading(false);
            throw error;
        }
    };

    return { sendRequest, isLoading, error };
}

export default useInsereRevisao;