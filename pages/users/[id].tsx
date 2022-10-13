import { NextPage } from "next";
import { Fragment, memo, useEffect, useState } from "react";
import Header from "../../app/layout/Header";
import Sidebar from "../../app/layout/Sidebar";
import styles from "./index.module.scss";
import Image from "next/image";
import backImage from "../../public/images/back.svg";
import singleUserImage from "../../public/images/user.svg";
import starUnfilled from "../../public/images/starUnfilled.svg";
import starFilled from "../../public/images/starFilled.svg";
import { useRouter } from "next/router";
import { User } from "../../app/model/user";
import { getUser } from "../../app/service/users.service";
import { navigate } from "../../app/util/functions";
import Head from "next/head";

const SingleUser: NextPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      let fetchedUser = getUser(id as string);
      setUser(fetchedUser);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>
          {user?.profile.firstName} {user?.profile.lastName} - User
        </title>
      </Head>

      <div className={`d-flex flex-column align-items-start w-100`}>
        <Header />
        <div className={` d-flex align-items-start w-100`}>
          <Sidebar />
          <div
            className={`p-5 flex-fill align-self-start d-flex flex-column align-items-start`}
          >
            <div
              onClick={() => navigate("/users")}
              className={`link hover d-flex align-items-center`}
            >
              <Image src={backImage} />
              <span className={`ms-3 color-secondary text-09`}>
                Back to Users
              </span>
            </div>
            {!user && (
              <span className={`color-tertiary text-1 fw-500 text-capitalize`}>
                Loading...
              </span>
            )}
            {user && (
              <Fragment>
                <div
                  className={`${styles.column} mt-3 d-flex align-items-center justify-content-between w-100`}
                >
                  <span className={`color-tertiary text-15 fw-500`}>
                    User Details
                  </span>
                  <div className={`d-flex align-items-center`}>
                    <div className={`link hover me-3 ${styles.redButton}`}>
                      Blacklist User
                    </div>
                    <div className={`link hover ${styles.greenButton}`}>
                      Activate User
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.statbox} px-4 pt-4 mt-5 d-flex flex-column align-items-center w-100`}
                >
                  <div
                    className={`${styles.column_center} d-flex align-items-center w-100`}
                  >
                    <div
                      className={`${styles.roundedImage} d-flex align-items-center justify-content-center`}
                    >
                      <Image width={100} src={singleUserImage} />
                    </div>
                    <div
                      className={`ms-3 ${styles.borderRight} px-4 py-2 d-flex flex-column`}
                    >
                      <span className={`color-tertiary text-15 fw-400`}>
                        {user?.profile.firstName} {user?.profile.lastName}
                      </span>
                      <span className={`color-secondary text-09`}>
                        {user?.accountNumber}
                      </span>
                    </div>
                    <div
                      className={`ms-3 ${styles.borderRight} ps-4 pe-5 py-3 d-flex flex-column`}
                    >
                      <span className={`color-secondary text-09 fw-500`}>
                        User&apos;s Tier
                      </span>
                      <div className={`mt-1 d-flex align-items-center`}>
                        <span>
                          <Image src={starFilled} />
                        </span>
                        <span className="mx-1">
                          <Image src={starUnfilled} />
                        </span>
                        <span>
                          <Image src={starUnfilled} />
                        </span>
                      </div>
                    </div>
                    <div className={`ms-3 px-4 py-2 d-flex flex-column`}>
                      <span className={`color-tertiary text-15 fw-400`}>
                        ₦{user?.accountBalance}
                      </span>
                      <span className={`color-secondary text-09`}>
                        {user?.profile.bvn}/Providus Bank
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles.scroller} mt-5 d-flex align-items-center justify-content-between w-100`}
                  >
                    <span
                      className={`link hover text-1 color-primary px-4 py-1 ${styles.underline}`}
                    >
                      General Details
                    </span>
                    <span
                      className={`link hover text-1 color-secondary px-4 py-1`}
                    >
                      Documents
                    </span>
                    <span
                      className={`link hover text-1 color-secondary px-4 py-1`}
                    >
                      Bank Details
                    </span>
                    <span
                      className={`link hover text-1 color-secondary px-4 py-1`}
                    >
                      Loans
                    </span>
                    <span
                      className={`link hover text-1 color-secondary px-4 py-1`}
                    >
                      Savings
                    </span>
                    <span
                      className={`link hover text-1 color-secondary px-4 py-1`}
                    >
                      App and System
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.statbox} px-4 pt-4 pb-4 mt-4 d-flex flex-column align-items-center w-100`}
                >
                  {/* Ist section */}
                  <section
                    className={`${styles.underline_2} ${styles.section} pb-3 d-flex flex-column w-100`}
                  >
                    <span
                      className={`color-tertiary text-1 fw-500 text-capitalize`}
                    >
                      Personal Information
                    </span>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Full Name</span>
                        </td>
                        <td>
                          <span>Phone Number</span>
                        </td>
                        <td>
                          <span>Email Address</span>
                        </td>
                        <td>
                          <span>BVN</span>
                        </td>
                        <td>
                          <span>Gender</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>
                            {user?.profile.firstName} {user?.profile.lastName}
                          </span>
                        </td>
                        <td>
                          <span>{user?.phoneNumber}</span>
                        </td>
                        <td>
                          <span>{user?.email}</span>
                        </td>
                        <td>
                          <span>{user?.profile.bvn}</span>
                        </td>
                        <td>
                          <span>{user?.profile.gender}</span>
                        </td>
                      </tr>
                    </table>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Marital Status</span>
                        </td>
                        <td>
                          <span>Children</span>
                        </td>
                        <td>
                          <span>Type of Residence</span>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <span>Single</span>
                        </td>
                        <td>
                          <span>None</span>
                        </td>
                        <td>
                          <span>Parent Apartment</span>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </section>

                  {/* 2nd section */}
                  <section
                    className={`${styles.underline_2} ${styles.section} mt-4 pb-3 d-flex flex-column w-100`}
                  >
                    <span
                      className={`color-tertiary text-1 fw-500 text-capitalize`}
                    >
                      Education and Employment
                    </span>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Level of Education</span>
                        </td>
                        <td>
                          <span>Employment Status</span>
                        </td>
                        <td>
                          <span>Sector of Employment</span>
                        </td>
                        <td>
                          <span>Duration of Employment</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>{user?.education.level}</span>
                        </td>
                        <td>
                          <span>{user?.education.employmentStatus}</span>
                        </td>
                        <td>
                          <span>{user?.education.sector}</span>
                        </td>
                        <td>
                          <span>{user?.education.duration}</span>
                        </td>
                      </tr>
                    </table>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Office Email</span>
                        </td>
                        <td>
                          <span>Monthly Income</span>
                        </td>
                        <td>
                          <span>loan Repayment</span>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <span>{user?.education.officeEmail}</span>
                        </td>
                        <td>
                          <span>{user?.education.monthlyIncome}</span>
                        </td>
                        <td>
                          <span>{user?.education.loanRepayment}</span>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </section>

                  {/* 3rd Section */}
                  <section
                    className={`${styles.underline_2} ${styles.section} mt-4 pb-3 d-flex flex-column w-100`}
                  >
                    <span
                      className={`color-tertiary text-1 fw-500 text-capitalize`}
                    >
                      Socials
                    </span>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Twitter</span>
                        </td>
                        <td>
                          <span>Facebook</span>
                        </td>
                        <td>
                          <span>Instagram</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>{user?.socials.twitter}</span>
                        </td>
                        <td>
                          <span>{user?.socials.facebook}</span>
                        </td>
                        <td>
                          <span>{user?.socials.instagram}</span>
                        </td>
                      </tr>
                    </table>
                  </section>

                  {/* 4th Section */}
                  <section
                    className={`${styles.section} mt-4 pb-3 d-flex flex-column w-100`}
                  >
                    <span
                      className={`color-tertiary text-1 fw-500 text-capitalize`}
                    >
                      Guarantor
                    </span>
                    <table className={`mt-3`}>
                      <tr>
                        <td>
                          <span>Full Name</span>
                        </td>
                        <td>
                          <span>Phone Number</span>
                        </td>
                        <td>
                          <span>Email Address</span>
                        </td>
                        <td>
                          <span>Relationship</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>
                            {user?.guarantor.firstName}{" "}
                            {user?.guarantor.lastName}
                          </span>
                        </td>
                        <td>
                          <span>{user?.guarantor.phoneNumber}</span>
                        </td>
                        <td>
                          <span>&nbsp;</span>
                        </td>
                        <td>
                          <span>&nbsp;</span>
                        </td>
                      </tr>
                    </table>
                  </section>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});
SingleUser.displayName = "SingleUser";
export default SingleUser;
