import { useState } from "react";
import { MessageSquareText, X, } from "lucide-react";
import phoneicon from "@/assets/phone-volume-solid-full.svg";
import envelopeicon from "@/assets/envelope-solid-full.svg";
import lineicon from "@/assets/line-brands-solid-full.svg";
import fbicon from "@/assets/square-facebook-brands-solid-full.svg";
import instagramicon from "@/assets/square-instagram-brands-solid-full.svg";

export default function ContactButtonScreen() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed grid gap-3 bottom-8 right-8 z-30 items-center justify-center">
      {/* Slide Menu */}
      <div
        className={`gap-6 items-center justify-center bg-white grid shadow-lg px-4 py-6 rounded-full transition-all duration-200 overflow-hidden ${
          open ? "h-[auto] opacity-100 mr-4" : "h-0 opacity-0 mr-0"
        }`}
      >
        <a
          href="tel:0821074850"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <img src={phoneicon} width={40}/>
        </a>
        <a
          href="mailto:nalekiwalk@email.com"
          className="flex items-center gap-2 text-green-600 hover:text-green-800"
        >
          <img src={envelopeicon} width={40}/>
        </a>
        <a
          href="https://line.me/ti/p/HY9qNxODAQ"
          target="_blank"
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
        >
          <img src={lineicon} width={40}/>
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100082915816044"
          target="_blank"
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
        >
          <img src={fbicon} width={40}/>
        </a>
        <a
          href="https://www.instagram.com/easternborder.asset/"
          target="_blank"
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
        >
          <img src={instagramicon} width={40}/>
        </a>
      </div>

      {/* Circle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        {open ? <span><X /></span> : 
        <span><MessageSquareText /></span>
        }
      </button>
    </div>
  );
}
