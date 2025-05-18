import { delay } from "@/utils/delay";

const ComponentOne = async () => {
  await delay(4000);
  return (
    <div className="border-2 border-white h-40 w-60">
      <h1>Hurrah eshe gase content lagao tali</h1>
    </div>
  );
};

export default ComponentOne;
