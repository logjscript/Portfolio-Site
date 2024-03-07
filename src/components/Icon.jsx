const Icon = ({ path, name }) => {
    const imageClasses = `${name === 'Github' ? 'bg-[#333333] p-2': ''}  w-20 mx-auto`

    return (
        <div className='bg-[#EEEDE2] shadow-lg p-5 shadow-[#CDCAA7] hover:scale-110 duration-500'>
            <img className={imageClasses} src={path} alt={`${name} icon`} />
            <p className='mt-4'>{name}</p>
        </div>
    )
}

export default Icon;