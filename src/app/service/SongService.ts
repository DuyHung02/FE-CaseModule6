import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Song} from "../models/Song";
import {Singer} from "../models/Singer";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  constructor(private http: HttpClient) {

  }

  createSong(song:any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/songs", song);
  }

  getAll() :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs");
  }

  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/songs/${id}`);
  }

  findById(id:number) :Observable<Song>{
    return this.http.get<Song>(`http://localhost:8080/songs/${id}`);
  }

  editSong(song: Song): Observable<Song> {
    return this.http.put<Song>("http://localhost:8080/songs", song);
  }

  // Hoành thêm
  findSongBySinger(id: number,page:number): Observable<Song[]> {
    console.log("FAEGETSAHRT")
    console.log(this.http.get<Song[]>(`http://localhost:8080/songs/findSongBySinger/${id}`))
    return this.http.get<Song[]>(`http://localhost:8080/songs/findSongBySinger/${id}`+'?page=' + page);
  }
  // Hoành thêm

  saveListens(listens: number, id: number) : Observable<any> {
    // Khởi tạo dữ liệu theo cùng phần thân của Request gửi đi
    let newListens = {
      listens : listens,
      id: id
    }
    return this.http.post<any>('http://localhost:8080/songs/save/newListens', newListens)
  }


  // Hoành thêm
  findTop10Song(page:number) :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs/findTop10Song"+'?page=' + page);
  }

//  Hùng thêm

  findNewSong(page: number): Observable<Song[]> {
    return this.http.get<Song[]>("http://localhost:8080/songs/findNewSong" + "?page" + page);
  }




}
