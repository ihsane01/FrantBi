import { Component } from '@angular/core';
// import { Chart } from 'chart.js';
import { MyserviceService }  from '../myservice.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.scss'
})
export class CHART1Component {
  public chart: any;
  constructor(private srv: MyserviceService) { }
  mytable:any
  ngOnInit(): void {
    this.srv.getTopjournal().subscribe(
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
      lables.push(element["Publisher"])
      data.push(element["value"])
      colors.push('#'+Math.floor(Math.random()*16777215).toString(16))
    }
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: lables, 
	       datasets: [
          {
            label: "Top journaux",
            data: data,
            backgroundColor: 
            [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 3
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}