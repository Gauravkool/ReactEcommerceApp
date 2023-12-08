import { memo } from "react";
function Button(props) {
  // console.log("Button running", props.children);
  return (
    <button
      {...props}
      className={`bg-primary-default text-white px-2 py-1 rounded-md disabled:bg-primary-light ${props.className}`}>
      {props.children}
    </button>
  );
}
export default memo(Button);
