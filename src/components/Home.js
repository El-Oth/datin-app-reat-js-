import Nav from "./Nav";
import AuthModal from "./AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal ] = useState(false);
  const [isSignUp, setIsSignUp ] = useState(true);
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "sign out" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />}
        {/* <AuthModal /> */}
      </div>
    </div>
  );
};
export default Home;
