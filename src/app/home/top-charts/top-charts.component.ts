import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css']
})





export class TopChartsComponent implements OnInit,OnDestroy{

  id: any
  songs: Song [] = [];
  p: number = 1;
  total: number = 0;
  audios: HTMLAudioElement[] = []
  index: number = 1;

  private playBtn: any;
  private loopBtn: any;

  // Hiệu ứng quay ảnh

  currentSongIndex: number = 0;
  audio: HTMLAudioElement = new Audio();
  newListens: number = 0


  ngOnDestroy(): void {
    this.audio.pause()

  }

  ngOnInit(): void {

    this.findTopLikeSong();

    // Tải tài nguyên cho trình phát nhạc
    this.loadAudioResources();
    this.audio.addEventListener('ended', () => {
      this.updateListens()
      this.loopSong()

    });

  }

  constructor(private songService :SongService, private route: ActivatedRoute) {

    // Gọi hàm tìm 10 bài hát được thích nhất
    this.findTopLikeSong();

  }

  loadAudioResources() {
    let audio = new Audio
    for (let i = 0; i < this.songs.length; i++) {
      audio.src = this.songs[i].file_mp3
      audio.load()
      this.audios.push(audio)
    }

  }

  findTopLikeSong() {
    this.songService.findTopLikeSong().subscribe((data) => {
      this.songs = data;
    })
  }

  //  Hàm tự động thêm lượt nghe sau khi hết bài hát
  updateListens() {
    this.newListens = this.songs[this.currentSongIndex].listens + 1
    let id : number = this.songs[this.currentSongIndex].id
    this.songService.saveListens(this.newListens, id).subscribe((data) => {

    })

  }

  // Bắt đầu code hiệu ứng phát nhạc

  changeAudio(index: number):void{
    this.currentSongIndex = index;
    this.audio.src = this.songs[this.currentSongIndex].file_mp3;
    this.playAndPauseAudio();
  }

  imgSong = "https://vietthuong.vn/upload/content/images/tuvan/piano/co-am-nhac-cuoc-song-tot-dep-hon-02.jpg"
  nameSong: any

  playAndPauseAudio() {


    this.imgSong = this.songs[this.currentSongIndex].song_avatar
    this.nameSong = this.songs[this.currentSongIndex].song_name

    this.playBtn = document.querySelector(".player-inner");



    if (this.audio.paused) {
      this.audio.play();
      this.playBtn.innerHTML = '<i class="ri-pause-fill icon-pause"></i>'

      this.audio.addEventListener('loadedmetadata', () => {

      });

    } else {
      this.audio.pause();
      this.playBtn.innerHTML = '<i class="ri-play-fill icon-play"></i>'

    }
  }

  nextSong() {
    this.audio.pause();
    this.currentSongIndex++;
    if (this.currentSongIndex >= this.songs.length) {
      this.currentSongIndex = 0;
      this.imgSong = this.songs[0].song_avatar
      this.nameSong = this.songs[0].song_name
    } else {
      this.imgSong = this.songs[this.currentSongIndex].song_avatar
      this.nameSong = this.songs[this.currentSongIndex].song_name
    }
    this.audio.src = this.songs[this.currentSongIndex].file_mp3;

    if (this.audio.paused) {
      // this.audio.play();
      this.playAndPauseAudio();

    }

  }

  previousSong() {
    this.audio.pause();
    this.currentSongIndex--;
    if (this.currentSongIndex < 0) {
      this.currentSongIndex = this.songs.length - 1;
      this.imgSong = this.songs[this.songs.length - 1].song_avatar
      this.nameSong = this.songs[this.songs.length - 1].song_name
    } else {
      this.imgSong = this.songs[this.currentSongIndex].song_avatar
      this.nameSong = this.songs[this.currentSongIndex].song_name
    }


    this.audio.src = this.songs[this.currentSongIndex].file_mp3;
    if (this.audio.paused) {
      // this.audio.play();
      this.playAndPauseAudio();
    }
  }

  isLoop: boolean = false;

  loopSong() {
    this.loopBtn = document.querySelector(".play-infinite");
    if (this.isLoop) {
      this.isLoop = false;
      this.loopBtn.removeAttribute("style");
      this.audio.loop = false

    } else {
      this.isLoop = true;
      this.loopBtn.style.color = "#0056fe";
      this.audio.loop = true
    }
    console.log(this.currentSongIndex)


  }





  volume: number = 1;

  controlVolume(event: Event) {
    let input = event.target as HTMLInputElement
    this.audio.volume = Number(input.value)
    this.fillVolume()
  }

  fillVolume() {
    let input = document.querySelector('.volume-range') as HTMLInputElement
    let percentage = +input.value / +input.max * 100;
    input.style.setProperty('--volPercentage', percentage + '%')
  }

  onRangeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.audio.currentTime = target.valueAsNumber;
  }


}







