import { Injectable } from '@angular/core';
import {RequestOptions,Http, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../../utils/config';

@Injectable()
export class UploadFileService {

  constructor (private http: Http) {}

  public uploadData(events): Observable<any> {
    const data = { data: events }
		return this.http.post(`${Config.API}` + '/uploadFile', data)
			.map(Config.extractData).catch(Config.handleError);
  }

  public downloadData(event,quantity): Observable<any> {
    const data = { event,quantity }
		return this.http.post(`${Config.API}` + '/convertCulumative', data)
			.map(Config.extractData).catch(Config.handleError);
  }
}
