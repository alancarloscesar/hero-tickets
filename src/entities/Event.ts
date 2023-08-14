import Location from "./Location";
import Price from "./Price";
import User from "./User";

interface dataEvent {
  title: string;
  location: Location;
  date: Date;
  description: string;
  banner: string;
  coupons: string[];
  participants: User[];
  price: Price[];
  city: string;
}

export default class Event {
  constructor(data: dataEvent, public teste: string) {

  }
}