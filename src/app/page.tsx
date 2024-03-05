import OverlayVideo from "@wedding/app/components/OverlayVideo";
import SaveTheDateContent from "@wedding/app/components/SaveTheDateContent";

const Home = () => {
  return (
    <main className="flex min-h-screen min-w-screen font-header">
      <OverlayVideo />

      <SaveTheDateContent />
    </main>
  );
};

export default Home;
