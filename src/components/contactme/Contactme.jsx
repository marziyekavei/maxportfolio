

const Contactme = () => {
    return (
        <div className="mt-7 mb-7" id="Contactme">
            <div className="max-w-full mx-0 my-auto px-0 py-20px text-center text-white bg-fixed bg-cover bg-contactme-bg relative z-40">
                <div className="absolute bg-black h-full w-full opacity-60 -z-50"></div>
                <h2 className="p-4 text-5xl font-light pb">Contact me</h2>
                <div className="flex justify-center items-center">
                    <form action="" className="w-full mt-5 mb-5">
                        <div className="flex justify-evenly items-center">
                            <input className="p-4 w-1/4  rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" type="text" placeholder="Fullname" />
                            <input className="p-4 w-1/4 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" type="email" placeholder="Email" />
                        </div>
                        <input className="p-4 mt-4 w-2/3 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" type="text" placeholder="Subject" />
                        <textarea className="p-4 mt-4 w-2/3 h-48 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200" name="" id="" placeholder="Description"></textarea>
                        <button className="w-2/3 mt-5 rounded-t-md rounded-b-md h-10 bg-gray-200 text-black font-bold">Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme