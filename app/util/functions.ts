import Router from "next/router";

export const navigate = (location: string) => {
  Router.push(location);
};

export const numberFormatter = (num: number) => {
  return num.toLocaleString("en-US");
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dateFormatter = (input: Date) => {
  let date = input.getDate();
  let month = monthNames[input.getMonth()];
  let year = input.getFullYear();
  let time = input.toLocaleString("en-US", { hour: "numeric", hour12: true });
  return `${month} ${date}, ${year} ${time}`;
};
