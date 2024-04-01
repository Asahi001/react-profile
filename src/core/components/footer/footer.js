import React, {useState} from "react";
import './footer.css'

export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [help, setHelp] = useState("");
  return (
    <>
      <div
        className="grid grid-cols-2 grid-flow-row gap-4 contPadding"
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
              onClick={() => {}}
              key="contactMe"
              className="w-40 text-2xl p-2 rounded-md submitBtn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
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
        <div className="imgBg">
          {/* <img src={minGif} alt="No Image Found" className="h-full w-full" /> */}
        </div>
      </div>
    </>
  );
}
