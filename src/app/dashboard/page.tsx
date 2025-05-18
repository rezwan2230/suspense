import { Suspense } from "react";
import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import ComponentOneLoading from "./_components/ComponentOneLoading";
import ErrorBoundary from "../component/ErrorBoundary";
import ComponentErrorCard from "./_components/ComponentErrorCard";

const DashBoardpage = () => {
  return (
    <div className="flex justify-center items-center gap-10 h-screen">
      <ErrorBoundary fallback={<ComponentErrorCard/>}>
        <Suspense fallback={<ComponentOneLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>
      <ComponentTwo />
    </div>
  );
};

export default DashBoardpage;
