import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }
  barChart: Chart

  ngOnInit() {
    console.log(document.getElementById('datatable'))
    let chartData= {
    data: {
        table: document.getElementById('datatable')
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Data extracted from a HTML table in the page'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Units'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
    }
    this.drawChart(chartData)
  }

  drawChart(chartValue) {
    let chart = new Chart(chartValue);

    this.barChart = chart;
  }

}