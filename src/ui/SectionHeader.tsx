function SectionHeader({ part, title }: { part: number; title: string }) {
  return (
    <div className="mb-8">
      <div className="inline-flex flex-col">
        <p className="text-xl text-cyan-600 uppercase">Part {part}</p>
        <h2 className="bg-gradient-to-br from-sky-500 via-green-600 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent select-none">
          {title}
        </h2>
        <div className="mt-2 h-1 w-full rounded-full bg-cyan-700"></div>
      </div>
    </div>
  );
}

export default SectionHeader;
