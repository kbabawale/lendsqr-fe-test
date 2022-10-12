import { NextPage } from "next";
import { Fragment, memo, useEffect, useState } from "react";
import Header from "../../app/layout/Header";
import Sidebar from "../../app/layout/Sidebar";
import styles from "./index.module.scss";
import Image from "next/image";
import totalUsers from "../../public/images/totalUsers.svg";
import { numberFormatter } from "../../app/util/functions";
import Table from "../../app/element/Table";
import { TableColumn } from "../../app/model/table";
import { getUsers, saveUsers } from "../../app/service/users.service";
import { User } from "../../app/model/user";
import Head from "next/head";

interface StatBoxProps {
  icon: any;
  label: string;
  value: string;
}

const columns: TableColumn[] = [
  { id: 0, label: "Organisation", code: "organisation" },
  { id: 1, label: "Username", code: "username" },
  { id: 2, label: "Email", code: "email" },
  { id: 3, label: "Phone Number", code: "phone" },
  { id: 4, label: "Date Joined", code: "dateJoined" },
  { id: 5, label: "Status", code: "status" },
];

const StatBox = ({ icon, label, value }: StatBoxProps) => {
  return (
    <div
      className={`${styles.statbox} w-20 bg d-flex flex-column align-items-start px-3 py-4`}
    >
      <Image src={icon} />
      <span className={`mt-2 color-secondary text-uppercase text-09 fw-500`}>
        {label}
      </span>
      <span className={`mt-2 text-15 fw-500 color-tertiary`}>{value}</span>
    </div>
  );
};

const Users: NextPage = memo(() => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let users: User[] = await getUsers(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      );
      setUsers(users);
      saveUsers(users);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Users</title>
      </Head>

      <div
        className={`${styles.mainbody} d-flex flex-column align-items-start w-100`}
      >
        <Header />
        <div className={` d-flex align-items-start w-100`}>
          <Sidebar />
          <div
            className={`p-5 flex-fill align-self-start d-flex flex-column align-items-start`}
          >
            <span className={`color-tertiary text-15 fw-500`}>Users</span>
            <div
              className={`${styles.boxes} mt-3 d-flex align-items-center justify-content-between w-100`}
            >
              <StatBox
                icon={totalUsers}
                label="users"
                value={numberFormatter(2453)}
              />
              <StatBox
                icon={totalUsers}
                label="active users"
                value={numberFormatter(2453)}
              />
              <StatBox
                icon={totalUsers}
                label="users with loans"
                value={numberFormatter(12453)}
              />
              <StatBox
                icon={totalUsers}
                label="users with savings"
                value={numberFormatter(102453)}
              />
            </div>
            <div className={`${styles.heightt} mt-5 w-100`}>
              {users.length == 0 && (
                <span
                  className={`color-tertiary text-1 fw-500 text-capitalize`}
                >
                  Loading...
                </span>
              )}
              {users && users.length > 0 && (
                <Table pagination={false} rows={users} columns={columns} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default Users;
