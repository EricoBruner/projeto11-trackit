import { ThreeDots } from "react-loader-spinner";

export default function LoadingDots() {
  return (
    <ThreeDots
      height="100%"
      width="100%"
      radius="9"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}
