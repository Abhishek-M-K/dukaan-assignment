import NavigationSidebar from "./navigation/page";
import Panel from "./mainpanel/page";

export default function Home() {
  return (
    <>
      <div className="flex">
        <NavigationSidebar />
        <Panel />
      </div>
    </>
  );
}
