import { Badge as BadgeType } from "../../../utils/types";
import "./button-badge.scss";

const Badge = ({ name, colorIndex }: BadgeType) => {
  const bgIndex = [
    "badge-primary",
    "badge-warning",
    "badge-danger",
    "badge-success",
  ];
  return (
    <>
      <div
        className={`badge ${
          colorIndex ? bgIndex[colorIndex] : "badge-outline"
        }`}
      >
        {name}
      </div>
    </>
  );
};

export default Badge;
