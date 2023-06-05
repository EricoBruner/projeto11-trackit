import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ percentage }) {
  return (
    <CircularProgressbar
      value={percentage}
      styles={buildStyles({
        pathColor: "#ffffff",
        trailColor: "none",
      })}
    />
  );
}
