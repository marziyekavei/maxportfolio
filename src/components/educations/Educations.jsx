import { IoIosSchool, IoMdCheckmark } from 'react-icons/io';

const Educations = () => {
    return (
        <div className='flex flex-col ml-4 sm:ml-auto align-baseline sm:flex-row sm:justify-evenly sm:items-center h-[60vh] mt-7' id='Education'>
            <div className="grid justify-items-start">
                <p className='text-3xl mb-4 font-bold'>Education</p>
                <div className='flex justify-center items-center align-baseline'>
                    <IoIosSchool color='#172554'/>
                    <p className='text-xl ml-1'>Msc in genetics, 2024</p>
                </div>
                <p className='text-base ml-4 mb-7 mt-2'>University of Arak</p>
                <div className='flex justify-center items-center align-baseline'>
                    <IoIosSchool color='#172554'/>
                    <p className='text-xl ml-1'>Bsc in biotecnology, 2019</p>
                </div>
                <p className='text-base ml-4 mt-2'>University of Kashan</p>
            </div>

            <div className="grid justify-items-start">
                <p className='text-3xl mb-4 font-bold mt-5 md:mt-0'>Interests</p>
                <div className='flex justify-center items-center align-baseline'>
                    <IoMdCheckmark color='#172554' className='mb-3 mr-1'/>
                    <p className='mb-3 text-base'>bioanformatic</p>
                </div>
                <div className='flex justify-center items-center align-baseline'>
                    <IoMdCheckmark color='#172554' className='mb-3 mr-1'/>
                    <p className='mb-3 text-base'>data analyst</p>
                </div>
                <div className='flex justify-center items-center align-baseline'>
                    <IoMdCheckmark color='#172554' className='mb-3 mr-1'/>
                    <p className='mb-3 text-base'>develop package</p>
                </div>
                <div className='flex justify-center items-center align-baseline'>
                    <IoMdCheckmark color='#172554' className='mb-3 mr-1'/>
                    <p className='mb-3 text-base'>research</p>
                </div>
            </div>
        </div>
    )
}

export default Educations;