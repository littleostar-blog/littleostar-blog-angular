import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MdAppService {
  ob_array$: Observable<Array<string>>;
  private suffix = '.json';
  private prefix_str = 'https://raw.githubusercontent.com/littleostar-java/get_littleostar_blog_md_url/master/json_/';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
    const json_name = 'md_array';
    this.ob_array$ = this.getJsonHead(null, json_name);
  }

  getJson(prefix: string, json_name: string): Observable<Array<MdBean>> {
    const url = this.prefix_str + prefix + '/' + json_name + this.suffix;
    return this.http.get<Array<MdBean>>(url);
  }

  getJsonHead(prefix: string, json_name: string): Observable<Array<string>> {
    const url = this.prefix_str + json_name + this.suffix;
    return this.http.get<Array<string>>(url);
  }

}
