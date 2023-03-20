export class Singer{
  id!: number;
  singer_name!: string;
  singer_avatar!: string ;
  singer_gender!: string;
  birthday!: string;
  music_genre!: string;
  story!: string;
  year!: number;
  band!: string;
  hot_music!: string;
  information!: string;


  constructor(id: number, singer_name: string, singer_avatar: string, singer_gender: string, birthday: string, music_genre: string, story: string, year: number, band: string, hot_music: string, information: string) {
    this.id = id;
    this.singer_name = singer_name;
    this.singer_avatar = singer_avatar;
    this.singer_gender = singer_gender;
    this.birthday = birthday;
    this.music_genre = music_genre;
    this.story = story;
    this.year = year;
    this.band = band;
    this.hot_music = hot_music;
    this.information = information;
  }
}
