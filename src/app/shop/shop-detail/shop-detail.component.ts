import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import * as fromShop from '../store';
import {select, Store} from '@ngrx/store';
import * as ShopActions from '../store/shop.actions';
import {filter} from 'rxjs/internal/operators';
import {ShopDetailModel} from './shop-detail.model';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit, OnDestroy {

  private activeIndex = 0;
  private imgsCount = 0;
  sub: Subscription;
  store$: Observable<ShopDetailModel>;
  imgsite$: Observable<string>;

  constructor(private route: ActivatedRoute,
              private store: Store<fromShop.State>) {
    this.store$ = this.store.pipe(select(fromShop.getters.store));
    this.imgsite$ = store.pipe(select(fromShop.getters.imgsite));
  }


  ngOnInit() {
    this.store$.pipe(
      filter(a => {
        return a != null;
      })
    ).subscribe(aa => {
      this.imgsCount = aa.imgs.length;
    });

    // 获取当前页面ID
    // const id = this.route.snapshot.params['id'];

    // 监听ID变化
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.store.dispatch(new ShopActions.GetShop({storeid: id}));
        this.activeIndex = 0;
      }
    );
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isActive(index) {
    return this.activeIndex === index;
  }

  next() {
    if (this.activeIndex === this.imgsCount - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
  }

  prev() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.imgsCount - 1;
    } else {
      this.activeIndex--;
    }
  }

  navTo(i: number) {
    this.activeIndex = i;
  }
}
