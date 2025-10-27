import { FaGithub, FaShare } from "react-icons/fa6";
import UsedSkills from "./UsedSkills";

// 1. 定义这个组件需要接收哪些数据
type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  skills: string[];
  liveUrl?: string; // 可选：项目在线链接
  repoUrl?: string; // 可选：项目仓库链接
};

function ProjectCard({
  imageUrl,
  title,
  description,
  skills,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  // 2. 将单个卡片的 HTML 结构和逻辑放在这里
  return (
    <div className="flex flex-col rounded-lg border-2 border-gray-500 bg-transparent p-4 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={imageUrl} alt={title} className="mb-4 h-40 rounded-lg" />

      <h3 className="border-b-1 border-gray-300 text-2xl font-semibold text-stone-800 dark:text-slate-50">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-800 dark:text-slate-50">
        {description}
      </p>

      {/* 技能列表 */}
      <div className="mt-4">
        <UsedSkills usedSkills={skills} />
      </div>

      {/* 链接按钮 */}
      <div className="mt-auto flex justify-between pt-10">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            className="bg-tranparent flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 ring-2 transition-colors hover:bg-gray-800 hover:text-gray-100"
          >
            GitHub
            <FaGithub />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-white transition-colors hover:bg-cyan-700"
          >
            Live Demo
            <FaShare />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
