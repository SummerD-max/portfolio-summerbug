import { FaBookAtlas, FaBookBible } from "react-icons/fa6";
import PersonalInfo from "./PersonalInfo";

function AboutContent() {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center gap-8 text-stone-700 md:grid-cols-2">
      <div className="self-start">
        <div className="pb-6">
          <h2 className="mb-10 hidden text-2xl text-cyan-600 md:block">
            A little bit about me
          </h2>

          <div className="hidden space-y-3 md:block">
            <p>I'm a software developer from China.</p>
            <p>
              I love turning ideas into code, creating digital experiences that
              are smooth, engaging, and user-friendly. I focus on doing things
              well and learning from each project.
            </p>
            <p>
              When I'm not coding, I enjoy reading tech blogs and trying out the
              latest design trends. These hobbies keep me inspired and help me
              stay sharp in my work.
            </p>
          </div>
        </div>

        <div className="border-gray-500/20 md:border-t-1 md:pt-6">
          <PersonalInfo />
        </div>
      </div>

      <div className="w-fit space-y-4">
        <div className="flex items-center justify-around rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
          <div className="space-y-1">
            <p className="flex items-center gap-2 font-bold text-cyan-700">
              <FaBookBible />
              Undergraduate
            </p>
            <p className="font-semibold text-stone-800">Fuzhou University</p>
            <p className="text-sm text-stone-600">Network Engineering</p>
          </div>
          <div>
            <img src="FZU.svg" alt="FZU" />
          </div>
        </div>

        <div className="flex items-center justify-around rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
          <div className="space-y-1">
            <p className="flex items-center gap-2 font-bold text-cyan-700">
              <FaBookAtlas />
              Postgraduate
            </p>
            <p className="font-semibold text-stone-800">Fuzhou University</p>
            <p className="text-sm text-stone-600">Computer Science Tech</p>
          </div>
          <div>
            <img src="FZU.svg" alt="FZU" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
