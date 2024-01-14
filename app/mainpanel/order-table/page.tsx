const OrderTable = () => {
  return (
    <div className="w-[1128px] h-10 rounded px-3 py-2.5 flex items-center bg-[#F2F2F2]">
      <div className="w-[246px] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]">
        Order ID
      </div>
      <div className="w-10 h-full" />
      <div className="w-[246px] h-5 flex items-start justify-center flex-col text-sm font-medium text-[#4D4D4D]">
        <div className="flex items-center">
          Order date
          <div className="w-1 h-full" />
          <div className="w-2 h-2">
            <img src="/images/triangle-icon.png" alt="triangle-icon" />
          </div>
        </div>
      </div>
      <div className="w-10 h-full" />
      <div className="w-[246px] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]">
        Order amount
      </div>
      <div className="w-10 h-full" />
      <div className="w-[246px] h-5 flex items-end justify-center flex-col text-sm font-medium text-[#4D4D4D]">
        <div className="flex items-center">
          Transaction fees
          <div className="w-1 h-full" />
          <div className="w-3.5 h-3.5">
            <img src="/images/outlined-info.png" alt="outlined-info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
