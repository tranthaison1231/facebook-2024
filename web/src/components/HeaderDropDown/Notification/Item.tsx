import AvatarWithIcon from "../../AvatarWithIcon";
import avatar from "../../../assets/images/sontung.jpeg";
import FeatureIconV8 from "../../FeatureIcon/FeatureIconV8";

function Item() {
  return (
    <div className="flex flex-row items-center p-2 rounded-xl font-normal hover:bg-gray-200">
      <div className="flex-none">
        <AvatarWithIcon avatar={avatar} Icon={<FeatureIconV8 name="Flag" />} />
      </div>
      <div className="grow overflow-hidden pl-4">
        <p className="line-clamp-3">
          Page<strong> SonTung Mtp </strong>that you follow has been change name{" "}
          <strong>Page SonTung Mtp Official</strong>
        </p>
      </div>
      <div className="size-3 bg-blue-500 rounded-full flex-none"></div>
    </div>
  );
}

export default Item;
