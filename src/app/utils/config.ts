import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';

export class Config {

  public static get API(): string {
    return 'https://arcane-earth-62779.herokuapp.com/cohort';
  }

  public static extractData(res: Response) {
    const body = res.json() || {};
    return body;
  }

  public static handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
