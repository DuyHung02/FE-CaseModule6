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

  createSong(song:Song): Observable<Song> {
    return this.http.post<Song>("http://localhost:8080/songs", song);
  }

  getAll() :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs");
  }

  showActiveSong(active:number) :Observable<Song[]>{
    return this.http.get<Song[]>(`http://localhost:8080/songs/show/${active}`);
  }

  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/songs/${id}`);
  }

  findById(id:number) :Observable<Song>{
    return this.http.get<Song>(`http://localhost:8080/songs/${id}`);
  }

  findSongBySongName(song_name:String) :Observable<Song>{
  return this.http.get<Song>(`http://localhost:8080/songs/find/${song_name}`);
}


  editSong(song: Song): Observable<Song> {
    return this.http.post<Song>("http://localhost:8080/songs/edit", song);
  }

  findSaveSong( id:number) :Observable<Song[]>{
    return this.http.get<Song[]>(`http://localhost:8080/songs/saveSong/${id}`);
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



  // Hoành thêm lưu lượt like mới

  saveLikes(likes: number, id: number) : Observable<any> {
    // Khởi tạo dữ liệu theo cùng phần thân của Request gửi đi
    let newLikes = {
      likes : likes,
      id: id
    }
    return this.http.post<any>('http://localhost:8080/songs/save/newLikes', newLikes)
  }


  // Hoành thêm
  findTop10Song(page:number) :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs/findTop10Song"+'?page=' + page);
  }

  // Hoành thêm
  findTop5Listens() :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs/findTop5Song");
  }



  // Hoành thêm
  findTopLikeSong() :Observable<Song[]>{
    return this.http.get<Song[]>("http://localhost:8080/songs/findTopLikeSong");
  }

//  Hùng thêm

  findNewSong(page: number): Observable<Song[]> {
    return this.http.get<Song[]>("http://localhost:8080/songs/findNewSong" + "?page" + page);
  }


}
