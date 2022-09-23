import './scss/style.scss';
import LOGO from './images/logo.svg';
import CARD_IMG from './images/hero-mobile.jpg';

import Header from './components/Header';
import Card from './components/card/Card';

const App = () => {
  return (
    <div className="App">
      <Header logo={LOGO} alt="circle brand"/>
      <Card image={CARD_IMG} image_alt="woman posing for apparel" header={"WE'RE COMING SOON"} content="Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with anouncements and our launch deals."/>
    </div>
  );
}

export default App;
