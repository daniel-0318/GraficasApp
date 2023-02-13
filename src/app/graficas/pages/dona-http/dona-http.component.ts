import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe(resp =>{
    //   console.log(resp);
    //   const labels=Object.keys(resp)
    //     const datos=Object.values(resp)
    //     this.doughnutChartData={
    //       labels:Object.keys(resp),
    //       datasets:[{data:Object.values(resp)}]
    //     }
    // });

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({labels, datasets }) => {
      this.doughnutChartData={ labels, datasets }
    });

  }

  // Doughnut
  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
