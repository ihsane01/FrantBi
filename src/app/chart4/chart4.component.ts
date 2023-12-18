import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrl: './chart4.component.scss'
})
export class CHART4Component {

  public chart: any;
  constructor(private srv:MyserviceService) { }
  mytable:any
  ngOnInit(): void {
    this.srv.getTopCountries().subscribe(
      (succes)=>{
      this.mytable=succes
      console.log(this.mytable)
      this.createChart();
      },
      (err)=>{console.log(err)}
      ) 
   
   

  }
  createChart() {
    let lables:any=[]
    let data:any=[]
    let colors:any=[]
    for (let index = 0; index < this.mytable.length; index++) {
      const element = this.mytable[index];
      if(element["name"]!=""){
        lables.push(element["name"])
        data.push(element["value"])
        colors.push('#'+Math.floor(Math.random()*16777215).toString(16))
      }

    }
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: lables, 
	       datasets: [
          {
            label: "Nombre Article Par Pays",
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        plugins: {
          legend: {
            position:'bottom',
              display: true,
              labels: {
                  color: 'rgb(0, 0, 0)'
              }
          }
      }
      }
      
    });
  }

}


