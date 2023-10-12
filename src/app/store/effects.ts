import { CollectionEffects } from "src/app/components/book-collection/store/collection.effect";
import { BookEffects } from "src/app/components/book-list/store/books.effect";

export const effects = [
    BookEffects,
    CollectionEffects
]