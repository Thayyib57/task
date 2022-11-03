import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PolservService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl
  // private userToken = environment
  // var auth = `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0OWM4ZDdhYzc0MDQ1NmYyZDg3MjYyOWM0NmQ4MDRmYmNhZjY3OGI5ZTg4ZDExMGU3MzE3MjQ2YjcwYTAyZWFiNTM5ODM2MjkyNGQ0NTIyIn0.eyJhdWQiOiIzIiwianRpIjoiMjQ5YzhkN2FjNzQwNDU2ZjJkODcyNjI5YzQ2ZDgwNGZiY2FmNjc4YjllODhkMTEwZTczMTcyNDZiNzBhMDJlYWI1Mzk4MzYyOTI0ZDQ1MjIiLCJpYXQiOjE2NjU1NzY1NTAsIm5iZiI6MTY2NTU3NjU1MCwiZXhwIjoxNjk3MTEyNTUwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.l9lQf-nCMASpRj1VbFxU4pnvjy_PwXHLKbJ5dUrPR7kU2nrjXuL21o2JCwcrqaxMGEzFIJOlSTureCcIiJMMU3KVKeXr3KS951IgaKJD2hasKW3HCaqO5OIjU3IcPJqTFCQEkZIciVijbFqzTFskLaF9OlWd0IK9SSsT_jBCgALQGyKyrwKtqb_bUMLJ1RcZ3sA9ba1f7vRKvWQVZhQQBGDwhHFG2O-4CNY5DdwyaeMSRkVj5OAK__dd8O8tBiZGoFWZi6J4urAj41V7_iiz38zTyHTHsNgwa2D6RMz_wKSoMS7Dmcwd2J_BzH2vwnT5SK8WhFWDgyW8mhFK6WJpfmWXUz-0fFAnEYap8CR2FTe7laKdI74yqYWfHFeGKupDscxHtcZE6RCqkYCtsqyp3DrfBmYNGiOEqsuQVzoz1VO3zSuEQZN20QhwutmJpIcAL9UE4h2LV4LsX0dOVSg-ZCP_OB9OdskGr4HUmY9RlulxDVEggP_kgYcmN28yhgo2wKaBSHbuIapxYA6dwMdjaleG7IhNlgg4FESHIJYV7dJWwM5QeqW09MI-FWSU5laMMNNb6nYhxevPh3ihKCqIRcp1w2pfVizK1QV-lvuAHdy4amH7aii9NOul7DUlQKr3C5f7F_yxSsjgSVKotG3aRaACT05HlRItcDZipXTDwRE'}`;
  // let headers = new HttpHeaders();
  // headers = headers.set('Authorization',auth);
  // return this.http.get<any>('https://v2-dev-api.isorobot.io/api/v1/organization-policies',{headers:headers})

  getPol(){
    return this.http.get<any>(`${this.apiUrl}`)
  }

  postPol(data:any){
    return this.http.post<any>(`${this.apiUrl}`,data)
  }

  getPolById(id:any){ 
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  putPol(id:any,data:any){
    return this.http.put<any>(`${this.apiUrl}/${id}`,data)
  }

  delPol(id:any){    
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}