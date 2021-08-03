import { capitalize } from '../../utils/helpers'
import './styles.css'

function Article({ titleColor, title }) {
  /** TODO:
   * NOTA: Cambiar titleColor por nombre de colores e.g. red, blue, gray
   * Crear una funcion que consuma titleColor y que
   * basado en el nombre del color decida que clase poner.
   */
  return (
    <>
      <h1
        style={{ color: `${titleColor}` }}
        className={"article"}
      >
          {capitalize(title)}
      </h1>
    </>
  )
}

export default Article
