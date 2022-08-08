import Image from 'next/image';

const Skill = ({logo, text}) => {

    return (
        <div className="hover:scale-125 duration-300">
            <div className='p-2 text-center '>
                <Image
                    src={logo}
                    width='35px'
                    height='35px'
                    alt='/'
                />
            </div>
            <div className='text-center mb-5 text-white  '>
                <p>{text}</p>
            </div>
        </div>
       
    )
}

export default Skill