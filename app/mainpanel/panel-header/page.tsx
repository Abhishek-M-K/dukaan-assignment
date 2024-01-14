const PanelHeader = () => {
  return (
    <>
      <header
        className="w-[1216px] h-[64px] flex gap-[16px] px-8 py-3 z-50  bg-white border-b border-black/15"
        role="banner"
      >
        <div className="flex items-center flex-1 gap-4 ">
          <h1 className="text-base font-normal leading-6 text-[#1A181E]">
            Payments
          </h1>
          <div className="flex items-center gap-2 text-black/70">
            <img src="/images/dashboard-outlined-help.png" alt="question" />
            <span className="text-xs">How it works</span>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-[8px] px-4 py-[9px] rounded-[6px] bg-black/5">
          <img
            src="/images/dashboard-icons-search.png"
            alt="dashboard-icons-search"
          />
          <p className="w-full bg-transparent text-[#808080] font-normal text-sm">
            Search features, tutorials, etc.
          </p>
        </div>
        <div className="flex flex-1 justify-end gap-[12px]">
          <div className="p-[10px] bg-black/10 rounded-full" role="button">
            <img
              src="/images/dashboard-icons-group.png"
              alt="dashboard-icons-group"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <img
          src="/images/dashboard-icons-menu.png"
          alt="dashboard-icons-menu"
          className="hover:cursor-pointer"
        />
      </header>
    </>
  );
};

export default PanelHeader;
//top-0 sticky
