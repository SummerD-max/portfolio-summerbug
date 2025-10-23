import HomeContent from "../ui/HomeContent";

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[url('/bg.svg')] py-20 text-slate-50 md:py-10"
    >
      <HomeContent />
    </section>
  );
}

export default Home;
