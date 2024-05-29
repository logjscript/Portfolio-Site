const Icon = ({ path, name }) => {
    const imageClasses =  'w-full max-w-20 sm:w-20 mx-auto';

    return (
        <div className='border-box bg-gray-50 p-3 sm:p-5 rounded-lg shadow-lg shadow-gray-400 hover:scale-110 duration-500'>
            <img className={imageClasses} src={path} alt={`${name} icon`} />
            <p className='mt-4 text-sm sm:text-xl'>{name}</p>
        </div>
    )
}

export default Icon;