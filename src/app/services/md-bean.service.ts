import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';

@Injectable({
  providedIn: 'root'
})
export class MdBeanService {
  private bean_remote_subject: BehaviorSubject<MdBean> = new BehaviorSubject<MdBean>(null);
  bean_remote$: Observable<MdBean> = this.bean_remote_subject.asObservable();

  constructor() {
  }

  sendData(bean: MdBean) {
    if (bean) {
      this.bean_remote_subject.next(bean);
      this.bean_remote$ = this.bean_remote_subject.asObservable();
    }
  }

}
