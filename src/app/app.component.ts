import {Component} from '@angular/core';
import {fadeAnimation} from './shared/route-animations';
import * as fromRoot from './app.reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  show$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.show$ = this.store.pipe(select(fromRoot.getShow));
  }
}
