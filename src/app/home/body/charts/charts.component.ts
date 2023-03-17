import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from "../../../models/Song";
import {SongService} from "../../../service/SongService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit, OnDestroy {


  id: any
  songs: Song [] = [];
  p: number = 1;
  total: number = 0;
  audios: HTMLAudioElement[] = []
  index: number = 1;
  remaining: any;
  duration: any;

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


  constructor(private songService: SongService, private route: ActivatedRoute) {
    // Thực hện hành động lấy id trên đường dẫn
    this.route.params.subscribe((data) => {
      this.id = +data["id"];
    })
    // Gọi hàm tìm tất cả bài hát theo id của ca sĩ
    this.findSongByIdSinger();

    // // Tải tài nguyên cho trình phát nhạc
    // this.loadAudioResources();


  }


  ngOnInit(): void {

    // Gọi hàm tìm tất cả bài hát theo id của ca sĩ
    this.findSongByIdSinger();

    // Tải tài nguyên cho trình phát nhạc
    this.loadAudioResources();

    this.audio.addEventListener('ended', () => {
      this.updateListens()

    });


  }


  //  Hàm tự động thêm lượt nghe sau khi hết bài hát
  updateListens() {

    // alert(this.currentSongIndex)
    this.newListens = this.songs[this.currentSongIndex].listens + 1

    // alert("lươt nghe mới là" + this.newListens)

    let id : number = this.songs[this.currentSongIndex].id

    this.songService.saveListens(this.newListens, id).subscribe((data) => {
      this.findSongByIdSinger();
    })

    this.nextSong();

  }


  loadAudioResources() {
    let audio = new Audio
    for (let i = 0; i < this.songs.length; i++) {
      audio.src = this.songs[i].file_mp3
      audio.load()
      this.audios.push(audio)
    }

  }

  findSongByIdSinger() {
    this.songService.findTop10Song(this.p).subscribe((data) => {
      this.songs = data;
      this.total = data.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.findSongByIdSinger();
  }

  changeAudio(index: number):void{
    this.currentSongIndex = index;
    this.audio.src = this.songs[this.currentSongIndex].file_mp3;
    this.playAndPauseAudio();
  }

  playAndPauseAudio() {

    this.imgSong = this.songs[this.currentSongIndex].song_avatar
    this.nameSong = this.songs[this.currentSongIndex].song_name

    this.playBtn = document.querySelector(".player-inner");
    this.musicThumbnail = document.querySelector(".music-thumb");

    this.remaining = this.formatTime(this.audio.currentTime)
    this.duration = this.formatTime(this.audio.duration)

    if (this.audio.paused) {
      this.audio.play();
      this.musicThumbnail.classList.add("is-playing");
      this.playBtn.innerHTML = '<i class="fa fa-pause play-icon" aria-hidden="true"></i>'

      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio.duration;

      });
      setInterval(() => {
        this.remaining = this.formatTime(this.audio.currentTime)
        this.duration = this.formatTime(this.audio.duration)
      }, 1000);


    } else {
      this.audio.pause();
      this.musicThumbnail.classList.remove("is-playing");
      this.playBtn.innerHTML = '<i class="fa fa-play play-icon" aria-hidden="true"></i>'

    }
  }

  imgSong = "https://vietthuong.vn/upload/content/images/tuvan/piano/co-am-nhac-cuoc-song-tot-dep-hon-02.jpg"
  nameSong: any

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
    if (this.isRandom) {
      this.isRandom = false;
      this.loopBtn.removeAttribute("style");
      this.audio.loop = false

    } else {
      this.isRandom = true;
      this.loopBtn.style.color = "#0056fe";
      this.audio.loop = true
    }
    console.log(this.currentSongIndex)

  }

  isRandom: boolean = false;

  randomSong() {

    this.loopBtn = document.querySelector(".play-random");

    if (this.isRandom) {
      this.isRandom = false;
      this.randomBtn.removeAttribute("style");
      this.audio.loop = false

    } else {
      this.isRandom = true;
      this.randomBtn.style.color = "#0056fe";
      this.audio.loop = true
    }
  }

  onAndOffVolume() {
    this.muteBtn = document.querySelector(".volume-mute");
    if (this.audio.muted) {
      this.muteBtn.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>'
      this.audio.muted = false
    } else {
      this.muteBtn.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>'

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


  ngOnDestroy(): void {
    this.audio.pause()

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







}
