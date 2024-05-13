



import CadastrarRevisao from "./page";
import Link from 'next/link';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: 'Layouts',
};

const Layouts = () => {
    return (

        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Layouts</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-1">
                {/* Stack */}
               
         <div className='panel'>
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Adicionar novo conteúdo de revisão</h5>
            </div>
            <CadastrarRevisao/>

        </div>

               
            </div>
        </div>
    );
};

export default Layouts;
