import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';

@Injectable()
export class MdBeanService {
  private bean_remote_subject: BehaviorSubject<MdBean> = new BehaviorSubject<MdBean>(null);
  bean_remote$: Observable<MdBean> = this.bean_remote_subject.asObservable();

  private url_link_subject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  url_link$: Observable<string> = this.url_link_subject.asObservable();

  constructor() {
  }

  sendData(bean: MdBean) {
    if (bean) {
      this.bean_remote_subject.next(bean);
      this.bean_remote$ = this.bean_remote_subject.asObservable();
    }
  }

  dealLinkUrl(bean: MdBean) {
    if (bean) {
      const reqHeadStr = 'https://raw.githubusercontent.com/littleostar-blog/littleostar-blog';
      const linkHeadStr = 'https://github.com/littleostar-blog/littleostar-blog/blob';
      const linkUrl = bean.md_url.replace(reqHeadStr, linkHeadStr);

      this.url_link_subject.next(linkUrl);
      this.url_link$ = this.url_link_subject.asObservable();
    }
  }
}
