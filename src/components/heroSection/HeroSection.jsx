import { Typography } from '@material-tailwind/react'
import sdgImage from '../../assets/pngwing.com.png';
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'black' : 'white' }}>

            
            <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
              
                <main>
                    <div className="text-center">
                        <div className="mb-0">
                           
                            <div className="flex justify-center -mt-40">
                                <img src= {sdgImage} alt="" />
                            </div>

                           
                            <h1 className=' text-3xl text-white font-bold -mt-20'>SDG-11</h1>
                        </div>

                        
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                           Basic Discussions Page
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection
