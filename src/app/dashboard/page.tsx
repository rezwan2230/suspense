import { Suspense } from "react";
import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import ComponentOneLoading from "./_components/ComponentOneLoading";

const DashBoardpage = () => {
  return (
    <div className="flex justify-center items-center gap-10 h-screen">
      <Suspense fallback={<ComponentOneLoading/>}>
        <ComponentOne />
      </Suspense>
      <ComponentTwo />
    </div>
  );
};

export default DashBoardpage;
