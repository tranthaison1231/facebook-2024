import Radio from "../Radio";
import { cn } from "../../utils/cn";
interface ItemProps {
  logoIcon: JSX.Element;
  title: string;
  directIcon?: JSX.Element;
  content?: string;
  radio?: any;
  onClick: () => void;
}

function Item({
  logoIcon,
  title,
  directIcon,
  content,
  radio,
  onClick,
}: ItemProps) {
  return (
    <div
      className={cn(" rounded-md mx-2 px-2 py-1 flex items-start gap-1 ", {
        "hover:bg-gray-200 cursor-pointer group items-center": !radio ,
      })}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 p-2.5 bg-gray-200 rounded-full group-hover:bg-gray-300 cursor-pointer relative">
        {logoIcon}
      </div>
      <div className={cn("flex grow items-center justify-between",{"-mt-3" : radio})}>
        <div className="grow">
          <p className="p-2">{title}</p>
          {content && (
            <p className="px-2 -mt-1 pb-1 font-normal text-xs">{content}</p>
          )}
          {radio?.map((item: any, index: number) => {
            return (
              <Radio key={index} title={item.title} content={item.content} />
            );
          })}
        </div>
        <div className="">{directIcon}</div>
      </div>
    </div>
  );
}

export default Item;
