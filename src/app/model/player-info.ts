import { Player } from "./player";
import { Alliance } from "./alliance";

export interface PlayerInfo {
  id: Player['id'];
  name: Player['name'];
  kills: number;
  deaths: number;
  killFame: number;
  guildId: Player['id'];
  guildName: Player['guildName'];
  allianceid: Alliance['id'];
  allianceName: Alliance['name'];
}
