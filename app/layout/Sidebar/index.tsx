import { Fragment, memo, PropsWithChildren } from "react";
import Image from "next/image";
import briefcase from "../../../public/images/briefcase.svg";
import dashboard from "../../../public/images/home.svg";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { _Menu } from "../../model/menu";
import { useRouter } from "next/router";

interface MenuItemProps {
  active?: boolean;
  options?: boolean;
  label: string;
  icon: any;
}

const MenuItem = ({ icon, label, options, active }: MenuItemProps) => {
  return (
    <div
      className={`
       d-flex py-2 w-100 link align-items-center justify-content-center ${
         active ? "bg-primary-bg-2" : styles.menu_item
       } `}
    >
      <div className={`py-2 d-flex w-80 align-items-center`}>
        <Image src={icon} />
        <span className={`px-3 color-tertiary`}>{label}</span>
        {options && <FontAwesomeIcon color="#213F7D" icon={faAngleDown} />}
      </div>
    </div>
  );
};

const Sidebar = memo<PropsWithChildren<Object>>((props) => {
  const router = useRouter();
  return (
    <aside
      className={`${styles.aside} py-5 bg w-20  d-flex flex-column align-items-center`}
    >
      <MenuItem icon={briefcase} label="Switch Organisation" options={true} />
      <br />

      <MenuItem icon={dashboard} label="Dashboard" />

      <br />

      <div
        className={`
       d-flex flex-column align-items-center  justify-content-center w-100`}
      >
        {_Menu.map((x, i) => (
          <Fragment key={i}>
            <span
              className={`mt-3 mb-2 w-80 text-uppercase text-07 fw-500 color-tertiary`}
            >
              {x.group}
            </span>
            {x.items &&
              x.items.length > 0 &&
              x.items.map((z, j) => (
                <MenuItem
                  key={j}
                  active={
                    router.pathname.indexOf("/users") > -1 &&
                    z.label.toLowerCase() === "users"
                      ? true
                      : false
                  }
                  icon={z.icon}
                  label={z.label}
                />
              ))}
          </Fragment>
        ))}
      </div>
    </aside>
  );
});

export default Sidebar;
