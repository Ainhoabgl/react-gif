// Este componente muestra un solo GIF dentro de una tarjeta (<div className="card">).
export const GifItem = ({title, url}) => {

    return (
    <div className="card">

        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
