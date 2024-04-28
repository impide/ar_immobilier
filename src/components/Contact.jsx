import React, { useState } from "react";

import styles, { layout } from "../style";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

const Contact = () => {
  return (
    <section id="contact" className={`${layout.section} justify-center`}>
      <form
        action="https://getform.io/f/1cab2d2e-a040-4cb6-a8c0-686b9a1b31e8"
        method="POST"
        encType="multipart/form-data"
        className="w-full"
      >
        <h2 className={styles.heading2}>Contact</h2>
        <div className="w-100 flex flex-col ">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="formControl">
              <input
                className="border-2 rounded-lg p-3 border-blue-300 w-full"
                type="text"
                placeholder="Nom"
                name="name"
                required
              />
            </div>

            <div className="formControl">
              <input
                className="border-2 rounded-lg p-3 border-blue-300 w-full"
                type="text"
                placeholder="Prénom"
                name="firstName"
                required
              />
            </div>
          </div>
          <div className="py-2">
            <input
              className="border-2 rounded-lg p-3 border-blue-300 w-full"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="py-2">
            <input
              className="border-2 rounded-lg p-3 border-blue-300 w-full"
              type="tel"
              name="phone"
              placeholder="Numéro de téléphone"
              required
            />
          </div>

          <div className="py-2">
            <textarea
              className="border-2 rounded-lg p-3 border-blue-300 w-full"
              type="text"
              name="message"
              placeholder="Message"
              rows={5}
              required
            />
          </div>

          <div className="py-2 w-100 flex justify-center">
            <button
              type="submit"
              className="py-4 px-6 font-poppins font-medium text-[18px] w-2/5 text-primary bg-blue-gradient rounded-[10px] outline-none "
            >
              Me Contacter
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
