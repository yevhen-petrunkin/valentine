import FrameWrapper from "@/components/FrameWrapper";
import Hearts from "@/components/Hearts";

const ValentinePage = ({ params }) => {
  return (
    <main>
      <FrameWrapper name={params?.name} />
      <Hearts />
    </main>
  );
};

export default ValentinePage;
