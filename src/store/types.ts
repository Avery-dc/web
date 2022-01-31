import { Modules } from ".";
import { State as AuthenticationStateTypes } from "./Authentication/state";
import { State as ClientStateTypes } from "./client/state";

export default interface RootStateTypes {}

export interface AllStateTypes extends RootStateTypes {
  [Modules.AUTH]: AuthenticationStateTypes;
  [Modules.CLIENT]: ClientStateTypes;
}
