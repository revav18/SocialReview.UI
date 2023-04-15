import { UserCredential } from "./userCredential.model";

export interface EstablishmentRegister extends UserCredential {
  name: string;
  description: string;
  city: string;
  address: string;
  phoneNumber: string;
}
