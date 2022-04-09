import { IEndereco } from 'app/entities/endereco/endereco.model';
import { ICidade } from 'app/entities/cidade/cidade.model';
import { Sexo } from 'app/entities/enumerations/sexo.model';

export interface ICliente {
  id?: number;
  nome?: string;
  telefone?: string | null;
  telefoneAdicional?: string | null;
  cnh?: string | null;
  sexo?: Sexo | null;
  endereco?: IEndereco | null;
  cidade?: ICidade | null;
}

export class Cliente implements ICliente {
  constructor(
    public id?: number,
    public nome?: string,
    public telefone?: string | null,
    public telefoneAdicional?: string | null,
    public cnh?: string | null,
    public sexo?: Sexo | null,
    public endereco?: IEndereco | null,
    public cidade?: ICidade | null
  ) {}
}

export function getClienteIdentifier(cliente: ICliente): number | undefined {
  return cliente.id;
}
