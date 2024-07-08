import { useState,forwardRef } from "react";

import Image from "../Image";
import avatar from "../../assets/images/sontung.jpeg";
import FeatureIconV1 from "../FeatureIcon/FeatureIconV1";
import FeatureIconV3 from "../FeatureIcon/FeatureiconV3";
import PageUserItem from "../PageUserItem";
import {MENUS} from './Constants'
import Item from "./Item";

function Menu({ ...props }: any, ref: any) {
  const [history, setHistory] = useState([MENUS]);
  const current = history[history.length - 1];
  const onChange = (item: any) => {
    switch (item.title) {
      case "Meta Business Suite":
        console.log("Meta Business Suite");
        break;
      case "Setting & Privacy":
        console.log("Setting & Privacy");
        break;
      case "Help & Support":
        console.log("Help & Support");
        break;
      case "Screen & Assistant":
        console.log("Screen & Assistant");
        break;
      case "Contribution":
        console.log("Contribution");
        break;
      case "Log Out":
        console.log("Log Out");
        break;
      default:
        break;
    }
  };
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      
      const handleClickMenuItem = (item: any) => {
        if (isParent) {
          setHistory([...history, item.children]);
        } else onChange(item);
      };

      return (
        <Item
          key={index}
          logoIcon={item.logoIcon}
          title={item.title}
          radio={item.radio}
          content={item.content}
          directIcon={item.directIcon}
          onClick={() => handleClickMenuItem(item)}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory(history.slice(0, history.length - 1));
  };

  return (
    <div ref={ref} className="text-sm font-semibold absolute z-10 bg-white w-96 pt-2 top-12 mt-1 text-gray-700 shadow-2xl border-[1px] right-4 max-h-[90vh] overflow-y-auto  rounded-xl">
      {history[history.length - 1].title === "MainMenu" ? (
        <div className="flex flex-col cursor-pointer mx-4 mb-4 mt-1">
          <div className=" shadow-lg border-gray-200 border-[1px] rounded-lg">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md m-1">
              <Image
                src={avatar}
                className="rounded-full size-10 object-cover "
                alt="avatar"
              />
              <p>Hiếu Nguyễn</p>
            </div>
            <div className="h-[1.5px] bg-gray-300 mx-2"></div>
            <PageUserItem avatar={avatar} />
            <PageUserItem avatar={avatar} />
            <div className="h-[1.5px] bg-gray-200 mx-2"></div>
            <div className="m-3">
              <button className="w-full p-1.5 bg-gray-200 hover:bg-gray-300 rounded-md  text-gray-900 flex items-center justify-center gap-2">
                <FeatureIconV1 name="SeeProfile" />
                See all personal pages
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-2xl font-bold mb-2 mt-1 mx-2 px-2">
          <div className="flex items-center p-2.5 rounded-full hover:bg-gray-200 cursor-pointer relative" onClick={() => handleBack()}>
            <FeatureIconV3 name="ArrowLeft" />
          </div>
          <p className="pl-4">{history[history.length - 1].title}</p>
        </div>
      )}
      <div className="pb-2 flex flex-col">{renderItem()}</div>
    </div>
  );
}

export default forwardRef(Menu);
