import AvatarWithIcon from "../../AvatarWithIcon";
import avatar from "../../../assets/images/sontung.jpeg";
import FeatureIconV8 from "../../FeatureIcon/FeatureIconV8";

function Item() {
  return <div className="flex items-center gap-4 mb-2 font-normal">
  <div ><AvatarWithIcon avatar={avatar} Icon={<FeatureIconV8 name="Flag"/>}/></div>
  <div>
    <p>Page<strong> SonTung Mtp </strong>that you follow has been change name <strong>Page SonTung Mtp</strong></p>
  </div>
</div>
}

export default Item;
