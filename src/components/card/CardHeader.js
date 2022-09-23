import LOGO from '../../images/logo.svg';

const CardHeader = (props) => {
  const { header } = props;
  return (
    <h2 className="CardHeader">
      <img src={LOGO} alt="circle brand"/>
      <div>
        {header.split(' ').map((key, index) => 
        <p key={key}id={"header"+ index}>{key}</p>)}
      </div>
    </h2>
  );
}

export default CardHeader