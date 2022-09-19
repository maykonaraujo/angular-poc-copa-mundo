import { HttpClient } from '@angular/common/http';

import { Cliente } from '../models/cliente';

 

export class ClienteServico{
    constructor(private http: HttpClient){}
    
    public async salvar(cliente:Cliente){
        await this.http.post<Cliente>("http://localhost:8080/clientes.json", cliente).toPromise()
    }

    public  async all(){
       return await this.http.get<Cliente[]>("http://localhost:8080/clientes.json").toPromise()
    }
    
}