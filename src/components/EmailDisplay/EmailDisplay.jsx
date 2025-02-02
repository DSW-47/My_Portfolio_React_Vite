
import emailImg from '@/assets/img/icons/mail.png'
import { useRef } from 'react';

const EmailDisplay = ({ contactEmail }) => {
  const emailRef = useRef(null);

  const copyToClipboard = () => {
    emailRef.current.select();
    document.execCommand('copy');
  };
  
  return(
    <section className=" bg-container_color6 mt-20 py-12 rounded-[2rem] text-center px-9 lg:px-10 border-[1.5px] border-solid border-border_color1 ">
        
      {/* title */}
      <h3 className="text-[2.2rem] font-bold mb-4 text-highlighted_text_color">¿Apresurado? Copia mi email</h3>
      
      <img src={emailImg} alt="email_img" className='h-40 mx-auto mb-6' />
      
      {/* description */}
      <p className='w-10/12 mx-auto'>Con un rápido click puedes guardarlo donde tu quieras ¡Espero escuchar de ti pronto! 😉</p>
      {/* I look forward to hearing from you soon! */}
    
      {/* email input and copy button */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mt-8">
        <div className='w-full transparentInput bg_white'>
          
          {/* email input */}
          <input
            className='bg-opacity-[4%] text-center font-[700]'
            name={'contactEmail'}
            readOnly
            ref={emailRef}
            type={'text'} 
            value={contactEmail}
          />
          
          </div>
          
          {/* copy button */}
          <div className='mt-3 lg:mt-0'>
            <button
              className="button_transparent_rounded" 
              onClick={copyToClipboard}
              >
              <span className='hover:text-black'>
                COPIAR
              </span>
            </button>
          </div>
          
      </div>
    </section>
  );
}

export default EmailDisplay;