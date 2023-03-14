import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";

@Component({
  selector: 'app-show-singer',
  templateUrl: './show-singer.component.html',
  styleUrls: ['./show-singer.component.css']
})
export class ShowSingerComponent implements OnInit{

  singers: Singer[] = [];

  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.singerService.getAll().subscribe(data => {
      this.singers = data;
    })
  }
}
