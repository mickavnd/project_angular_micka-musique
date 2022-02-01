import { Component, Input, OnInit } from '@angular/core';
import { ItuneService } from '../shared/itune-service';
import { Music } from '../shared/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  constructor(public ItuneService:  ItuneService) { }
 
  @Input()
  public musics: Music[] | undefined;




  ngOnInit(): void {
  }

}
