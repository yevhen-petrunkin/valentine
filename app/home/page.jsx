import Frame from "@/components/Frame";
import Hearts from "@/components/Hearts";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <Frame open={false} />
      </div>

      <Hearts />
    </main>
  );
};

export default HomePage;
