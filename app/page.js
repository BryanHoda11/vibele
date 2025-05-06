import Events from "@/components/Events";
import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="main-container flex mx-auto h-[91vh] overflow-hidden">
        <Sidebar />
        <Feed />
        <Events />
      </div>
    </>
  );
}

export const metadata = {
  title: "Vibele | Your community hub!",
  description: "Join big communities, get connected and follow up through posts.",
};
