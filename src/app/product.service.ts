import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: Http) {}

  getAlbum(id: number) {
    return this._http
      .get(this._albumUrl)
      .pipe(map(response => response.json()));
  }
}

/*
In this step, if we import 'map' like it is in the instructions (import { map } from 'rxjs/add/operator/map';) an error message shows
(ERROR in src/app/product.service.ts(3,10): error TS2305: Module '".../Angular-AlbumStoreProductPage/node_modules/rxjs/add/operator/map"'
has no exported member 'map'.).
I can fix this by changing the import to "import { map } from 'rxjs/operators';".
But then, the tests fail.
Overall, the Angular CLI used on this project repo is just badly outdated and if I try to update,
it breaks compatibility with other packages that are needed
(for example, rxjs). The repo should be updated to fix issues like this and provide a more enjoyable experience.
*/
