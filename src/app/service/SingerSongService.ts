import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingerSong} from "../models/SingerSong";


@Injectable({
  providedIn: 'root'
})
export class SingerSongService {
  constructor(private http: HttpClient) {

  }

  createSingerSong(singerSongId:any): Observable<SingerSong> {
    return this.http.post<SingerSong>("http://localhost:8080/singerSong", singerSongId);
  }

  getAll() :Observable<SingerSong[]>{
    return this.http.get<SingerSong[]>("http://localhost:8080/singerSong");
  }

  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/singerSong/${id}`);
  }

  findById(id:number) :Observable<SingerSong>{
    return this.http.get<SingerSong>(`http://localhost:8080/singerSong/${id}`);
  }

  editSong(singerSong: SingerSong): Observable<SingerSong> {
    return this.http.put<SingerSong>("http://localhost:8080/singerSong", singerSong);
  }

}
