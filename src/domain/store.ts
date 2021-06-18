export interface IStore {
  city: string;
  postalCode: string;
  street: string;
  street2: string;
  street3: string;
  addressName: string;
  uuid: string;
  latitude: string;
  longitude: string;
  complexNumber: string;
  locationType: string;
  todayOpen: string;
  todayClose: string;
  sapStoreID: string;
  sundayOpen?: boolean;
  showWarningMessage?: boolean;
  collectionPoint?: boolean;
  isHomeStore?: boolean;
}
