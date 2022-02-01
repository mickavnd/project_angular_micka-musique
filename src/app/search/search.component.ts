import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItuneService } from '../shared/itune-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Injectable()
export class SearchComponent implements OnInit {

  constructor(public Ituneservice: ItuneService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.Ituneservice.searchMusic(form.value.search)


  }

}
