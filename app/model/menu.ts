import user from "../../public/images/users.svg";

export interface MenuItem {
  icon: any;
  label: string;
  active?: boolean;
}

export interface Menu {
  group: string;
  items: MenuItem[];
}

export const _Menu: Menu[] = [
  {
    group: "Customers",
    items: [
      {
        icon: user,
        label: "Users",
      },
      {
        icon: user,
        label: "Guarantors",
      },
      {
        icon: user,
        label: "Loans",
      },
      {
        icon: user,
        label: "Decision Models",
      },
    ],
  },
  {
    group: "Businesses",
    items: [
      {
        icon: user,
        label: "Organisation",
      },
      {
        icon: user,
        label: "Loan Products",
      },
      {
        icon: user,
        label: "Saving Products",
      },
      {
        icon: user,
        label: "Fees and Charges",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        icon: user,
        label: "Preferences",
      },
      {
        icon: user,
        label: "Fees and Pricing",
      },
      {
        icon: user,
        label: "Audit Logs",
      },
    ],
  },
];
