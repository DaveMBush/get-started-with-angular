import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
