import React, { useContext, useEffect } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useNavigate } from 'react-router-dom';
// Components

// Images
import SvgBackground from '../../assets/images/pages/endless_constellation.svg';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='grid font-poppins h-h1 overflow-hidden'>
      <div
        style={{
          backgroundImage: `url(${SvgBackground})`,
          backgroundSize: '200px',
          backgroundRepeat: '',
        }}
        className='grid h-full w-full px-2 py-2'
      >
        <main className='grid grid-rows-reg h-full bg-[#00000040]'>
          <header className='py-4 grid h-full justify-center'>
            <article className='bg-gray-100 rounded-lg text-center w-fit overflow-hidden px-4 py-4 outline outline-4 outline-black'>
              <div className='grid items-center justify-center'>
                <h1 className='text-3xl font-bold text-main-colour mt-1'>
                  Green Mine
                </h1>
              </div>
            </article>
          </header>

          <section className='grid w-full h-full mb-10 overflow-hidden p-1 mt-20'>
            <article className='grid w-1/2 mx-auto p-2'>
              <div className='bg-pink-100 py-8 px-4 outline outline-1 h-fit outline-black rounded-lg shadow-xl'>
                <div className='text-center'>
                  <h2 className='text-2xl'>
                    Welcome to the{' '}
                    <strong className='text-main-colour'>Green Mine</strong>
                  </h2>
                </div>
                <div className='mt-4 px-4'>
                  <p>
                    <span className='italic'>Allow access</span> to cryptomining
                    in your browsers security. And you can help us earn money
                    for the environment just by having your computer on!
                  </p>
                  <div className='mt-6'>
                    <p className='text-sm'>
                      By connecting millions of people around the world we can
                      passively earn huge amounts of money to do a huge amount
                      of good with
                    </p>
                  </div>
                  <div className='mt-16 bg-main-colour rounded-lg w-full text-center'>
                    <h3 className='text-xl font-semibold'>RUNNING</h3>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
