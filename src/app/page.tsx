import OverlayVideo from "@wedding/app/components/OverlayVideo";
import SaveTheDateContent from "@wedding/app/components/SaveTheDateContent";
import Logo from "@wedding/app/components/Logo";

const Home = () => {
  return (
    <main className="flex min-h-screen min-w-screen font-header">
      <section key="navbar" className="fixed top-0 w-full">
        <Logo className="m-6" />
      </section>

      <OverlayVideo />

      <SaveTheDateContent />
    </main>
  );
};

export default Home;
