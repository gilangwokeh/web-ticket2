import React, { useState } from "react";

const FormContact = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [lastStep, setLastStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };



  const nextStep = (e) => {
    if (step < 4) {
      setLastStep(step === 1);
      setStep(step + 1);
    } else {
      setSubmitted(true);
      window.location.reload();
    }
    e.preventDefault();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleBack = () => {
    setStep(lastStep);
  };

  return (
    <>
        <main className="flex-grow overflow-y-auto flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full my-5 sm:w-[600px] lg:w-[900px]">
              <h2 className="text-2xl font-semibold mb-4">Formulir Contact</h2>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded my-3"
                onClick={toggleForm}
              >
                {showForm ? "Tutup Form" : "Buka Form"}
              </button>

              {showForm && (
                <form action={submitted ? "your-submit-url" : "#"}>
                  {step === 1 && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          COMPANY NAME
                        </label>
                        <input
                          type="text"
                          id="COMPANY NAME"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="Masukkan COMPANY NAME"
                        />
                      </div>
                      <div className="mb-4">
                        <acticle className="flex">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 my-4 mr-3"
                          >
                            CONTACT
                          </label>
                          <input
                            type="text"
                            id="STREET"
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                            placeholder="STREET.. ALAMAT LENGKAP.."
                          />
                          <input
                            type="text"
                            id="STREET 2"
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                            placeholder="STREET 2...ALAMAT LENGKAP"
                          />
                        </acticle>
                        <article className="flex ml-[76px]">
                          <input
                            type="text"
                            id="CITY"
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                            placeholder="CITY"
                          />
                          <input
                            type="text"
                            id="STAGE "
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                            placeholder="STAGE"
                          />
                          <input
                            type="text"
                            id="ZIP"
                            className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                            placeholder="ZIP"
                          />
                        </article>
                        <input
                          type="text"
                          id="COUNTRY"
                          className="ml-[76px] mt-1 px-4 py-2 w-60 sm:w-96 border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="COUNTRY"
                        />
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="NPWP"
                          className="block text-sm font-medium text-gray-700"
                        >
                          NPWP
                        </label>
                        <input
                          type="text"
                          id="NPWP"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="Masukkan NPWP"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="JOB POSITION"
                          className="block text-sm font-medium text-gray-700"
                        >
                          JOB POSITION
                        </label>
                        <input
                          type="text"
                          id="JOB POSITION"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="Masukkn JABATAN ANDA"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="PHONE"
                          className="block text-sm font-medium text-gray-700"
                        >
                          PHONE
                        </label>
                        <input
                          type="number"
                          id="PHONE"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="Masukkan PHONE/NO.TELP.."
                        />
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <div className="mb-4">
                        <label
                          htmlFor="EMAIL"
                          className="block text-sm font-medium text-gray-700"
                        >
                          EMAIL
                        </label>
                        <input
                          type="email"
                          id="EMAIL"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="Masukkan EMAIL"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="WEBSITE"
                          className="block text-sm font-medium text-gray-700"
                        >
                          WEBSITE
                        </label>
                        <input
                          type="text"
                          id="WEBSITE"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="https://google.com"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor=" TITLE"
                          className="block text-sm font-medium text-gray-700"
                        >
                          TITLE
                        </label>
                        <input
                          type="text"
                          id=" TITLE"
                          className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                          placeholder="e.g master"
                        />
                      </div>
                    </>
                  )}
                  <div className="flex justify-between">
                    {step > 3 && (
                      <button
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                        onClick={handleBack}
                        type="button"
                      >
                        Back
                      </button>
                    )}
                    {step < 4 && (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={(e) => nextStep(e)}
                        type="button"
                      >
                        Next
                      </button>
                    )}
                    {step === 4 && !submitted && (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setSubmitted(true)}
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
        </main>
    </>
  );
};

export default FormContact;
