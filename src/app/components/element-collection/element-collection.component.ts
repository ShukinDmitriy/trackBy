import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-element-collection',
  templateUrl: './element-collection.component.html',
  styleUrls: ['./element-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementCollectionComponent implements OnInit {

  elements = [
    new Date().getTime(),
    new Date().getTime(),
    new Date().getTime(),
    new Date().getTime(),
    new Date().getTime(),
    new Date().getTime(),
  ];

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
  }

  trackByFn(index: any, item: any) {
    console.log(index);
    console.log(item);
    console.log('trackByFn was called');
    return index;
  }


  onCLickOne() {
    this.elements = [
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
      new Date().getTime(),
    ];

  }

  onClickTwo() {
    console.log('click btn');
  }
}
