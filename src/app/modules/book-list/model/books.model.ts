export interface Book {
  id: string;
  volumeInfo: BookVolumeInfo;
}

export type BookVolumeInfo = {
  title: string;
  authors?: Array<string>;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
};
