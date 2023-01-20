import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../services/graficas.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styles: [`
  h3{
    text-align: center;
  }
  `]
})
export class BarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartLabels: string[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012' 
  ]
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#EB83D5' }
    ]
  };

  constructor(private  graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getContagiosPorEstadoFiltrado()
.subscribe(({ state, positiveTestsViral }: any)=>{

    this.barChartData.datasets[0] =positiveTestsViral
    this.barChartLabels = state
})

    // .subscribe(({labels, datasets})=>{
    //   this.barChartLabels = labels,
    //   this.barChartData = {
    //             labels: labels,
    //             datasets: datasets
    //           }
    // }
    //)
  }

}
