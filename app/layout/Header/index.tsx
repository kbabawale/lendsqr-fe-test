import { memo, PropsWithChildren } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import avatar from "../../../public/images/avatar.svg";
import notificationIcon from "../../../public/images/notification.svg";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = memo<PropsWithChildren<Object>>((props) => {
  return (
    <header
      className={`${styles.header} bg px-5 py-4 w-100 d-flex align-items-center`}
    >
      <div className={`w-20`}>
        <Image src={logo} alt="Logo" />
      </div>
      <div className={`flex-fill`}>
        <div
          className={`${styles.searchbox} d-flex align-items-center justify-content-between w-40`}
        >
          <input
            className={`flex-fill ps-3`}
            type="search"
            placeholder="search for anything"
          />
          <span
            className={`${styles.half_rounded} link hover bg-primary-bg px-3 py-1`}
          >
            <FontAwesomeIcon color="white" icon={faSearch} />
          </span>
        </div>
      </div>
      <div className={`d-flex align-items-center justify-content-between w-20`}>
        <span className={`text-decoration-underline color-tertiary link`}>
          Docs
        </span>
        <Image className={`link`} src={notificationIcon} />
        <div
          className={`d-flex align-items-center link justify-content-between`}
        >
          <Image className={`link`} src={avatar} />
          <span className="px-2">Adedeji</span>
          <FontAwesomeIcon color="#213F7D" icon={faCaretDown} />
        </div>
      </div>
    </header>
  );
});

export default Header;
