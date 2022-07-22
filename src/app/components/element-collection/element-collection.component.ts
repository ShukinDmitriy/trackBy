import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-element-collection',
  templateUrl: './element-collection.component.html',
  styleUrls: ['./element-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementCollectionComponent implements OnInit, OnDestroy {

  private _elements: BehaviorSubject<any[]> = new BehaviorSubject(<any[]>[]);
  elements$ = this._elements.asObservable();

  private unsubscribe$: Subject<void> = new Subject();

  constructor() {
  }

  ngOnInit(): void {
    timer(3000)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(_ => {
        this._elements.next([
          {
            a: 'a1',
            b: 'b1',
            c: 'c1',
          },
          {
            a: 'a2',
            b: 'b2',
            c: 'c2',
          },
          {
            a: 'a3',
            b: 'b3',
            c: 'c3',
          },
        ]);
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  trackByFn(index: any, item: any) {
    console.log('trackByFn was called');
    return index;
  }

  getElements() {
    return Object.values({
      a: {
        a: 'a1',
        b: 'b1',
        c: 'c1',
      },
      b: {
        a: 'a2',
        b: 'b2',
        c: 'c2',
      },
      c: {
        a: 'a3',
        b: 'b3',
        c: 'c3',
      },
    })
  }

  onCLick() {
    console.log('button click');
  }
}
