import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  
  @Input()
   Note! : Note;

   ngOnInit(): void { }
   constructor() { };

  showButtons!:boolean;
}
