import { useState } from "react";
import emailjs from 'emailjs-com'

const Contactme = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        emailjs.send("service_2sdhwgj", "template_8wnxh79", formData, "z-pmKx2sRejKj6WyH")
            .then((response) => {
                console.log("succses", response)
            })
            .catch((error) => [
                console.log("faild", error)
            ])
    }

    return (
        <div className="mt-7 mb-7" id="Contactme">
            <div className="max-w-full mx-0 my-auto px-0 py-20px text-center text-white bg-fixed bg-cover bg-contactme-bg relative z-40">
                <div className="absolute bg-black h-full w-full opacity-60 -z-50"></div>
                <h2 className="p-4 text-5xl font-light pb">Contact me</h2>
                <div className="flex justify-center items-center">
                    <form onSubmit={handlesubmit} action="" className="w-full mt-5 mb-5">
                        <div className="flex flex-col lg:flex-row justify-evenly items-center">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="p-4 w-2/3 lg:w-1/4 mb-4 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-4 w-2/3 lg:w-1/4 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="p-4 mt-4 w-2/3 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200 text-white" />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="p-4 mt-4 w-2/3 h-48 rounded-t-md rounded-b-md bg-transparent border border-solid border-gray-200"  id="" ></textarea>
                        <button type="submit" className="w-2/3 mt-5 rounded-t-md rounded-b-md h-10 bg-white text-blue-950 font-bold">Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme