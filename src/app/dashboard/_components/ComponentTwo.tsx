import { delay } from "@/utils/delay";

const ComponentTwo = async () => {
  await delay(5000);

  return (
    <div className="border-2 border-white h-40 w-60">
      <h1>static Component</h1>
    </div>
  );
};

export default ComponentTwo;
