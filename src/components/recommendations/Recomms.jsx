import { useState, useEffect } from 'react';
import { recommendations } from './data'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const Recomms = () => {

    const [people, setPeople] = useState(recommendations);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [index])

    return (
        <div className='overflow-hidden flex justify-center items-center h-[100vh] sm:h-[80vh] bg-blue-950 mt-7'>
            <div className='relative m-auto'>
                <div className="overflow-hidden py-0 px-3 flex justify-center items-center relative w-[70vh] h-[800px] sm:w-[100vh] lg:w-[150vh] sm:h-[450px]">
                    {
                        recommendations.map((person, personIndex) => {
                            const { id, name, title, img, disc } = person;

                            let position = "nextslide";
                            if (personIndex === index) {
                                position = "activeslide";
                            }
                            if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                                position = "lastslide";
                            }

                            return (
                                <article key={id} className={`overflow-hidden absolute top-0 left-0 w-full h-[700px] py-0 px-24 sm:h-full flex flex-col justify-center items-center transition-all ease-in-out duration-300 ${position}`}>
                                    <img src={img} alt="" className='size-32 mt-3 rounded-full' />
                                    <h2 className='mt-3 text-justify text-slate-100'>{name}</h2>
                                    <p className='text-slate-200 mt-2'>{title}</p>
                                    <p className='text-xs sm:text-base mt-3 w-[370px] sm:w-[700px] lg:px-1 text-slate-200 text-justify'>{disc}</p>
                                    <button className='w-20 h-9 mt-5 rounded-xl bg-slate-100 text-blue-950'>Email</button>
                                </article>
                            )
                        })
                    }

                </div>
                <IoIosArrowDropleftCircle size={30} onClick={() => setIndex(index + 1)} className='hidden md:flex text-white absolute left-0 cursor-pointer' />
                <IoIosArrowDroprightCircle size={30} onClick={() => setIndex(index - 1)} className='hidden md:flex text-white absolute right-0 cursor-pointer' />

            </div>

        </div>
    )
}

export default Recomms;