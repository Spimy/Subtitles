export interface MediaData {
  banner: string;
  poster: string;
  imdb_id: string;
  release_date: string;
  title: string;
}

// subtitles for movies
export interface MSubtitle {
  download_url: string;
  language: string;
  file_name: string;
}

export interface MovieSubtitle extends Movie {
  subtitles: Array<MSubtitle>;
}

export enum MediaType {
  MOVIE = 'movie',
  SHOW = 'show'
}
