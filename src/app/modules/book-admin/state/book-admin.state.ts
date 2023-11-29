import { Book } from '@app/modules/book-list/model/books.model';



export interface StateStatus {
  loading: boolean;
  success: boolean;
  error: string;
  formSubmitionSuccess: boolean;
}

export interface BookAdminState extends StateStatus {
  items: readonly Book[];
}
