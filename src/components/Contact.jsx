import { CONTACT } from "@/gems/constants";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Import phone and WhatsApp icons

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">2 Oniboure Street, Ikate, Lagos State.</p>

        {/* Phone number with icons */}
        <p className="my-4 flex justify-center items-center gap-2">
          <FaPhoneAlt className="text-blue-500" /> +23409049021742
          <a
            href="https://wa.me/23409049021742"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-500 hover:underline"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </p>

        {/* Email */}
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          dansunday657@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
