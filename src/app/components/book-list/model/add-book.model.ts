export interface AddBookModel {
  title: string;
  description?: string;
  authors: Array<string>;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}
