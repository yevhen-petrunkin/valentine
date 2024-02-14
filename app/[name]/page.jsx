import FrameWrapper from "@/components/FrameWrapper";
import Hearts from "@/components/Hearts";

// export function generateStaticParams() {
//   return [{ name: "marina" }, { name: "dina" }, { name: "dasha" }];
// }

const ValentinePage = ({ params }) => {
  return (
    <main>
      <FrameWrapper name={params?.name} />
      <Hearts />
    </main>
  );
};

export default ValentinePage;
