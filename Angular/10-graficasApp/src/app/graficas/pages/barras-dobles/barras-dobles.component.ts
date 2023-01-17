import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js'

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html'
})
export class BarrasDoblesComponent {

  labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];

  proveedoresData: ChartData<'bar'> = {
    labels: this.labelsData,
    datasets:[
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A', backgroundColor: '#39ED57'},
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor: '#D700FA' }]
  };
  
  productoData: ChartData<'bar'> = {
    labels: this.labelsData,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: '#FF7BFF', borderColor: '#FF7BFF' }
    ]
  };

  constructor() { }

}
