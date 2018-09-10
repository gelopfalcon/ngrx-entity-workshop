import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable, onErrorResumeNext, of } from "rxjs";
import { map, filter, switchMap, catchError } from "rxjs/operators";
import { IPizza } from "../interfaces/pizza.interface";
import { environment } from '../../../../../src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class PizzaService {
  private handleError(error: any): Observable<any> {
    return Observable.throw(console.error("Some error occured", error));
  }
  

  constructor(private http: Http) {}

  getPizzas(): Observable<IPizza[]> {
    return this.http.get(`${environment.pizzaService}` + "/pizza/").pipe(
      map(response => {
        return <IPizza[]>response.json();
      }, catchError(this.handleError))
    );
  }

  createPizza(pizzaData: IPizza): Observable<IPizza> {
    return this.http.post(`${environment.pizzaService}` + "/pizza/", pizzaData).pipe(
      map((response: Response) => {
        return <IPizza>response.json();
      }),
      catchError(this.handleError)
    );
  }

  deletePizza(id: string): Observable<any> {
    return this.http
      .delete(`${environment.pizzaService}` + "/pizza/" + id)
      .pipe(catchError(this.handleError));
  }

  updatePizza(pizza:IPizza): Observable<IPizza> {
    let valueToSend = {"price":pizza.price};
    return this.http.patch(`${environment.pizzaService}` + "/pizza/" + pizza.id, valueToSend).pipe(
      map((response: Response) => {
        return <IPizza>response.json();
      }),
      catchError(this.handleError)
    );
  }
}

