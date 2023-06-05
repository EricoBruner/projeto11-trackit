import { ThreeDots } from "react-loader-spinner";

export default function LoadingDots() {
  return (
    <ThreeDots
      height="15px"
      width="45px"
      radius="9"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
