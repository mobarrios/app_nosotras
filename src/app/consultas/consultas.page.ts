import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  tipos : any[] = [];

  tipo;
  text;

  constructor(  private router: Router,
                private connectS: ConnectService
      ) {

        this.connectS.get('getConsultasTipo').subscribe(data=>{
          this.tipos = data['results'];
        });

       }

  ngOnInit() {
  }

  enviar() {

    this.connectS.get('postConsulta/'+this.tipo+'/'+this.text).subscribe( d =>{
        if( d == 'true')
        {
            this.router.navigate(['/home']);
        }
    });

    // this.connectS.get('getEscuelas').subscribe(d=>{
    //   console.log(d);
    // });
    // this.apiC.get('users',null).subscribe(d=>{
    //   console.log(d)
    // });
    
    // data.subscribe(d => 
    //     {
    //       return d;
    //     }, error => 
    //     {
    //       console.log( JSON.stringify(error));
    //   });
    //this.router.navigate(['/home']);
  }

}
