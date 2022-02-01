import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs";
import { AppConfig, APP_CONFIG } from "../app-config/app-config.module";
import { Music } from "./music";

@Injectable()
export class ItuneService {


    public query: string ="";

    public music : Music[] =[];

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig,) {


    }

    public searchMusic(queryTitle: string) {

        this.query = queryTitle;
        this.http.get(`${this.config.apiEndpoint}search?term=${this.query}`).pipe(
            map(data => {
                const res: any = data;
                console.log(res.results);
                return res.result ? res.results : [];

            })
        ).subscribe( (music) => this.music = music);

    }

    public bookFactory(item: any): Music {

        return new Music(

            item.artistName,
            item.artistViewUrl,
            item.artWork30,
            item.artWorkUrl,
            item.artWorkUrl60,
            item.ArtWorkUrl100,
            item.trackId
        );

    }
}