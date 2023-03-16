import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../models/Song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private http: HttpClient) {

  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>("http://localhost:8080/songs", song);
  }

  getAll(): Observable<Song[]> {
    return this.http.get<Song[]>("http://localhost:8080/songs");
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/songs/${id}`);
  }

  findById(id: number): Observable<Song> {
    return this.http.get<Song>(`http://localhost:8080/songs/${id}`);
  }

  editSong(song: Song): Observable<Song> {
    return this.http.post<Song>("http://localhost:8080/songs/edit", song);
  }

  findSaveSong(id: number): Observable<Song[]> {
    return this.http.get<Song[]>(`http://localhost:8080/songs/saveSong/${id}`);
  }

  findNewSong(page: number): Observable<Song[]> {
    return this.http.get<Song[]>("http://localhost:8080/songs/findNewSong" + "?page" + page);
  }
  getAllOrderBySong_id(page: number): Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs/findAllSong" + "?page" + page);
  }

}
