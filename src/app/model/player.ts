import { Guild } from "./guild";
import { Alliance } from "./alliance";

export interface Player {
  id: string;
  name: string;
  guildId: Guild['id'];
  guildName: Guild['name'];
  allianceId: Alliance['id'];
  allianceName: Alliance['name'];
}
