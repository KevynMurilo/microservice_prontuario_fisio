import { Injectable } from '@nestjs/common';
import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private readonly httpService: AxiosHttpService) {}

  get<T>(url: string, params?: any): Observable<AxiosResponse<T>> {
    return this.httpService.get<T>(url, { params });
  }

  post<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.httpService.post<T>(url, data);
  }
}
