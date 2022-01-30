import { Modules } from ".";
import { State as AuthenticationStateTypes } from "./Authentication/state";

export default interface RootStateTypes {
  text: string;
}

export interface AllStateTypes extends RootStateTypes {
  [Modules.AUTH]: AuthenticationStateTypes;
}
