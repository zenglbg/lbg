import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
  title = 'fjdalfjlskj'
  constructor() { }

  ngOnInit(): void {
    const p = document.querySelector('p')?.innerText
    console.log(p, 'ppp');
  }

}
