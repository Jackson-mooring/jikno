import { Component, OnInit } from '@angular/core';

import { DataService } from '../../service/data/data.service';

@Component({
  selector: 'jikno-app',
  templateUrl: './jikno-app.component.html',
  styleUrls: ['./jikno-app.component.sass']
})
export class JiknoAppComponent implements OnInit {

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {
  }

}
