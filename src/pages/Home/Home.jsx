import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-container-inner">
        <div className="left">
          <h1>welcome.</h1>
          <div className="about-text ">
            <p>
              My name is Daiva, I am a full-stack developer based in Lithuania.
              I have developed many types of full-stack applications to
              Ecommerce booking platforms.
            </p>
            <p>
              I am passionate about cutting edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX
            </p>
          </div>
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
