import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "../models/Singer";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
  constructor(private http: HttpClient) {

  }

  createSinger(singer:any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/singer", singer);
  }

  getAll() :Observable<Singer[]>{
    return this.http.get<Singer[]>("http://localhost:8080/singer");
  }
  createSong(singer:any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/singer", singer);
  }



  delete(id:number) :Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/singer/${id}`);
  }

  findById(id:number) :Observable<Singer>{
    return this.http.get<Singer>(`http://localhost:8080/singer/${id}`);
  }

  findSingerBySinger_name(singer_name:String) :Observable<Singer>{
    return this.http.get<Singer>(`http://localhost:8080/singer/name/${singer_name}`);
  }

  editSong(singer: Singer): Observable<Singer> {
    return this.http.put<Singer>("http://localhost:8080/singer", singer);
  }

  // Hoành thêm
  getAllSinger(page:number) :Observable<Singer[]>{
    return this.http.get<Singer[]>("http://localhost:8080/singer"+'?page=' + page);
  }

}

