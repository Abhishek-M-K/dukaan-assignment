import { ChevronDown } from "lucide-react";

const sidebarItems: { title: string; icon: any }[] = [
  {
    title: "Home",
    icon: "sidebar-home",
  },
  {
    title: "Orders",
    icon: "sidebar-orders",
  },
  {
    title: "Products",
    icon: "sidebar-products",
  },
  {
    title: "Delivery",
    icon: "sidebar-delivery",
  },
  {
    title: "Marketing",
    icon: "sidebar-marketing",
  },
  {
    title: "Analytics",
    icon: "sidebar-analytics",
  },
  {
    title: "Payments",
    icon: "sidebar-payments",
  },
  {
    title: "Tools",
    icon: "sidebar-tools",
  },
  {
    title: "Discounts",
    icon: "sidebar-discounts",
  },
  {
    title: "Audience",
    icon: "sidebar-audience",
  },
  {
    title: "Appearance",
    icon: "sidebar-appearance",
  },
  {
    title: "Plugins",
    icon: "sidebar-plugins",
  },
];

const NavigationSidebar = () => {
  return (
    <>
      <nav className=" fixed bg-[#353C53] w-[224px] h-[1482px]  text-white py-4 px-2.5">
        <div className="w-[208px] h-[1380px]">
          <div className="w-[192px] h-[42px] flex">
            <div className="w-[39px] h-[39px] rounded">
              <img src="/images/profile.png" alt="profile" />
            </div>

            <div className="w-3 h-full bg-transparent" />
            <div className="w-[108px]">
              <p className="font-medium text-base">Nishyan</p>
              <p className="underline text-sm font-normal opacity-70">
                Visit Store
              </p>
            </div>

            <div className="w-3 h-full bg-transparent" />
            <div className="w-fit h-full flex items-center">
              <button>
                <ChevronDown width={20} height={20} aria-label="Expand" />
              </button>
            </div>
          </div>

          <div className="bg-transparent w-[208px] h-[42px]" />
          <div className="w-full h-[1314px] -ml-1 -mt-2">
            {sidebarItems.map((item) => {
              return (
                <>
                  <div
                    key={item.title}
                    className={`${
                      item.title === "Payments"
                        ? "bg-[#FFFFFF1A]"
                        : "bg-transparent"
                    } w-[208px] h-[36px] rounded flex px-4 py-2`}
                  >
                    <div className="w-[20px] h-[20px]">
                      <img src={`/images/${item.icon}.png`} alt={item.icon} />
                    </div>
                    <div className="h-full w-3" />
                    <div className="h-5 opacity-90 w-fit font-medium text-sm">
                      {item.title}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[16px]" />

        <div className="h-[54px]  w-full py-1.5 px-3 rounded flex bg-[#353C53]">
          <div className="flex items-center h-full">
            <div className={`w-6 p-1.5 h-6 rounded bg-[#FFFFFF1A]`}>
              <img src="/images/sidebar-wallet.png" />
            </div>
          </div>
          <div className="h-full w-3" />
          <div>
            <p className="text-sm  font-normal ">Available Credits</p>
            <p className="text-base font-medium">222.10</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationSidebar;
