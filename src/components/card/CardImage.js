const CardImage = (props) => {
  const { image, image_alt} = props;
  return (
    <img className="CardImage" src={image} alt={image_alt} />
  );
}

export default CardImage;