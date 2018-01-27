export interface IEdition {
  id?: string;
  nazwa: String;
  //TODO CHANGE TO ISCHOOL
  participants?: Array<IParticipant>;
}
export interface IParticipant {
  id?: string;
  region: string;
  city: String;
  school_type: String;
  school_name: String;
}
export interface ISponsor {
  id?: string;
  name: String;
  href: String;
  src: String;
}
export interface IComittee {
  id?: string;
  region: String;
  address: IAddress;
  moderator: IPerson;
}

// ??
export interface ISchoolTeam {
  id?: string;
  name: string;
  schools: Array<ISchool>;
}
export interface ISchool {
  id?: string;
  name: string;
  type: string;
  patron: string;
  tel: number; // one from these
  email: string; // is  Required
  fax: number; // can be null
  director: IPerson;
}
export interface IAddress {
  id?: string;
  province: string;
  county: string;
  city: string;
  name: string;
  street: string;
  postcode: string;
}
export interface IPerson {
  id?: string;
  firstName: string;
  lastName: string;
  title: string; //can be null
  tel: number; //can be null
  email: string; //can be null
}
export interface IClass {
  id?: string;
  class: string;
  language: string;
  guardian: IPerson;
}
