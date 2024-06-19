import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    registration: any;
    HSStaticMethods: IStaticMethods;
  }
}
