

import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})

export class RadarChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Series 1",
  //         data: [20, 100, 40, 30, 50, 80, 33]
  //       }
  //     ],
  //     chart: {
  //       height: 350,
  //       type: "radar"
  //     },
  //     dataLabels: {
  //       enabled: true
  //     },
  //     plotOptions: {
  //       radar: {
  //         size: 140,
  //         polygons: {
  //           strokeColor: "#e9e9e9",
  //           fill: {
  //             colors: ["#f8f8f8", "#fff"]
  //           }
  //         }
  //       }
  //     },
  //     title: {
  //       text: "Radar with Polygon Fill"
  //     },
  //     colors: ["#FF4560"],
  //     markers: {
  //       size: 4,
  //       colors: ["#fff"],
  //       strokeColors: ["#FF4560"],
  //       strokeWidth: 2
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function(val) {
  //           return val;
  //         }
  //       }
  //     },
  //     xaxis: {
  //       categories: [
  //         "Sunday",
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday",
  //         "Saturday"
  //       ]
  //     },
  //     yaxis: {
  //       tickAmount: 7,
  //       labels: {
  //         formatter: function(val, i) {
  //           if (i % 2 === 0) {
  //             return val;
  //           } else {
  //             return "";
  //           }
  //         }
  //       }
  //     }
  //   };
  // }
}
