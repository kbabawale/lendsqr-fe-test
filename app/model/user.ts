export interface Profile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}
export interface Education {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}

export interface User {
  id: string;
  profile: Profile;
  createdAt: Date;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: Date;
  accountBalance: string;
  accountNumber: string;
  education: Education;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
}
