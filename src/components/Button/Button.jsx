import './styles.css'

function Button({text, size, color}) {
    const buttonSize = size ? size : 'Default'
    const buttonColor = color ? color : 'Default'

    return (
        <button className={`Button ${buttonSize} ${buttonColor}`}>
            {text}
        </button> 
    )
}

export default Button