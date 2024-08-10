

const Skills = () => {
    return ( 
        <div className="flex flex-col justify-center items-center mt-7 h-full" id="Skills">
            <h1 className="ml-4 text-4xl font-bold">My Skills</h1>
            <div className="flex flex-col justify-center items-left mx-4 p-2 w-10/12">
                <p className="ml-3 mt-4 mb-2">R studio</p>
                <div class="bg-gray-400 w-full rounded-2xl">
                    <div class="text-right p-1 text-white w-4/5 bg-blue-950 rounded-2xl">80%</div>
                </div>

                <p className="ml-3 mt-4 mb-2">Linux</p>
                <div class="bg-gray-400 w-full rounded-2xl">
                    <div class="text-right p-1 text-white w-1/2 bg-blue-950 rounded-2xl">50%</div>
                </div>

                <p className="ml-3 mt-4 mb-2">Algorithm</p>
                <div class="bg-gray-400 w-full rounded-2xl">
                    <div class="text-right p-1 text-white w-2/3 bg-blue-950 rounded-2xl">65%</div>
                </div>

                <p className="ml-3 mt-4 mb-2">Python</p>
                <div class="bg-gray-400 w-full rounded-2xl">
                    <div class="text-right p-1 text-white w-3/4 bg-blue-950 rounded-2xl">70%</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;