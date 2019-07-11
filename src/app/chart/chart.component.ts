import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  chart: Chart
  data;
  y1;
  y2;
  y3;
  chartValue;

  ngOnInit() {

    this.data = {
      spend: [49.9, 71.5, -106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      profit_i: [7.0, 8.9, 9.5, 20, 18.2, 51, -20.2, 26.5, 23.3, 18.3, 65, 9.6],
      demand_i: [7.0, 6.9, 9.5, -14.5, 15.2, -21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 10.6],
      order_i: [7.0, 6.9, -9.5, -14.5, 15.2,-21.5, 25.2, -26.5, 23.3, 18.3, 13.9, 9.6],
      roas_i: [7.0, 6.9, 9.5, -14.5, -18.2, 21.5, -27.2, 26.5, 23.3, 18.3, -13.9, 9.6],
      cpa_i: [7.0, 6.9, 9.5, -16.5, 18.2, 22.5, 25.2, 26.5, 23.3, 18.3, 19.9, 9.6],
    }
    this.chartValue =
      {
        chart: {
          type: 'spline'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        series: [{
          yAxis: 0,
          data: this.data.profit_i
        }, {
          yAxis: 1,
          data: this.data.demand_i
        }, {
          yAxis: 2,
          data: this.data.roas_i
        }],
        yAxis: [{
          title: {
            text: 'Demand_i'
          }
        }, {
          title: {
            text: 'Profit_i'
          }
        }, {
          title: {
            text: 'Roas_i'
          },
          opposite: true
        }],
        xAxis: [{
          title: {
            text: 'spend'
          }
        }],
         plotLines: [{
    color: 'red', // Color value
    dashStyle: 'longdashdot', // Style of the plot line. Default to solid
    value: 3, // Value of where the line will appear
    width: 2 // Width of the line    
  }]
      }

    this.drawChart()
  }

  drawChart() {
    
    let chart = new Chart(this.chartValue);

    this.chart = chart;





    // chart.ref$.subscribe(console.log);
  }
  onAxisChange(axis) {

    if (axis == 'y1') {

      this.chartValue.series[0].data = this.data[this.y1]
      this.chartValue.yAxis[0].title.text=this.y1
    }
    if (axis == 'y2') {
      console.log(axis)
            this.chartValue.series[1].data = this.data[this.y2]
      this.chartValue.yAxis[1].title.text=this.y2
    }
    if (axis == 'y3') {
      console.log(axis)
            this.chartValue.series[2].data = this.data[this.y3]
      this.chartValue.yAxis[2].title.text=this.y3
    }
    console.log(this.chartValue.yAxis[0].title.text)
     console.log(this.chartValue)

    this.drawChart()
  }

  

}