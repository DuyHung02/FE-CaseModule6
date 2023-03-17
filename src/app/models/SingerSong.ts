export class SingerSong {
  id!: number;
  singer_id!: any;
  song_id!: any;

  constructor(id: number, singer_id: any, song_id: any) {
    this.id = id;
    this.singer_id = singer_id;
    this.song_id = song_id;
  }

}
