import { forwardRef } from "react";
import styles from "./Input.module.css";
const Input = forwardRef((props, ref) => {
  return (
    <div className={styles[`input-area`]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});
export default Input;
