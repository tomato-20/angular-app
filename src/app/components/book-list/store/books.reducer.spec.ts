import * as fromReducer from "./books.reducer"
import * as booksActions from "./books.action"
import { mockBookArray } from "src/mocks/mockDatas";

describe('BooksReducer' , () => {
    const initialState = fromReducer.initialState;

    describe('load all book action' , () => {
        it('should set loading on book load', () => {
            const state = fromReducer.booksreducer(initialState, booksActions.BooksApiActions.loadBooksList())
            expect(state).toEqual({...initialState, loading: true})
        })


         it('should update state on book load success', () => {
            const expectedState = {
                ...initialState,
                loading: false,
                items: mockBookArray
            }
            const state = fromReducer.booksreducer(initialState, booksActions.BooksApiActions.loadBooksListSuccess({books: mockBookArray}))
            expect(state).toEqual(expectedState)
        })

         it('should set error on book load ', () => {
            const error = 'error'
            const expectedState = {...initialState, loading: false, error}
            const state = fromReducer.booksreducer(initialState, booksActions.BooksApiActions.loadBookListError({error}))
            expect(state).toEqual(expectedState)
        })


    })
})