import './styles.css'

function Button({text, size, color}) {
    const buttonSize = size ? size : 'DefaultSize'
    const buttonColor = color ? color : 'DefaultColor'

    return (
        <button className={`Button ${buttonSize} ${buttonColor}`}>
            {text}
        </button> 
    )
}

export default Button