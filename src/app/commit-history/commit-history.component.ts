import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GitapiService } from '../providers/gitapi.service';

@Component({
  selector: 'app-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.scss']
})
export class CommitHistoryComponent implements OnInit, OnDestroy {
commitHistory:any;
endsubs$: Subject<any> = new Subject();
  constructor(private api:GitapiService) { }

  ngOnInit(): void {
     this.getCommitHistory()
  }

    getCommitHistory(){
    this.api.getCommitHistory('Task','vishnuTenkaniTechy').pipe(takeUntil(this.endsubs$)).subscribe((response:any)=>{
      if(response){
        this.commitHistory=response;
        }
      
    })
  }
  ngOnDestroy() {
    this.endsubs$.next();
    this.endsubs$.complete();
  }

}
