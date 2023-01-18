import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { 
      //   data: [ 350, 450, 100, 200, 180 ],
      //   backgroundColor: ['#2EFFA1', '#29E0B2', '#00F5E9', '#0BC0DE', '#28A6ED'] 
      // }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor( private graficaService: GraficasService ) { }

  ngOnInit(): void {
    // this.graficaService.getDataDona()
    //   .subscribe(data=>{
    //     console.log(data)

    //     const labels = Object.keys(data)
    //     const values = Object.values(data)
    //     this.doughnutChartLabels = labels
    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [
    //         {data: values,
    //         backgroundColor: ['#2EFFA1', '#29E0B2', '#00F5E9', '#0BC0DE', '#28A6ED'] }]
    //     }
    //   })

    //Mediante rxjs
    this.graficaService.getDataFormatoDona()
    .subscribe( ({labels, datasets})=> {
      this.doughnutChartLabels = labels;
      this.doughnutChartData = {
        labels: labels,
        datasets: datasets}
    })
  }

}
