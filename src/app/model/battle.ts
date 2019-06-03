import { PlayerInfo } from "./player-info";
import { GuildInfo } from "./guild-info";
import { AllianceInfo } from "./alliance-info";

export interface Battle {
  id: number;
  startTime: Date;
  endTime: Date;
  timeout: Date;
  totalFame: number;
  clusterName?: string;
  players: PlayerInfo[];
  guilds: GuildInfo[];
  alliances: AllianceInfo[];
  battle_TIMEOUT: number;
}
