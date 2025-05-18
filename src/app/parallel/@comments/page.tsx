import { delay } from "@/utils/delay";

const Commentpage = async () => {
  await delay(2000);
  throw new Error("Error");
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <div className=" bg-cyan-600 h-[200px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-black font-semibold">Dynamic Comments</h1>
      </div>
    </div>
  );
};

export default Commentpage;
