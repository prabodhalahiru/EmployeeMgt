import { Injectable } from '@angular/core';
import { CubeEmployee } from '../models/cube-employee'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

//ensure that the services are singletons, easy to inject into other components
@Injectable({
  providedIn: 'root'
})
export class CubeEmployeeService {
  private url = "CubeEmployee";

  //Checking the dependencies class needs
  constructor(private http: HttpClient) { }

  
  public getEmployees() : Observable<CubeEmployee[]> {
    return this.http.get<CubeEmployee[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateEmployee(employee: CubeEmployee) : Observable<CubeEmployee[]> {
    return this.http.put<CubeEmployee[]>(`${environment.apiUrl}/${this.url}`, employee);

  }

  public createEmployee(employee: CubeEmployee) : Observable<CubeEmployee[]> {
    return this.http.post<CubeEmployee[]>(`${environment.apiUrl}/${this.url}`, employee);

  }

  public deleteEmployee(employee: CubeEmployee) : Observable<CubeEmployee[]> {
    return this.http.delete<CubeEmployee[]>(`${environment.apiUrl}/${this.url}/${employee.id}`);

  }
}
