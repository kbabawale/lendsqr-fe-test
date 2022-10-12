import { memo } from "react";
import { ButtonType } from "../../model/button";
import styles from "./Button.module.scss";

type AppProps = {
  label: string;
  type?: ButtonType;
  textColor?: string;
  wide?: boolean;
  click?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: string;
};

const Button = memo<AppProps>(
  ({
    label,
    click,
    disabled,
    style,
    type = ButtonType.PRIMARY,
    wide = false,
  }: AppProps) => {
    return type === ButtonType.PRIMARY ? (
      <button
        disabled={disabled}
        onClick={click}
        className={`${style} ${wide ? styles.wide : ""} avenir-demi-bold ${
          styles.primary
        } hover`}
        type="button"
      >
        <span>{label}</span>
      </button>
    ) : (
      <button
        disabled={disabled}
        onClick={click}
        className={`${style} ${wide ? styles.wide : ""} avenir-demi-bold ${
          styles.secondary
        } hover`}
        type="button"
      >
        <span>{label}</span>
      </button>
    );
  }
);

export default Button;
