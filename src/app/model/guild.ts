import { Alliance } from "./alliance";

export interface Guild {
  id: number
  name: string;
  alliance?: Alliance['name'];
  allianceId?: Alliance['id'];
}
