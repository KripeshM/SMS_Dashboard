import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit{

  
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Placement Evaluation 2015-2023',
          align: 'center'
      },
      subtitle: {
          text: 'LBS COLLEGE OF ENGINEERING KASARAGOD',
          align: 'left'
      },
      yAxis: {
          title: {
            useHTML: true,
              text: 'Number of students placed'
          }
          
      },
      credits:{
          enabled:false
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          series: {
              pointStart: 2015
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Computer Science',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      }, {
          name: 'Information Technology',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
      }, {
          name: 'Mechanical Engineering',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      }, {
          name: 'Civil Engineering',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
  
      }, {
          name: 'Electronics Engineering',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
      },{
        name: 'Electrical Engineering',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
    }
    ]
  }
  HC_exporting(Highcharts);

  }
  

ngOnInit(): void {
  
}
}
