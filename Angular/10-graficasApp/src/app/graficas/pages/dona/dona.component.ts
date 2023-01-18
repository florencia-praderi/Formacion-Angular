import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent  {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 200, 180 ],
        backgroundColor: ['#2EFFA1', '#29E0B2', '#00F5E9', '#0BC0DE', '#28A6ED'] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
