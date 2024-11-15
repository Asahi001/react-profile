import React, { useEffect, useState } from "react";
import "./footer.css";
import axios from "axios";
import Loader from "../loader";
import Logo from "../../assets/images/Logo.png";

export default function Footer() {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    help: "",
    touched: { name: false, email: false },
  });
  const [showMsg, setShowMsg] = useState(false);
  const [message, setMsg] = useState({});
  const [loading, setLoading] = useState(false);

  // need to change it to before deploying
  // const urlUsed = "http://localhost:5000";
  const urlUsed = process.env.REACT_APP_SERVER_URL;

  async function postDetails() {
    setLoading(true);
    await axios
      .post(`${urlUsed}/details`, {
        name: formState?.name,
        email: formState?.email,
        message: formState?.help,
      })
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
          setShowMsg(true);
        }, 1000);
        setMsg({
          status: "success",
          msg: "We have sucessfully recieved your message, Thank you for reaching out to us",
        });
        setFormState({
          name: "",
          email: "",
          help: "",
          touched: { name: false, email: false },
        });
        setTimeout(() => {
          setShowMsg(false);
        }, 3000);
      })
      .catch((err) => {
        // console.error("Got Error While adding Item", err);
        setTimeout(() => {
          setLoading(false);
          setShowMsg(true);
        }, 1000);
        setMsg({
          status: "failed",
          msg: `We got error while submitting, Please try after some time, ${err}`,
        });
        setTimeout(() => {
          setShowMsg(false);
        }, 3000);
      });
  }

  function checkForVlidation() {
    setEnableSubmit(
      formState?.name &&
        formState?.email &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState?.email)
    );
  }

  useEffect(() => {
    checkForVlidation();
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postDetails();
  };
  return (
    <>
      {loading && <Loader />}
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 grid-flow-row gap-4 contPadding"
        id="bottom"
      >
        <div>
          <div className="getinToch">Get in Touch </div>
          <div className="text-2xl pl-24 pr-8 text-zinc-400">
            I am looking for an oppurtunity for learning and improving my
            skills, along with developing the most desirable and creative web
            pages.
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={formState?.name}
                placeholder="Name"
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onBlur={(e) => {
                  setFormState({
                    ...formState,
                    touched: { ...formState?.touched, name: true },
                  });
                }}
                className="w-full pl-4 rounded-md"
              />
              {formState?.touched?.name && !formState?.name && (
                <span className="text-red-500 text-sm">Required *</span>
              )}
            </div>
            <div>
              <input
                type="email"
                value={formState?.email}
                placeholder="Email"
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onBlur={(e) => {
                  setFormState({
                    ...formState,
                    touched: { ...formState?.touched, email: true },
                  });
                }}
                className="w-full pl-4 rounded-md"
              />
              {formState?.touched?.email && !formState?.email && (
                <span className="text-red-500 text-sm">Required *</span>
              )}
              {formState?.touched?.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState?.email) && (
                  <span className="text-red-500 text-sm">
                    Please enter valid Email address
                  </span>
                )}
            </div>
            <textarea
              name="help"
              cols="40"
              rows="4"
              className="w-full pl-4 px-2 rounded-md"
              value={formState?.help}
              placeholder="How can I Help?"
              onChange={(e) =>
                setFormState({ ...formState, help: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className={`lg:w-40 md:w-full text-2xl p-2 rounded-md ${
                !enableSubmit
                  ? "bg-gray-500 hover:cursor-not-allowed"
                  : "bg-slate-300 hover:cursor-pointer"
              }`}
              disabled={!enableSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {showMsg && (
        <div className="flex messagebox">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 32 32"
            fill="orange"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-alert-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg> */}
          {message?.status === "success" ? (
            <span className="lg:text-2xl md:text-xl pl-24 pr-8 text-green-500 w-full">
              {message?.msg}
            </span>
          ) : (
            <span className="lg:text-2xl md:text-xl pl-24 pr-8 text-red-500 w-full">
              {message?.msg}
            </span>
          )}
        </div>
      )}
      <div>
        <div className="footer grid grid-cols-4 ">
          <div className="col-span-3">
            <div className="title italic">My Social Links</div>
            <div className="icons flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="#ddd0c8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook border-4 p-2 hover:cursor-pointer hover:bg-zinc-200"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="#ddd0c8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram border-4 p-2 hover:cursor-pointer hover:bg-zinc-200"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="#ddd0c8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail border-4 p-2 hover:cursor-pointer hover:bg-zinc-200"
                onClick={() => {
                  window.location = "mailto:jafferali787@gmail.com";
                }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <p className="text-xl px-24 pt-20 pb-10 text-zinc-400">
              © 2024 Jaffer Ali
            </p>
          </div>
          <img src={Logo} alt="No Image Found" className="w-1/2 h-1/2"></img>
        </div>
        {/* <div className="imgBg">
          <img src={minGif} alt="No Image Found" className="h-full w-full" />
        </div> */}
      </div>
    </>
  );
}
