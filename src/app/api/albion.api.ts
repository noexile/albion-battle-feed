import { HttpClient, HttpParams } from '@angular/common/http';
import { Battle } from '../model/battle';

export class AlbionApi {
  private readonly API_URL = 'https://gameinfo.albiononline.com/api/gameinfo';
  private readonly LIVE_URL = 'http://live.albiononline.com';

  constructor(protected httpClient: HttpClient) { }

  public getBattles() {
    const path = this.API_URL + '/battles';
    return this.httpClient.get<Battle>(path);
  }

  public getBattle(id: string) {
    const path = this.API_URL + `/battles/${id}`;
    return this.httpClient.get<Battle>(path);
  }

}
