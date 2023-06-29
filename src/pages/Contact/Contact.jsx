import Sidebar from "../../components/Sidebar/Sidebar";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2tt3v8b",
        "template_ny571gj",
        e.target,
        "g7uU6nFYhjakuDgRG"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    document.querySelector("form").reset();
  };

  return (
    <section className="contact">
      <div className="main-container-inner">
        <div className="left">
          <h2 className="heading">contact me.</h2>
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>

      <div className="row">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="name surname*"
            className="box"
          />
          <input
            type="email"
            name="user_email"
            placeholder="email address *"
            className="box"
          />
          <input
            type="text"
            name="subject"
            placeholder="subject *"
            className="box"
          />
          <textarea
            placeholder="message *"
            name="message"
            cols="20"
            rows="5"
            className="box"
          ></textarea>
          <input type="submit" value="send message" />
        </form>
        <div className="map">
          <iframe
            className="gmap_iframe"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Vilnius Savanorių&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>

          <style></style>
        </div>
      </div>
    </section>
  );
};

export default Contact;
