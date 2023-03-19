import {Component, OnDestroy, OnInit} from '@angular/core';
import {SongService} from "../../../service/SongService";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../models/Song";

@Component({
  selector: 'app-top-most-listens',
  templateUrl: './top-most-listens.component.html',
  styleUrls: ['./top-most-listens.component.css']
})
export class TopMostListensComponent implements OnInit,OnDestroy{

  id: any
  songs: Song [] = [];
  p: number = 1;
  total: number = 0;
  audios: HTMLAudioElement[] = []
  index: number = 1;
  remaining: any = "0:00";
  duration: any = "0:00";
  private playBtn: any;
  private loopBtn: any;
  private randomBtn: any;
  private muteBtn: any;
  // Hiệu ứng quay ảnh
  private musicThumbnail: any;
  private musicName: any;
  currentSongIndex: number = 0;
  audio: HTMLAudioElement = new Audio();
  newListens: number = 0


  ngOnDestroy(): void {
    this.audio.pause()

  }

  ngOnInit(): void {

    // Gọi hàm tìm tất cả bài hát theo id của ca sĩ
    this.findTop10Song();
    // Tải tài nguyên cho trình phát nhạc
    this.loadAudioResources();
    this.audio.addEventListener('ended', () => {
      this.updateListens()
      this.nextSong();

    });

  }

  constructor(private songService :SongService, private route: ActivatedRoute) {
    // Thực hện hành động lấy id trên đường dẫn
    this.route.params.subscribe((data) => {
      this.id = +data["id"];
    })
    // Gọi hàm tìm 10 bài hát được nghe nhiều nhất
    this.findTop10Song();


  }


  loadAudioResources() {
    let audio = new Audio
    for (let i = 0; i < this.songs.length; i++) {
      audio.src = this.songs[i].file_mp3
      audio.load()
      this.audios.push(audio)
    }

  }

  findTop10Song() {
    this.songService.findTop10Song(this.p).subscribe((data) => {
      this.songs = data;
      this.total = data.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.findTop10Song();
  }




  //  Hàm tự động thêm lượt nghe sau khi hết bài hát
  updateListens() {
    this.newListens = this.songs[this.currentSongIndex].listens + 1
    let id : number = this.songs[this.currentSongIndex].id
    this.songService.saveListens(this.newListens, id).subscribe((data) => {
      this.findTop10Song();
    })

    // this.nextSong();

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
    // this.musicThumbnail = document.querySelector(".music-thumb");

    this.remaining = this.formatTime(this.audio.currentTime)
    this.duration = this.formatTime(this.audio.duration)

    if (this.audio.paused) {
      this.audio.play();
      // this.musicThumbnail.classList.add("is-playing");
      this.playBtn.innerHTML = '<i class="ri-pause-fill icon-pause"></i>'

      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio.duration;

      });
      setInterval(() => {
        this.remaining = this.formatTime(this.audio.currentTime)
        this.duration = this.formatTime(this.audio.duration)
      }, 1000);


    } else {
      this.audio.pause();
      // this.musicThumbnail.classList.remove("is-playing");
      this.playBtn.innerHTML = '<i class="ri-play-fill icon-play"></i>'

    }
  }

  private min: any
  private sec: any

  formatTime(seconds: any) {
    this.min = Math.floor(seconds / 60);
    this.sec = Math.floor(seconds - this.min * 60);
    if (this.sec < 10) {
      this.sec = `0${this.sec}`;
    }
    return `${this.min}:${this.sec}`;
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
    // this.audio = new Audio(this.songs[this.currentSongIndex].file_mp3);

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

  // isRandom: boolean = false;
  //
  // randomSong() {
  //
  //   this.loopBtn = document.querySelector(".play-random");
  //
  //   if (this.isRandom) {
  //     this.isRandom = false;
  //     this.randomBtn.removeAttribute("style");
  //     this.audio.loop = false
  //
  //   } else {
  //     this.isRandom = true;
  //     this.randomBtn.style.color = "#0056fe";
  //     this.audio.loop = true
  //   }
  // }

  onAndOffVolume() {
    this.muteBtn = document.querySelector(".volume-mute");
    if (this.audio.muted) {
      this.muteBtn.innerHTML = '<i class="ri-volume-up-fill ">'
      this.audio.muted = false
    } else {
      this.muteBtn.innerHTML = '<i class="ri-volume-mute-fill "></i>'

      this.audio.muted = true
    }
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
