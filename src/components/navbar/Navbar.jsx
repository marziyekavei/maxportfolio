import { useState, useRef, useEffect } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import { FaDna } from 'react-icons/fa';

const Navbar = () => {

    //state to manage nav visibility
    const [nav, setNav] = useState(false);

    //ref for the mobile nav
    const navRef = useRef(null);

    //toggle function to handle nav items
    const handleNav = () => {
        setNav(!nav);
    }

    //function to handle clicks outside the nav menu
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setNav(false);
        }
    }

    //useEffect to add and remove event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    //array nav items
    const navItem = [
        { id: 1, text: "Aboute me", href: "#Abouteme" },
        { id: 2, text: "Education", href: "#Education" },
        { id: 3, text: "Publish", href: "#Publish" },
        { id: 4, text: "Skills", href: "#Skills" },
        { id: 5, text: "Contact me", href: "#Contactme" },
    ]

    return (
        <div className="h-10 sm:h-auto flex justify-evenly items-center bg-blue-950 text-white">
            {/*name*/}
            <p className="text-xl font-medium sm:font-normal not-italic">Max Kavei</p>
            {/*desctop menu*/}
            <div className="hidden md:flex max-w-4xl sm:p-3 mx-0 my-auto px-0 py-20px h-32 justify-center items-center">
                <ul className="flex justify-center items-center">
                    {
                        navItem.map(item => (
                            <li key={item.id} className="ml-5 text-lg"><a className="text-lg hover:border-2  hover:border-white md:font-medium p-2 rounded-xl" href={item.href}>
                                {item.text}
                            </a></li>
                        ))
                    }
                </ul>
            </div>
            {/*logo*/}
            <FaDna color='#fff' className='size-6 h-6 rotate-45 hidden md:flex' />

            {/* mobile nav icon */}
            <div onClick={handleNav} className='flex md:hidden cursor-pointer'>
                {nav ?
                    <IoClose color='#fff' className='size-8' /> : <TiThMenu color='#fff' className='size-8' />
                }
            </div>
            {/* mobile nav menu*/}
            <ul
                ref={navRef}
                className={
                    nav ?
                        'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-blue-950 ease-in-out duration-500 z-50' :
                        'ease-in-out duration-500 w-[60%] fixed bottom-0 top-0 left-[-100%] z-50'
                }>
                {
                    navItem.map(item => (
                        <li className='p-4 border-b rounded-xl text-white hover:bg-white duration-300 hover:text-blue-950 cursor-pointer border-slate-400'
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