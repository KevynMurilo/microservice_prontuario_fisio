import { Injectable } from '@nestjs/common';
import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private readonly httpService: AxiosHttpService) {}

  get<T>(url: string, config?: any): Observable<AxiosResponse<T>> {
    return this.httpService.get<T>(url, config);
  }

  post<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.httpService.post<T>(url, data);
  }

  patch<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.httpService.patch<T>(url, data);
  }
}
