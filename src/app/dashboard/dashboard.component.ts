import { Component, OnInit } from '@angular/core';
import {Weather} from "../models/model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weather: Weather[]=[];
  dummyData:Weather;
  constructor() { }

  ngOnInit(): void {
  }

}
