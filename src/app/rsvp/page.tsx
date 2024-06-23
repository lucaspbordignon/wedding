import { kv } from "@vercel/kv";

const Page = () => {
  const confirmAttendance = async () => {
    "use server";

    await kv.set(
      "attendance",
      JSON.stringify({ name: "John Doe", confirmed: true })
    );
  };

  return (
    <main>
      <button onClick={confirmAttendance}>
        Click me to add a piece of data
      </button>
    </main>
  );
};

export default Page;
