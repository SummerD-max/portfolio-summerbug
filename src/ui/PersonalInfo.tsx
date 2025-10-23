import InfoCard from "./InfoCard";
import {
  MdOutlineCases,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdPersonOutline,
} from "react-icons/md";

function PersonalInfo() {
  return (
    <div className="grid grid-cols-2 gap-y-8">
      <InfoCard icon={<MdPersonOutline />} field="Name" value="Summerbug" />
      <InfoCard
        icon={<MdOutlineEmail />}
        field="Email"
        value="862677188@qq.com"
      />
      <InfoCard
        icon={<MdOutlineLocationOn />}
        field="Location"
        value="Fuzhou, China"
      />
      <InfoCard
        icon={<MdOutlineCases />}
        field="Employment"
        value="Available"
      />
    </div>
  );
}

export default PersonalInfo;
