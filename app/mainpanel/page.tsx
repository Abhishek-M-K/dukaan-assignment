import PanelCard from "./panel-card/page";
import PanelHeader from "./panel-header/page";

const Panel = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-fixed">
        <PanelHeader />
        <PanelCard />
      </div>
    </>
  );
};

export default Panel;
