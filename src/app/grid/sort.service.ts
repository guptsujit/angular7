import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnSortedEvent } from './column-sorted-event';
@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    this.columnSortedSource.next(event);
  }
  compareValues(key, order = 'asc') {
    return function (a, b) {
    
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      /* If key is string then assign a to result otheriwse b */
      const keyA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
       
      const keyB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (keyA > keyB) {
        comparison = 1;
      } else if (keyA < keyB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  
}
