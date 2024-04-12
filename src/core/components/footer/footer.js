import React, { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  return (
    <>
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
          <form className="space-y-4">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-4 rounded-md"
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-4 rounded-md"
            />
            <textarea
              name="help"
              cols="40"
              rows="4"
              className="w-full pl-4 px-2 rounded-md"
              value={help}
              placeholder="How can I Help?"
              onChange={(e) => setHelp(e.target.value)}
            ></textarea>
            <button
              type="button"
              onClick={() => {
                setShowMsg(true);
                setTimeout(() => {
                  setShowMsg(false);
                }, 20000);
              }}
              key="contactMe"
              className="w-40 text-2xl p-2 rounded-md submitBtn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {showMsg && (
        <div className="flex messagebox">
          <svg
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
          </svg>
          <span className="text-2xl pl-24 pr-8 text-orange-400 w-full">
            Thank you for reaching out to us, we are sorry for the inconvenience
            caused as this service is still Build in progress, please post us
            your insight via Mail link from social links, we deeply value your
            insights. once again sorry for the inconvenience caused.
          </span>
        </div>
      )}
      <div className="flex">
        <div className="footer">
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
        {/* <div className="imgBg">
          <img src={minGif} alt="No Image Found" className="h-full w-full" />
        </div> */}
      </div>
    </>
  );
}
