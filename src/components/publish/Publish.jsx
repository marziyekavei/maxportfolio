import {publisData} from "./data"

const Publish = () => {
    return (
        <div className="mt-7 flex flex-col sm:justify-center items-center" id="Publish">
            <div className=""><p className="text-4xl font-bold mb-5">Journal article</p></div>
            {
                publisData.map(item => (
                    <div className="mb-5 sm:mb-8" key={item.id}>
                        <div className="flex flex-row items-center align-baseline mb-1">
                            <div className="h-3 w-3 rounded-full bg-blue-950"></div>
                            <p className="ml-1">{item.title}</p>
                        </div>
                        <div>
                            <p className="text-sm w-[300px] sm:w-[700px] text-justify">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Publish;