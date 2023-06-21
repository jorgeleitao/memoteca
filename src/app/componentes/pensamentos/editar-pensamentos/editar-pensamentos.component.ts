import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamentos',
  templateUrl: './editar-pensamentos.component.html',
  styleUrls: ['./editar-pensamentos.component.css']
})
export class EditarPensamentosComponent implements OnInit {


pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''

}

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
  }

  editarPensamento(){
    console.log(this.pensamento)
    this.service.editar(this.pensamento).subscribe(()=>{
    this.router.navigate(['/listarPensamento'])
    })
  }


  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
