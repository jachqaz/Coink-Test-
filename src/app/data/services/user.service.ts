import {Injectable} from '@angular/core';
import {User} from "../../domain/models/user";
import {HttpClient} from "@angular/common/http";

export const API_URL = 'https://api.bancoink.biz/qa/signup/';
export const API_KEY = '?apiKey=030106';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User = new User();

  constructor(private http: HttpClient) {
  }

  async getDocumentTypes(): Promise<any> {
    return this.http.get(`${API_URL}documentTypes${API_KEY}`).toPromise();
  }

  async getGenders(): Promise<any> {
    return this.http.get(`${API_URL}genders${API_KEY}`).toPromise();
  }
}
