const Icon = ({ path, name }) => {
    const imageClasses = `${name === 'Github' ? 'bg-[#333333] p-2': ''}  w-20 mx-auto`

    return (
        <div className='bg-gray-50 p-5 rounded-lg shadow-lg shadow-gray-400 hover:scale-110 duration-500'>
            <img className={imageClasses} src={path} alt={`${name} icon`} />
            <p className='mt-4'>{name}</p>
        </div>
    )
}

export default Icon;