import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
