import React, { forwardRef } from "react";

import "./Input.scss";

type Props = {
  type: string;
  placeHolder: string;
  id: string;
  name?: string;
  width?: string;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <div className={`input-content`}>
      <input
        className={props.className}
        onChange={props.onChange}
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
