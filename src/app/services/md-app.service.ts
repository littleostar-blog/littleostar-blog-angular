import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MdAppService {
  private prefix_str = 'https://raw.githubusercontent.com/littleostar-java/get_littleostar_blog_md_url/master/json_/';
  private midfix = 'md_array';
  private suffix = '.json';
  private sprit = '/';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
  }

  getItem(nav: string, item: string): Observable<MdBean> {
    return this.getItemList(nav).pipe(map(itemList => itemList.find(itemBean => itemBean.md_title === item)));
  }

  getItemList(nav: string): Observable<Array<MdBean>> {
    const url = this.prefix_str + this.midfix + this.sprit + nav + this.suffix;
    return this.http.get<Array<MdBean>>(url);
  }

  getNavList(): Observable<Array<string>> {
    const url = this.prefix_str + this.midfix + this.suffix;
    return this.http.get<Array<string>>(url);
  }

}
