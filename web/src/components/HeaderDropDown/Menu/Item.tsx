
interface ItemProps {
  logoIcon: JSX.Element;
  title: string;
  content?: string;
}
function Item({logoIcon, title, content}: ItemProps) {
  return (
    <div className="flex flex-row items-center p-2 mx-2 rounded-xl font-normal relative group hover:bg-gray-200">
      <div className="flex-none">{logoIcon}</div>
      <div className="flex flex-col grow overflow-hidden pl-2">
        <h4 className="font-semibold truncate">{title}</h4>
        <p className="line-clamp-2 text-xs">{content}</p>
      </div>
    </div>
  );
}

export default Item;

export {default as CreateItem} from "../Account/Item"
