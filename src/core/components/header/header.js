import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { Resume } from "../documents/my-resume";

export default function Header() {
  const navigate = useNavigate();
  
  const navigation = [
    { name: "Resume", href: "#" },
    { name: "Contact Me", href: "#bottom" },
  ];
  const handelNavClick = (key) => {
    if (key === "Contact Me") {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (key === "Resume") {
      var arrBuffer = base64ToArrayBuffer(Resume?.base64Strng);
      var newBlob = new Blob([arrBuffer], { type: "application/pdf" });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      var data = window.URL.createObjectURL(newBlob);
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.href = data;
      link.download = "file.pdf";
      link.click();
      window.URL.revokeObjectURL(data);
      link.remove();
    }
  };

  function base64ToArrayBuffer(data) {
    var binaryString = window.atob(data);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  return (
    <div className="navBar flex justify-between">
      <div
        className="logo italic"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          navigate("/");
        }}
      >
        Jaffer Ali
      </div>
      <div className="navigation space-x-6 navButton self-center">
        {navigation.map((ele, index) => (
          <button
            className="border-2 p-3 rounded-md hover:bg-zinc-200 btHov"
            key={index}
            onClick={() => handelNavClick(ele.name)}
          >
            {ele.name}
          </button>
        ))}
      </div>
    </div>
  );
}
