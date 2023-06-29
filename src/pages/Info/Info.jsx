import Sidebar from "../../components/Sidebar/Sidebar";
import cvfile from "../../assets/cvfile.pdf";
import { skilssData } from "../../data/skills";
import "./Info.css";

const Info = () => {
  return (
    <section className="about">
      <div className="main-container-inner">
        <div className="left">
          <h2 className="heading">about me.</h2>
          <p>
            I am a very ambitious full stack web developer looking for a role in
            an established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects.
          </p>
          <p>
            I am quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>

          <div className="view-cv">
            <a href={cvfile} target="blank" rel="noreferrer">
              <input type="button" value="view my cv" />
            </a>
          </div>
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>

      <div className="skills-heading">
        <h4>My experience</h4>
      </div>
      <section className="skills-cards">
        {skilssData.map((s) => (
          // eslint-disable-next-line react/jsx-key
          <div className="skills-card" key={s.id}>
            <img src={s.image} className="skills-icon" />
            <p>{s.title}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Info;
