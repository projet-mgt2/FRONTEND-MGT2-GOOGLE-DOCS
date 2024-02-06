import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faShare} from '@fortawesome/free-solid-svg-icons';
import TextEditor from "../../components/docs/texteditor";
import { useRouter } from 'next/router';

export default function Doc() {
  const router = useRouter();

  const goBack = () => {
    router.push("/home");
  }

    return (
        <div>
            <header className='flex justify-between items-center p-3 pb-1 bg-white'>
            <span className='cursor-pointer'>
                <FontAwesomeIcon icon={faBars} size="2x" style={{ color: 'blue' }} />
            </span> 
            <div className='flex-grow px-2'>
              
            <h2 className="ml-4 text-2xl font-semibold text-gray-600">Document sans titre</h2>
              <div className='flex items-center text-sm space-x-3  h-8 text-gray-600 ml-3'>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Fichier</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Edition</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Affichage</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Insertion</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Format</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Outils</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Extensions</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg'>Aide</p>
                <p className='option cursor-pointer hover:bg-gray-100
                  transition  duration-200 case-out p-2 rounded-lg' onClick={() => goBack()}>Home page</p>

            
              </div>
            </div> 
            <button className="bg-blue-500 hidden md:inline-flex h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faShare} className="mr-2" />
            Partager
            </button>
            <button className='ml-5 md:ml-5 h-20 w-20 border-0'>
            <div className='rounded-full overflow-hidden w-10 h-10 bg-gray-500'>
              <img src='' className='w-full h-full object-cover' />
            </div>
          </button>
           </header>
           <TextEditor/> 
        </div>
        
    );
}
