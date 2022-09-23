const Header = (props) => {
  const { logo, alt } = props;
  return (
    <header>
      <img src={logo} alt={alt}/>
    </header>
  );
}

export default Header;