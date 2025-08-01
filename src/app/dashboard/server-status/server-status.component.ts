import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true
})
export class ServerStatusComponent implements OnInit {
  currentStatus : 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
   const interval = setInterval(()=>{
      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus = 'online';
      }else if (rnd < 0.9){
        this.currentStatus = 'offline';
      }else {
        this.currentStatus = 'unknown';
      }
    },5000)
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval)
      console.log("component destroyed")
    })
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  // ngOnDestroy() {
  //
  // }
}
