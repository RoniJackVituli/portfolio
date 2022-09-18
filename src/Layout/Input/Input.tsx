import React, {forwardRef} from "react";
import "./Input.scss";

type Props = {
  type: string;
  placeHolder: string;
  id: string;
  name?: string;
  width?: string;
  ref?: React.Ref<HTMLInputElement>;
};

const Input: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <div className="input-content">
      <input
        id={props.id}
        placeholder={props.placeHolder}
        type={props.type}
        style={{ width: `${props.width}` }}
        ref={ref}
        name={props.name}
      />
    </div>
  );
});

export default Input;
