import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdBean} from '../models/md-bean';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MdAppService {
  // ob_array$: Observable<string[]>;
  ob_map$: Observable<Map<string, Array<MdBean>>>;
  private prefix_str = 'https://raw.githubusercontent.com/littleostar-java/get-littleostar-blog-github-io-md-url/master/json_/';
  // private url_json_array = this.prefix_str + 'md-array.json';
  private url_json_map = this.prefix_str + 'md-map.json';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
    // this.ob_array$ = this.http.get<string[]>(this.url_json_array);
    this.ob_map$ = this.http.get<Map<string, Array<MdBean>>>(this.url_json_map);
  }

}
