import Image from '../Image/Image'

function Card({ imgSrc, cardTitle, cardText }) {
    return (
        <div className="card" style={{width: '18rem',}}>
            <Image imgSrc={imgSrc} imgAlt="a11y" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href="!#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card