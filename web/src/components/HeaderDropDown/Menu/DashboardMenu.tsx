import Search from "../../Search";
import { SOCIAL_MENUS } from "./Constants";
import Item from "./Item";
function DashboardMenu() {
  return (
    <div className="text-sm font-semibold pb-4 absolute z-10 bg-gray-50 w-[608px]  top-10 mt-1 text-gray-900 shadow-2xl border right-4 max-h-[90vh] rounded-xl">
      <div className="font-bold py-2 ">
        <h1 className="text-2xl px-4">Menu</h1>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 bg-white shadow-xl border ml-4 mr-2 h-[70vh] rounded-xl overflow-hidden ">
          <div className="flex flex-col pt-4 pb-2 px-1.5 ">
            <Search placeholderValue="Search in menu" noHidden />
          </div>
          <h3 className="text-base font-semibold px-4">Social</h3>
          {SOCIAL_MENUS.map((menu) => (
            <div className="mx-2"><Item {...menu} /></div>
          ))}
        </div>
        <div className="col-span-2 bg-white shadow-xl border mr-4 ml-2 h-[60vh] rounded-xl "></div>
      </div>
    </div>
  );
}

export default DashboardMenu;
