import React from "react";
import FormComponent from "components/FormComponent";
import ContainerComponent from "components/container/TourContainerComponent";

function ContactPage() {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact Us",
    },
  ];

  const formArray = [
    {
      id: "name",
      label: "Your Name (required)",
    },
    {
      id: "email",
      type: "email",
      label: "Your Email (required)",
    },
    {
      id: "subject",
    },
    {
      id: "message",
      type: "textarea",
      label: "Your Message",
    },
  ];

  const text = "Send";

  return (
    <ContainerComponent bread={nav} className="bg">
      <div className="container">
        <div className="row app-py-3">
          <div className="col l3 s12">
            <h1>Contact Us</h1>

            <h2>
              <span className="material-icons notranslate">home</span>
              Address
            </h2>
            <p>
              PLOT 1015, GWANDAL CENTRE, FRIA CLOSE, ADEMOLA ADETOKUNBO
              CRESCENT, WUSE II, ABUJA.
            </p>
            <br />

            <hr />

            <h2>
              <span className="material-icons notranslate">phone</span>
              Phone
            </h2>

            <p>
              Mobile: (+234) 805 321 8387
              <br /> Hotline: (+234) 9093267960
              <br /> 07066854208
            </p>
            <br />

            <hr />
            <h2>
              <span className="material-icons notranslate">mail_outline</span>
              Email
            </h2>

            <p>Info@migaphael.com customercare@migaphael.com </p>
          </div>
          <div className="col l1 s12"></div>
          <div className="col l8 s12">
            <h1>Tell Us Your Message</h1>
            <FormComponent {...{ formArray, text }} />
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default ContactPage;
