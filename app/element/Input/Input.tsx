import { memo, useState } from "react";
import { InputType } from "../../model/input";
import styles from "./Input.module.scss";

type AppProps = {
  placeholder?: string;
  type?: InputType;
  style?: string;
  showPasswordFilter?: boolean;
};

const Input = memo<AppProps>(
  ({
    placeholder,
    style,
    showPasswordFilter = false,
    type = InputType.TEXT,
  }: AppProps) => {
    const [switchText, setSwitchText] = useState("show");

    let toggleSwitch = () => {
      if (switchText.toLowerCase() == "show") {
        setSwitchText("hide");
      } else {
        setSwitchText("show");
      }
    };

    return (
      <div
        className={`d-flex align-items-center justify-content-between px-3 ${style} ${styles.boundary}`}
      >
        <input
          className={`${styles.input} text-1`}
          type={`${
            !showPasswordFilter
              ? type
              : switchText.toLowerCase() == "hide"
              ? "text"
              : "password"
          }`}
          placeholder={placeholder}
        />
        {showPasswordFilter && (
          <span
            onClick={toggleSwitch}
            className={`link avenir-demi-bold text-09 text-uppercase color-primary`}
          >
            {switchText}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
