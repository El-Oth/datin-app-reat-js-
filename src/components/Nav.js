// import logo from "../img/tinder-logo.png";
// import whiteLogo from "../img/tinder-white.png";
const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {
  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }
  return (
    <nav>
      <div className="logo-container">
        <h1>🔥Bou</h1>
        {/* <img className="logo" src={minimal ? logo : whiteLogo} /> */}
      </div>
      {!authToken && !minimal && <button className="nav-button"
       onClick={handleClick} disabled={showModal}> log in</button>}
    </nav>
  );
};
export default Nav;
