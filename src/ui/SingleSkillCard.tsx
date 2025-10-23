type SingleSkillCardProps = {
  icon: React.ReactNode;
  skillName: string;
};

function SingleSkillCard({ icon, skillName }: SingleSkillCardProps) {
  return (
    <div className="flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-sky-100 p-5 shadow-sm">
      {icon}
      <span className="text-center">{skillName}</span>
    </div>
  );
}

export default SingleSkillCard;
