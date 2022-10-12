import { memo, useEffect, useRef, useState } from "react";
import { TableColumn } from "../../model/table";
import styles from "./index.module.scss";
import Image from "next/image";
import filter from "../../../public/images/filter.svg";
import view from "../../../public/images/view.svg";
import activate from "../../../public/images/activate.svg";
import blacklist from "../../../public/images/blacklist.svg";
import { dateFormatter, navigate } from "../../util/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCaretDown,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

type AppProps = {
  pagination: boolean;
  rows: any[];
  columns: TableColumn[];
};

type StatusBoxProps = {
  label: string;
};

function useOutsideAlerter(ref: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        let element = document.querySelectorAll(".opt");
        [].forEach.call(element, function (el: Element) {
          el.classList.remove("d-block");
        });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const StatusBox = ({ label }: StatusBoxProps) => {
  let switchFn = () => {
    switch (label.toUpperCase()) {
      case "ACTIVE":
        return (
          <span
            className={`${styles.active} text-08 color-primary text-capitalize`}
          >
            {label}
          </span>
        );
      case "INACTIVE":
        return (
          <span
            className={`${styles.inactive} text-08 color-secondary text-capitalize`}
          >
            {label}
          </span>
        );
      case "BLACKLISTED":
        return (
          <span
            className={`${styles.error} text-08 color-error text-capitalize`}
          >
            {label}
          </span>
        );
      case "PENDING":
        return (
          <span
            className={`${styles.yellow} text-08 color-yellow text-capitalize`}
          >
            {label}
          </span>
        );
      default:
        return <></>;
    }
  };
  return switchFn();
};

const Table = memo<AppProps>(({ columns, rows, pagination }: AppProps) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleOptions = (index: number) => {
    //add display-block to element
    let element = document.getElementById(`option${index}`);
    if (element?.classList.contains("d-block")) {
      element.classList.remove("d-block");
    } else {
      element?.classList.add("d-block");
    }
    //hide all others
  };

  return (
    <div className={`d-flex flex-column align-items-center`}>
      <table
        className={`${styles.statbox} ${styles.table} p-4 w-100 d-flex flex-column align-items-center`}
      >
        <thead>
          <tr>
            {columns &&
              columns.map((x, i) => (
                <th key={i}>
                  <span
                    className={`me-3 text-08 fw-500 color-secondary text-uppercase`}
                  >
                    {x.label}
                  </span>
                  <Image className="link" src={filter} />
                </th>
              ))}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody ref={wrapperRef}>
          {rows &&
            rows.map((x, i) => (
              <tr key={i}>
                <td>
                  <span className={`text-08 color-secondary text-capitalize`}>
                    {x.orgName}
                  </span>
                </td>
                <td>
                  <span className={`text-08 color-secondary text-capitalize`}>
                    {x.userName}
                  </span>
                </td>
                <td>
                  <span className={`text-08 color-secondary text-lowercase`}>
                    {x.email}
                  </span>
                </td>
                <td>
                  <span className={`text-08 color-secondary`}>
                    {x.phoneNumber}
                  </span>
                </td>
                <td>
                  <span className={`text-08 color-secondary`}>
                    {dateFormatter(new Date(x.createdAt))}
                  </span>
                </td>
                <td>
                  &nbsp;
                  {/* <StatusBox label={x.status} /> */}
                </td>
                <td>
                  <FontAwesomeIcon
                    id="optionIcon"
                    onClick={() => toggleOptions(i)}
                    className="link"
                    icon={faEllipsisV}
                  />
                  <div id={`option${i}`} className={`opt ${styles.options} bg`}>
                    <div
                      className={`d-flex flex-column p-3 align-items-center justify-content-center`}
                    >
                      <div
                        className={`link hover pb-2 w-100 d-flex align-items-center`}
                        onClick={() => navigate(`/users/${x.id}`)}
                      >
                        <Image src={view} />
                        <span className={`ms-2 text-09 color-secondary`}>
                          View Details
                        </span>
                      </div>
                      <div
                        className={`link hover pb-2 w-100 d-flex align-items-center`}
                      >
                        <Image src={blacklist} />
                        <span className={`ms-2 text-09 color-secondary`}>
                          Blacklist User
                        </span>
                      </div>
                      <div
                        className={`link hover pb-2 w-100 d-flex align-items-center`}
                      >
                        <Image src={activate} />
                        <span className={`ms-2 text-09 color-secondary`}>
                          Activate User
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {pagination && (
        <div
          className={`${styles.pagination} mt-3 d-flex align-items-center justify-content-between w-100`}
        >
          <div className={`w-50 d-flex align-items-center`}>
            <span className={`me-2 text-09 color-secondary text-capitalize`}>
              Showing
            </span>
            <div
              className={`me-2 link ${styles.paginationFilter} px-2 py-1 d-flex align-items-center`}
            >
              <span className={`text-09 color-secondary text-capitalize me-2`}>
                100
              </span>
              <FontAwesomeIcon className="" icon={faAngleDown} />
            </div>
            <span className={`text-09 color-secondary text-lowercase`}>
              out of 100
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default Table;
