import PropTypes from 'prop-types';

// Este componente muestra un solo GIF dentro de una tarjeta (<div className="card">).
export const GifItem = ({title, url}) => {

    return (
    <div className="card">

        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

/* Tarea

1. Añadir PropTypes
  a. title obligatorio
  b. url obligatorio

2. Evaluar el sanpshot

*/

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}