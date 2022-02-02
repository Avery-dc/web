import { Modules } from ".";
import { State as AuthenticationStateTypes } from "./Authentication/state";
import { State as ClientStateTypes } from "./client/state";
import { State as I18nStateTypes } from "./i18n/state";

export default interface RootStateTypes {}

export interface AllStateTypes extends RootStateTypes {
  [Modules.AUTH]: AuthenticationStateTypes;
  [Modules.CLIENT]: ClientStateTypes;
  [Modules.I18N]: I18nStateTypes;
}
