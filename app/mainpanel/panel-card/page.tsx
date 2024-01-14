import Cards from "@/components/payout-card";
import OrderTable from "../order-table/page";
import PanelPagination from "../pagination/page";

const PanelCard = () => {
  return (
    <div className="flex flex-col p-8 w-full gap-y-6 bg-[#FAFAFA]">
      <section className="flex items-center justify-between w-full">
        <h1 className="text-xl font-medium text-[#1A181E]">Overview</h1>
        <div className="border-[1px] flex items-center justify-between rounded bg-white border-[#D9D9D9] h-[36px]">
          <div className=" w-[86px] font-normal text-base h-[24px] my-[6px] ml-[14px] hover:cursor-pointer text-[#4d4d4d]">
            Last Month
          </div>

          <div className="w-[16px] h-[16px] ml-[7px] mr-[4px] my-[10px] brightness-0 opacity-70">
            <img
              src="/images/chevron-down.png"
              alt="dashboard-icons-group"
              className="hover:cursor-pointer "
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-[20px] w-[1152px] h-[118px] ">
        <Cards title="Online Order" amount="231" />
        <Cards title="Amount Received" amount="₹23,92,312.19" />
      </section>

      <div className="gap-y-[16px] w-full" />
      <p className="text-xl h-7 text-[#1A181E] font-medium">
        Transactions | This Month
      </p>
      <div className="w-full gap-x-[10px]" />

      <div
        className="flex flex-col w-[1152px] bg-white gap-[12px] pt-[12px] pb-[8px] px-[12px] rounded-md"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <section className="flex justify-between w-[1128px]">
          <div className="flex w-[248px] px-[16px] py-[10px] gap-[8px] items-center border rounded">
            <img
              src="/images/input-search.png"
              alt="dashboard-icons-group"
              className="hover:cursor-pointer "
            />

            <p className="w-full bg-transparent text-[#808080] font-normal text-sm">
              Search by Order ID
            </p>
          </div>

          <div className="flex items-center gap-x-[16px]">
            <div className="bg-white flex items-center gap-x-[12px] px-[12px] py-[6px] border rounded">
              <span>Sort</span>

              <img
                src="/images/sort.png"
                alt="dashboard-icons-group"
                className="hover:cursor-pointer "
              />
            </div>

            <div className="p-[8px] rounded border">
              <img
                src="/images/icons-download.png"
                alt="dashboard-icons-group"
                className="hover:cursor-pointer "
              />
            </div>
          </div>
        </section>

        <div className="w-[1128px]">
          <OrderTable />
          {[...new Array(19)].map((_, index) => {
            return (
              <div
                key={index}
                className="w-[1128px] border-b-[1px] h-[48px] px-3 py-3.5 items-center bg-[#FFF] border-[#E6E6E6] flex"
              >
                <div className="w-[246px] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#146EB4]">
                  #281209
                </div>
                <div className="w-10 h-full" />
                <div className="w-[246px] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#1A181E]">
                  7 July, 2023
                </div>
                <div className="w-10 h-full" />
                <div className="w-[246px] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]">
                  ₹1,278.23
                </div>
                <div className="w-10 h-full" />
                <div className="w-[246px] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#1A181E]">
                  ₹22
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-6 w-full" />
        <PanelPagination />
      </div>
    </div>
  );
};

export default PanelCard;
