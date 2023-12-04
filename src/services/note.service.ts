import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/Note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  note_url ="http://localhost:3000/notes";

  constructor(private https:HttpClient) { }

  getNotes():Observable<Note[]>{
    return this.https.get<Note[]>(this.note_url);
  }

  addNote(note:Note):Observable<Note>{
    return this.https.post<Note>(this.note_url,note)
  }
}