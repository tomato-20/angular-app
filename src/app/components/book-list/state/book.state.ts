import { Book } from "../model/books.model"

export interface BookListState {
    items: ReadonlyArray<Book>,
    loading: boolean,
    error: string
}

