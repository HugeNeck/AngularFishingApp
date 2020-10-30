import { Component, OnInit, Input } from '@angular/core';
import { CatchModel } from 'src/app/shared/catch.model';


@Component({
  selector: 'app-catch-item',
  templateUrl: './catch-item.component.html',
  styleUrls: ['./catch-item.component.css']
})
export class CatchItemComponent implements OnInit {
  @Input() catch: CatchModel; 

  constructor() { }

  ngOnInit(): void {
  }

}
