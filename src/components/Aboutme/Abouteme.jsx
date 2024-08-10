import logo from '../../assets/avatar.png'

const Abouteme = () => {
    return (
        <div id='Abouteme' className='flex flex-col md:flex-row justify-evenly items-center max-w-900px h-300px mt-7 p-4'>
            <img src={logo} alt="" className='hidden md:flex w-80 h-96 rounded-full xl:flex' />
            <div className='max-w-lg mx-3'>
                <p className='text-lg font-medium sm:text-xl sm:font-bold'>Iam Mohammad(max) kavei</p>
                <p className='text-sm sm:text-base mt-2 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
            </div>
        </div>
    )
}

export default Abouteme;