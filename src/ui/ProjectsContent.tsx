import ProjectCard from "./ProjectCard";

// 1. 将你的项目数据定义成一个数组
const projectsData = [
  {
    id: 1,
    imageUrl: "/projects/the-wild-oasis.png",
    title: "The Wild Oasis",
    description:
      "Hotel management app - full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. ",
    skills: ["React", "JavaScript", "Supabase", "Styled Components"],
    liveUrl: "https://the-wild-oasis-summerbug.netlify.app/",
    repoUrl: "https://github.com/SummerD-max/The-wild-oasis-summerbug",
  },
  {
    id: 2,
    imageUrl: "/projects/MyMovieCollector.png",
    title: "My Movie Collector",
    description:
      "A movie collection app that enables users to watch, add to favorites, and manage their personal movie library.",
    skills: ["React", "JavaScript", "Redux", "React Query", "Tailwind CSS"],
    liveUrl: "https://my-movie-collector.netlify.app/",
    repoUrl: "https://github.com/SummerD-max/my-movie-collector",
  },
  {
    id: 3,
    imageUrl: "/projects/weather-outfit.png",
    title: "Weather Outfit",
    description:
      "A weather application that recommends outfits based on current weather conditions.",
    skills: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "OpenWeather API",
    ],
    liveUrl: "https://weather-outfit-start.netlify.app/",
    repoUrl: "https://github.com/SummerD-max/weather-outfit",
  },
  {
    id: 4,
    imageUrl: "/projects/fast-react-pizza.png",
    title: "Fast React Pizza",
    description:
      "Users can order one or more pizzas from a menu. Built with a 3rd party API. User can add multiple pizzas in the cart and order them. Also, they can search the ordered pizza to know the status.",
    skills: ["React", "Redux Toolkit", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://fast-react-pizza-summerbug.netlify.app",
    repoUrl: "https://github.com/SummerD-max/fast-react-pizza-summerbug",
  },
];

function ProjectsContent() {
  return (
    // 2. 布局容器
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* 3. 循环数据，并为每一项渲染一个 ProjectCard 组件 */}
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          skills={project.skills}
          liveUrl={project.liveUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
}

export default ProjectsContent;
