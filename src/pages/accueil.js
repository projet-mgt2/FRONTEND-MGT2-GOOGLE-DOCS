import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faEllipsisV, faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; 

const Accueil = () => {
  const handleSwitchApp = (appName) => {
    console.log(`Switch to ${appName}`);
  };

  const handleLogout = () => {
    console.log('Logout or switch account');
  };

  return (
    <section>
      <header className='sticky top-0 flex items-center justify-between px-4 shadow-md z-10'>
        <div className='flex items-center'>
          <button className='h-20 w-20 border-0'>
            <FontAwesomeIcon icon={faBars} size="2x" style={{ color: 'blue' }} />
          </button>
          <h1 className='ml-2 md:inline-flex hidden text-gray-700 text-2xl'>Docs</h1>
        </div>

        <div className='mx-5 md:-20 flex items-center px-5 py-2 bg-gray-100 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
          <FontAwesomeIcon icon={faSearch} className='text-gray-400 mr-3' />
          <input
            type='text'
            placeholder='Search'
            className='flex-grow px-5 text-base bg-transparent outline-none w-95'
          />
        </div>

        <div className='flex items-center'>
          <button className='ml-5 md:ml-5 h-20 w-20 border-0' onClick={() => handleSwitchApp('GoogleForms par exemple')}>
            <FontAwesomeIcon icon={faEllipsisV} size="2x" />
          </button>

          <button className='ml-5 md:ml-5 h-20 w-20 border-0' onClick={handleLogout}>
            <div className='rounded-full overflow-hidden w-10 h-10 bg-gray-500'>
              <img src='/path/to/your/image.jpg' alt='Logout' className='w-full h-full object-cover' />
            </div>
          </button>
        </div>
      </header>

      <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
                <FontAwesomeIcon icon={faFileAlt} size="10x" color="gray" />
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">Blank</p>
            </div>

            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
                {/* <Image
                  src="" 
                  width={300} 
                  height={200} 
                       className="rounded-md shadow-md"/> */}
                
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">CV</p>
            </div>

            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
              
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">CV</p>
            </div>

            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
              
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">LETTRE</p>
            </div>
            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
                
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">PROPOSITION</p>
            </div>
            <div className="mr-4 mb-4">
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 flex items-center justify-center">
               
              </div>
              <p className="ml-2 font-semibold text-sm text-gray-700">BROCHURE</p>
            </div>

          </div>

        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-medium flex-grow">My documents</h2>
          <p className="mr-4">Date Created</p>
          <FontAwesomeIcon icon={faFolder} size="3x" color="gray" />
        </div>
      </div>
      </section>
    </section>
  );
}

export default Accueil;
