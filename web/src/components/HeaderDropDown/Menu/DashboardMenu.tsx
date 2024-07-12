import {v4 as uuidv4} from "uuid";
import Search from "../../Search";
import { SOCIAL_MENUS, ENTERTAINMENT_MENUS, CREATE_MENUS } from "./Constants";
import Item, { CreateItem } from "./Item";
function DashboardMenu() {
  return (
    <div className="text-sm font-semibold absolute z-10 bg-gray-50 w-[608px]  top-10 mt-1 text-gray-900 shadow-2xl border right-4 max-h-[90vh] rounded-xl">
      <h1 className="text-2xl px-4 font-bold py-2 ">Menu</h1>
      <div className="grid grid-cols-5 h-[82vh] overflow-y-auto mr-1 ml-3 gap-1 group">
        <div className="col-span-3 bg-white shadow-xl border mx-1 rounded-xl">
          <div className="flex flex-col pt-4 pb-2 px-1.5 ">
            <Search placeholderValue="Search in menu" noHidden />
          </div>
          <h3 className="text-base font-semibold px-4">Social</h3>
          {SOCIAL_MENUS.map((menu) => (
           <Item key={uuidv4()}{...menu} />
          ))}
          <hr className="m-3" />
          {ENTERTAINMENT_MENUS.map((menu) => (
            <Item key={uuidv4()} {...menu} />
          ))}
        </div>
        <div className="absolute left-2/3 -translate-x-10 mx-1 w-56 border bg-white rounded-xl shadow-xl overflow-auto">
          <div className="top-0 right-0 h-fit pb-2 ">
            <h2 className="text-xl px-4 font-bold py-2">Create</h2>
            {CREATE_MENUS.map((menu) => (
              <CreateItem key={uuidv4()} {...menu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMenu;
