import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MdAppService {
  ob_map$: Observable<Map<string, Array<MdBean>>>;
  private prefix_str = 'https://raw.githubusercontent.com/littleostar-java/get_littleostar_blog_md_url/master/json_/';
  private url_json_map = this.prefix_str + 'md_map.json';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
    this.ob_map$ = this.http.get<Map<string, Array<MdBean>>>(this.url_json_map);
  }

}
