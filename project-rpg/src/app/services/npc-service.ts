import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NpcDto } from '../models/npc-dto.model';

const baseUrl = 'http://localhost:8080/npc';

@Injectable({ providedIn: 'root' })
export class NpcService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<NpcDto[]> {
    return this.http.get<NpcDto[]>(`${baseUrl}/consulta`);
  }

  get(id: any): Observable<NpcDto> {
    return this.http.get(`${baseUrl}/consulta/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/alterar/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/excluir/${id}`);
  }

  findByName(nome: any): Observable<NpcDto[]> {
    return this.http.get<NpcDto[]>(`${baseUrl}/consulta/nome/${nome}`);
  }
}
