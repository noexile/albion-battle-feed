import { Alliance } from "./alliance";

export interface AllianceInfo {
  id: Alliance['id'];
  name: Alliance['name'];
  kills: number;
  deaths: number;
  killFame: number;
}
