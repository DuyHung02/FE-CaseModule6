export class Song {
  id!: number;
  song_name!: string;
  description!: string;
  file_mp3!: string;
  song_avatar!: string;
  author!: string;
  posted!: string;
  album!: string;
  song_music_genre!: string;
  listens!: number;


  constructor(id: number, song_name: string, description: string, file_mp3: string, song_avatar: string, author: string, posted: string, album: string, song_music_genre: string, listens: number) {
    this.id = id;
    this.song_name = song_name;
    this.description = description;
    this.file_mp3 = file_mp3;
    this.song_avatar = song_avatar;
    this.author = author;
    this.posted = posted;
    this.album = album;
    this.song_music_genre = song_music_genre;
    this.listens = listens;
  }
}
