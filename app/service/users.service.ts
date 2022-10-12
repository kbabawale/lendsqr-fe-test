import { User } from "../model/user";

const DBKEY = "lendsqr-users";

export let getUsers = async (url: string) => {
  let users: User[] = await fetch(url, {
    method: "get",
  }).then((r) => r.json());
  return users;
};
export let saveUsers = (users: User[]) => {
  localStorage.removeItem(DBKEY);
  localStorage.setItem(DBKEY, JSON.stringify(users));
};
export let getUser = (id: string) => {
  if (localStorage.getItem(DBKEY) != null) {
    let users: User[] = JSON.parse(localStorage.getItem(DBKEY) as string);
    let user = users.find((x) => x.id == id);
    return user;
  }
};
