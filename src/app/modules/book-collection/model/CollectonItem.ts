import { Book } from "../../book-list/model/books.model"

export enum BookReadingStatusEnum {
    'ToRead' = 0,
    'Reading' = 1,
    'Completed'= 2
}

export  interface CollectionItem extends Book  {
    readingStatus: BookReadingStatusEnum
}