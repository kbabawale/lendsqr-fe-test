import type { NextPage } from "next";
import Image from "next/image";
import { memo } from "react";
import styles from "./index.module.scss";
import logo from "../../public/images/logo.svg";
import signin from "../../public/images/signin.svg";
import Input from "../../app/element/Input/Input";
import { InputType } from "../../app/model/input";
import Button from "../../app/element/Button/Button";
import { navigate } from "../../app/util/functions";

const Home: NextPage = memo(() => {
  return (
    <div
      className={`${styles.main_container} d-flex align-items-center w-100 h-100`}
    >
      <div
        className={`${styles.bg_half} d-flex align-items-center justify-content-center h-100 w-50`}
      >
        <div
          className={`${styles.left_inner} d-flex h-50 flex-column align-items-start justify-content-between`}
        >
          <Image className={``} src={logo} alt="Logo" />
          <Image className={``} src={signin} alt="Image" />
        </div>
      </div>
      <div
        className={`${styles.right} bg d-flex flex-column align-items-center justify-content-center h-100 w-50`}
      >
        <div className={` d-flex flex-column w-60`}>
          <span className={`avenir-bold text-2 color-tertiary`}>Welcome!</span>
          <span className={`avenir-regular text-13 color-secondary mb-5`}>
            Enter details to login.
          </span>
          <Input style="mb-3" placeholder="Email" type={InputType.TEXT} />
          <Input
            style="mb-3"
            placeholder="Password"
            type={InputType.PASSWORD}
            showPasswordFilter={true}
          />
          <span
            className={`link avenir-demi-bold text-09 text-uppercase color-primary my-2`}
          >
            Forgot Password?
          </span>
          <Button
            click={() => navigate("/users")}
            style="mt-3"
            label="LOG IN"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;
