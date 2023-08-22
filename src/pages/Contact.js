import React from "react";
import FormContact from "../component/contact/FormContact"
const Contact = () => {

  return (
    <section className="bg-gray-900">
      <div className="m-3 text-[12px] text-gray-900 font-semibold md:text-sm justify-center">
        <FormContact/>
      </div>
    </section>
  );
};

export default Contact;