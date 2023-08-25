export default interface dataLocation {
  latitude: string;
  longitude: string;
}
export default class Location {
  constructor({ latitude, longitude }: dataLocation
  ) {
    this.latitude = latitude;
    this.longitude = longitude;
    // this.prop1 = prop1;
  }
}