import NavigationSidebar from "./navigation/page";
import Panel from "./mainpanel/page";

export default function Home() {
  return (
    <>
      <div className="flex w-[1440px]">
        <NavigationSidebar />
        <Panel />
      </div>
    </>
  );
}
