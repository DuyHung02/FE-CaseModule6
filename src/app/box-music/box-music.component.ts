import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Song} from "../models/Song";
import {SongService} from "../service/SongService";
import {Router} from "@angular/router";
import {PlaylistService} from "../service/playlist/playlist.service";


@Component({
  selector: 'app-box-music',
  templateUrl: './box-music.component.html',
  styleUrls: ['./box-music.component.css']
})
export class BoxMusicComponent implements OnInit, OnChanges, OnDestroy{
  // thuộc tính song
  @Input() songIndex: number = -1
  songId: any = 0
  songImage: String | undefined = 'https://i.pinimg.com/564x/a2/4a/f1/a24af1a25179acac93d7f2bd507b0985.jpg'
  songName: String | undefined = 'unknown'
  songSinger: String | undefined = 'unknown'
  songMp3: String | undefined = 'unknown'

  // end thuộc tính song


  @Input() songs: Song[] = []
  song!: Song | undefined
  audios: HTMLAudioElement[] = []
  audio: HTMLAudioElement = new Audio();
  playBtn!: any
  loopBtn!: any
  isLoop : boolean = false
  remaining: any = "0:00";
  duration: any = "0:00";
  private min: any
  private sec: any

  ngOnInit(): void {
      this.loadAudio()
      this.audio.addEventListener('ended', ev => {
        this.nextSong()
      })
      this.changeAudio(this.songIndex)
    console.log(this.songs)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeAudio(this.songIndex)
  }

  ngOnDestroy(): void {
    this.audio.pause()
  }

  loadAudio() {
    let audio = new Audio
    for (let i = 0; i < this.songs.length; i++) {
      audio.src = this.songs[i].file_mp3
      audio.load()
      this.audios.push(audio)
    }
  }

  changeAudio(index: number): void {
    this.song = this.songs.at(index)
    this.updateInfo(this.song)
    this.songIndex = index;
    this.audio.src = this.songs[this.songIndex].file_mp3;
    this.playAndPause();
  }

  beginPlay() {
    this.song = this.songs.at(0)
    this.updateInfo(this.song)
    this.audio.src = this.songs[0].file_mp3;
    this.playAndPause();
  }

  updateInfo(song: Song | undefined) {
    this.songImage = song?.song_avatar
    this.songSinger = song?.author
    this.songName = song?.song_name
    this.songId = song?.id
    this.songMp3 = song?.file_mp3
  }

  formatTime(seconds: any) {
    this.min = Math.floor(seconds / 60);
    this.sec = Math.floor(seconds - this.min * 60);
    if (this.sec < 10) {
      this.sec = `0${this.sec}`;
    }
    return `${this.min}:${this.sec}`;
  }


  playAndPause() {
    if (this.songIndex == -1) {
      this.beginPlay()
    } else {
      this.playBtn = document.querySelector(".player-inner");
      this.remaining = this.formatTime(this.audio.currentTime)
      this.duration = this.formatTime(this.audio.duration)
      if (this.audio.paused) {
        this.audio.play();
        this.playBtn.innerHTML = '<i class="ri-pause-fill icon-pause"></i>'
        this.audio.addEventListener('loadedmetadata', () => {
        });

        setInterval(() => {
          this.remaining = this.formatTime(this.audio.currentTime)
          this.duration = this.formatTime(this.audio.duration)
        }, 1000);

      } else {
        this.audio.pause();
        this.playBtn.innerHTML = '<i class="ri-play-fill icon-play"></i>'
      }
    }
  }

  nextSong() {
    this.audio.pause()
    this.songIndex++
    if (this.songIndex >= this.songs.length) {
      this.songIndex = 0
      this.findSongByIndex(this.songIndex)
      this.updateInfo(this.song)
    } else {
      this.findSongByIndex(this.songIndex)
      this.updateInfo(this.song)
    }
    this.audio.src = this.songs[this.songIndex].file_mp3;
    this.playAndPause()
  }

  previous() {
    this.audio.pause()
    this.songIndex--
    if (this.songIndex < 0) {
      this.songIndex = this.songs.length-1
      this.findSongByIndex(this.songIndex)
      this.updateInfo(this.song)
    } else {
      this.findSongByIndex(this.songIndex)
      this.updateInfo(this.song)
    }
    this.audio.src = this.songs[this.songIndex].file_mp3;
    this.playAndPause()
  }

  loopSong() {
    this.loopBtn = document.querySelector(".loop-song");
    if (this.isLoop) {
      this.isLoop = false;
      this.loopBtn.removeAttribute("style");
      this.audio.loop = false;
    } else {
      this.isLoop = true;
      this.loopBtn.style.color = "#0056fe";
      this.audio.loop = true
    }
  }

  volumeSong: number = 1

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

  findSongByIndex(index: number) {
    this.song = this.songs.at(index)
  }


}
