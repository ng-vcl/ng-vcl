import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject ,  of, scheduled, asapScheduler } from 'rxjs';
import { switchMap, map, catchError, startWith, distinctUntilChanged } from 'rxjs/operators';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

interface Book {
  id: string;
  title: string;
  author?: string;
  date?: string;
  image?: string;
}
interface Search {
  state: 'cleared' | 'loading' | 'error' | 'success';
  books: Book[];
}

@Component({
  templateUrl: 'async.component.html'
})
export class AutocompleteAsyncDemoComponent implements OnDestroy {
  constructor(private http: HttpClient) { }

  search: Search = {
    state: 'cleared',
    books: []
  };

  books: Book[] = [];

  search$ = new BehaviorSubject<string>('');

  ngOnInit() {
    this.search$.pipe(
      distinctUntilChanged(),
      switchMap(value => {
        // Show nothing if less than 2 characters
        if (!value || value.length < 2) {
          return scheduled<Search>([{ state: 'cleared', books: [] }], asapScheduler);
        } else {
          return this.http.get(`${BOOK_API_URL}?q=${value}&projection=lite`).pipe(
            map((data: any) => {
              const items = data.items || [];
              return {
                state: 'success',
                books: items.filter(item => item.id && item.volumeInfo && item.volumeInfo.title)
                            .map(item => ({
                  id: item.id,
                  title: item.volumeInfo.title,
                  image: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,
                  author: item.volumeInfo.authors && item.volumeInfo.authors.join(', '),
                  date: item.volumeInfo.publishedDate,
                }))
              };
            }),
            catchError(() => scheduled<Search>([{ state: 'error', books: [] }], asapScheduler)), // Error state
            startWith({ state: 'loading', books: [] }) // Set state to loading before the request
          );
        }
      }),
      startWith<Search>({ state: 'cleared', books: [] }) // Initial state
    ).subscribe(search => this.search = search);
  }

  onSelectBook(book: Book) {
    if (book) {
      this.search$.next('');
      this.books.push(book);
    }
  }

  onClearBooks() {
    this.books = [];
  }

  ngOnDestroy() {
    this.search$.complete();
  }
}
