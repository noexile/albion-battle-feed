import { Alliance } from "./alliance";
import { Guild } from "./guild";

export interface GuildInfo {
  id: Guild['id'];
  name: Guild['name'];
  alliance: Alliance['name'];
  allianceId: Alliance['id'];
  kills: number;
  deaths: number;
  killFame: number;
}
