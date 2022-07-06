const Avatar = ({ url, className }) => {
    return (
        <img
            loading="lazy"
            src={url}
            alt=''
            className={`rounded-full h-10 transition duration-150 transform hover:scale-110 cursor-pointer ${className}`}
        />
    )
}

export default Avatar