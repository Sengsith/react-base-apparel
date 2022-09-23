import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardForm from './CardForm';
import Attribution from '../Attribution';

const Card = (props) => {
  const {header, content, image, image_alt} = props;

  return (
    <main className="Card">
      <CardImage image={image} image_alt={image_alt}/>
      <div className="CardInner">
        <CardHeader header={header} />
        <CardContent content={content} />
        <CardForm />
        <Attribution />
      </div>
    </main>
  );
}

export default Card;