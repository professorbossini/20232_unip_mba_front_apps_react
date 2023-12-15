const Imagem = (props) => {
  return (
    <div className={`${props.imgStyle} flex justify-content-center`}>
      <img className="border-round" src={props.pic} alt={props.alt} />
    </div>
  )
}


export default Imagem