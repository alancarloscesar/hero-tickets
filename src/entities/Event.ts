import Location from "./Location";
import Price from "./Price";
import User from "./User";

export default interface dataEvent {
  title: string;
  location: Location;
  categories: string;
  date: Date;
  description: string;
  banner?: string;
  flyers?: string;
  coupons: string[];
  participants: User[];
  price: Price[];
  city: string;
}

class Event {
  constructor(
    public data?: dataEvent,
  ) { }
}

export { Event }