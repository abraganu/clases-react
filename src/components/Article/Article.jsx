import { capitalize } from '../../utils/helpers'
import './styles.css'

function Article({ titleColor, title }) {
  return (
    <>
      <h1
        style={{ color: `${titleColor}` }}
        className="article"
      >
          {capitalize(title)}
      </h1>
    </>
  )
}

export default Article
