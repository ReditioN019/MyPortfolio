import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const MenuContact = () => {
  return (
      <div className='flex justify-center sm:justify-start gap-6 py-5 '>
          <a
              href='https://www.linkedin.com/in/seba-rojo/'
              target='_blank'
              rel='noreferrer'
          >
              <div className='rounded-full bg-white p-3 md:p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#64ffda]'>
                  <FaLinkedinIn size={25} color='black'/>
              </div>
          </a>
          <a
              href='https://github.com/ReditioN019'
              target='_blank'
              rel='noreferrer'
          >
              <div className='rounded-full bg-white p-3 md:p-3  cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#64ffda]'>
                  <FaGithub size={25}  color='black'/>
              </div>
          </a>
      </div>
  )
}

export default MenuContact