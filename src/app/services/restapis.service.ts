import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment} from '../../environments/environment';
const url = 'http://dev.india4globe.com:8091/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic cmFqdTpyYWp1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestapisService {
  headerDetail: any;
  constructor(private http: HttpClient) { }

  getApiResponse(api): Observable<any> {
    return this
            .http
            .get<any>(url + api , httpOptions)
            .pipe(
              map((response: Response) => {
                return <any>response;
            })).pipe(catchError(error => {
              return throwError(error);
            }));
      }

      postApiResponse(api, data): Observable<any> {
        return this
                .http
                .post<any>(url + api , data , httpOptions)
                .pipe(
                  map((response: Response) => {
                    return <any>response;
                })).pipe(catchError(error => {
                  return throwError(error);
                }));
          }

          errorTracking(httpcode  , restmethodname ){
            const errordata = {
                'restmethodname':restmethodname,
                'httperrorcode':httpcode
            }
            this.postApiResponse('i4gorigin.admin-1.0.0/logAngularError' , errordata).subscribe( data => {
              console.log(data);
            });
          }
}
