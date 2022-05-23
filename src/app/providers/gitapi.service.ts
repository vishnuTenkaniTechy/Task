import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GitapiService {
  commitsHistory:any = environment.URL + 'repos/';
  constructor(private http: HttpClient ) { }


  getCommitHistory(repoName:string,UserName:string){
      return this.http.get(`${this.commitsHistory}${UserName}/${repoName}/commits`)
  }
}
