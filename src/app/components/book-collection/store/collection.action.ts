import {
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Book } from '../../book-list/model/books.model';
import { BookReadingStatusEnum, CollectionItem } from '../model/CollectonItem';

export const CollectionItemActions = createActionGroup({
  source : 'Collection',
  events : {
    ' Load All Items': emptyProps(),
    // 'Get  Collection Item List': props<{ collection: string[] }>(),
    ' Load All Items Success' : props<{items: CollectionItem[]}>(),
    ' Failure' : props<{error: string}>(),
    ' Add Item' : props<{book: Book}>(),
    ' Add Item Success' : props<{book: Book}>(),
    ' Remove Item' : props<{bookId:string}>(),
    ' Remove Item Success' : props<{bookId: string}>(),
    ' Change Reading Status' : props<{item : CollectionItem}>(),
    ' Change Reading Status Success ' : props<{bookId: string, readingStatus: number}>()
  }

})

