type UsedSkillsProps = {
  usedSkills: string[];
};

function UsedSkills({ usedSkills }: UsedSkillsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-2">
      {usedSkills.map((skill) => (
        <div key={skill} className="rounded-full bg-cyan-600 px-2 text-cyan-50">
          {skill}
        </div>
      ))}
    </div>
  );
}

export default UsedSkills;
