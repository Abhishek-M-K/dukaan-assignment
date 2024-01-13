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
    icon: "sidebar-discount",
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
      <nav className=" bg-slate-700 w-[224px] h-[1482px] min-h-screen text-white py-4 px-3">
        <div className="flex w-[208px] h-[1380px]">
          <div className="w-[192px] h-[42px] gap-3 flex">
            <div className="w-[39px] h-[39px] rounded">
              <img src="/images/profile.png" alt="profile" />
            </div>

            <div className="w-[108px] h-[42px] bg-transparent">
              <p className="font-medium text-base">Nishyan</p>
              <p className="underline text-sm font-normal opacity-70">
                Visit Store
              </p>
            </div>

            <div className="w-fit h-full flex items-center">
              <button>
                <ChevronDown width={20} height={20} aria-label="Expand" />
              </button>
            </div>
          </div>

          <div className="bg-transparent w-[208px] h-[42px]">
            <div className="w-full h-[1314px]">
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
                      <div className="w-5 h-5 opacity-80">
                        <img src={`/images/${item.icon}.jpg`} alt={item.icon} />
                      </div>
                      <div className="h-full w-3" />
                      <div className="h-5 opacity-80 w-fit font-medium text-black text-sm">
                        {item.title}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationSidebar;
