import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import { FaDna } from 'react-icons/fa';

const Navbar = () => {

    //state to manage nav visibility
    const [nav, setNav] = useState(false);

    //toggle function to handle nav items
    const handleNav = () => {
        setNav(!nav);
    }

    //array nav items
    const navItem = [
        { id: 1, text: "Aboute me", href: "#Abouteme" },
        { id: 2, text: "Education", href: "#Education" },
        { id: 3, text: "Projects", href: "#Projects" },
        { id: 4, text: "Skills", href: "#Skills" },
        { id: 5, text: "Contact me", href: "#Contactme" },
    ]

    return (
        <div className=" flex justify-evenly items-center mt-3">
            {/*name*/}
            <p className="text-base sm:font-normal not-italic">Max Kavei</p>
            {/*desctop menu*/}
            <div className="hidden md:flex max-w-4xl sm:p-3 mx-0 my-auto px-0 py-20px h-32 justify-center items-center ">
                <ul className="flex justify-center items-center">
                    {
                        navItem.map(item => (
                            <li key={item.id} className="ml-5 text-lg"><a className="text-lg text-blue-950 hover:text-white hover:bg-blue-950 md:font-medium p-2 rounded-xl" href={item.href}>
                                {item.text}
                            </a></li>
                        ))
                    }
                </ul>
            </div>
            {/*logo*/}
            <FaDna color='#172554' className='size-6 h-6 rotate-45 hidden md:flex' />

            {/* mobile nav icon */}
            <div onClick={handleNav} className='flex md:hidden cursor-pointer'>
                {nav ?
                    <IoClose color='#172554' className='size-8' /> : <TiThMenu color='#172554' className='size-8' />
                }
            </div>
            {/* mobile nav menu*/}
            <ul className={
                nav ?
                    'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-blue-950 ease-in-out duration-500 z-50' :
                    'ease-in-out duration-500 w-[60%] fixed bottom-0 top-0 left-[-100%] z-50'
            }>
                <IoClose color='white' className='size-8 cursor-pointer ml-2' onClick={handleNav}/>
                {
                    navItem.map(item => (
                        <li className='p-4 border-b rounded-xl text-slate-200 hover:bg-white duration-300 hover:text-blue-950 cursor-pointer border-slate-400'
                            key={item.id}>
                            <a href={item.href}>
                                {item.text}
                            </a>

                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Navbar;