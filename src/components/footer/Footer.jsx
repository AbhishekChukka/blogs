import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import skylineLogo from '../../assets/pngwing.com.png';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? '#30336b' : '#30336b' }}>
            {/* Left Content  */}
            <div className="container pl-8  py-3 mx-auto flex items-center sm:flex-row flex-col ml-2">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center  justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src={skylineLogo} alt="logo"
                    />
                    {/* logo text  */}
                    <span className="ml-3 text-xl text-white">
                        Skyline
                    </span>
                </div>

                {/* items  */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023 Syline
                    <a
                        href="/"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @Skyline
                    </a>
                </p>
                
              
            </div>
        </footer>

    )
}

export default Footer
