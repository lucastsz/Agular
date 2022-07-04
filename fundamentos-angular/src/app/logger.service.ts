import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensagens: string[] = [];
  logar(mensagens: string){
//alert(mensagens)
this.mensagens.push(mensagens);
  }

  exibeTodosOsLogs(){
    alert(this.mensagens)
  }
}
