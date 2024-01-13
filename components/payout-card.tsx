interface CardsProps {
  title: string;
  amount: string;
}

const Cards = ({ title, amount }: CardsProps) => {
  return (
    <div
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      className="flex flex-1 flex-col relative p-[20px] gap-[16px] rounded-md w-1/3 bg-white text-[#1A181E] overflow-hidden"
    >
      <span className="flex items-center text-base gap-[8px]">{title}</span>
      <div className="flex items-center">
        <span className="grow text-[32px] font-medium leading-9.5">
          {amount}
        </span>
      </div>
    </div>
  );
};

export default Cards;
