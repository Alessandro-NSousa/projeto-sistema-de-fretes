import { IEndereco } from 'app/entities/endereco/endereco.model';

export interface IMotorista {
  id?: number;
  nome?: string;
  telefone?: string | null;
  telefoneAdicional?: string | null;
  inscEstadual?: string | null;
  cnpj?: string | null;
  endereco?: IEndereco | null;
}

export class Motorista implements IMotorista {
  constructor(
    public id?: number,
    public nome?: string,
    public telefone?: string | null,
    public telefoneAdicional?: string | null,
    public inscEstadual?: string | null,
    public cnpj?: string | null,
    public endereco?: IEndereco | null
  ) {}
}

export function getMotoristaIdentifier(motorista: IMotorista): number | undefined {
  return motorista.id;
}
