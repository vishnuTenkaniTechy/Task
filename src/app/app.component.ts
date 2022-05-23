import { Component } from '@angular/core';
import {GitapiService} from './providers/gitapi.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  commitHistory:any;

  constructor(private api:GitapiService){
    this.getCommitHistory()
  }

  getCommitHistory(){
    this.api.getCommitHistory('Task','vishnuTenkaniTechy').subscribe((response:any)=>{
      console.log(response);
      if(response){
        this.commitHistory=response;
      }
      
    })
  }
}
