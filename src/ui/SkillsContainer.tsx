function SkillsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-fit grid-cols-2 items-start gap-2 rounded-lg bg-transparent px-10 py-8 text-sm shadow-2xl">
      {children}
    </div>
  );
}

export default SkillsContainer;
