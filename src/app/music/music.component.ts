
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItuneService } from '../shared/itune-service';
import { Music } from '../shared/music';
import { map } from "rxjs";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

music :Music []=[] ;

  constructor(private router :Router, private route:ActivatedRoute,  public intuneMusicService: ItuneService) { 

    this.route.params.subscribe((params=>{

      if (params['musicId']){

        //  console.log(params['musicId']);

         this.getMusic(params['musicId'])


      
      }
    }));
    


  }

  getMusic( musicId:string){
    this.intuneMusicService.more_infomusicId(musicId).pipe(
      map(data => {
        const res: any = data;
        console.log(res.results);
        return res.results ? res.results : [];

    })
    ).subscribe((music) => this.music=music);
   
  }





  ngOnInit(): void {
  }

}
