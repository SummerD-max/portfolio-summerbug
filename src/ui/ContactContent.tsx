import { FaRegPaperPlane } from "react-icons/fa6";
import { IoChatbox } from "react-icons/io5";
import ContactIcons from "./ContactIcons";

function ContactContent() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className="mt-20 grid grid-cols-1 items-center gap-y-5 md:grid-cols-2">
      <div>
        <h3 className="text-5xl font-bold">
          <span className="text-cyan-800">Let's chat!</span>
          <br />
          <span className="bg-gradient-to-br from-pink-600 to-sky-500 bg-clip-text text-transparent">
            Tell me about your projects.
          </span>
        </h3>

        <p className="mt-10">Let's create something amazing together!</p>

        <ContactIcons />
      </div>
      <form
        className="flex w-full flex-col gap-2 rounded-xl bg-blue-50 px-10 py-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="flex items-center gap-2 pb-5 text-2xl font-semibold text-cyan-800">
          Send me a message! <IoChatbox />
        </p>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg p-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-cyan-700 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg p-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-cyan-700 focus:outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="h-64 w-full rounded-lg p-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-cyan-700 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-700 p-2 text-lg text-white shadow-cyan-800/50 transition-all hover:bg-cyan-800 active:scale-95 active:shadow-lg"
        >
          Send
          <FaRegPaperPlane
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            size={18}
          />
        </button>
      </form>
    </div>
  );
}

export default ContactContent;
