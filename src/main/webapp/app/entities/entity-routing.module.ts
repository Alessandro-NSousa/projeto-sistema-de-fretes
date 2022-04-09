import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cidade',
        data: { pageTitle: 'sistemaDeFretesApp.cidade.home.title' },
        loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule),
      },
      {
        path: 'caminhao',
        data: { pageTitle: 'sistemaDeFretesApp.caminhao.home.title' },
        loadChildren: () => import('./caminhao/caminhao.module').then(m => m.CaminhaoModule),
      },
      {
        path: 'despesa',
        data: { pageTitle: 'sistemaDeFretesApp.despesa.home.title' },
        loadChildren: () => import('./despesa/despesa.module').then(m => m.DespesaModule),
      },
      {
        path: 'viagem',
        data: { pageTitle: 'sistemaDeFretesApp.viagem.home.title' },
        loadChildren: () => import('./viagem/viagem.module').then(m => m.ViagemModule),
      },
      {
        path: 'motorista',
        data: { pageTitle: 'sistemaDeFretesApp.motorista.home.title' },
        loadChildren: () => import('./motorista/motorista.module').then(m => m.MotoristaModule),
      },
      {
        path: 'cliente',
        data: { pageTitle: 'sistemaDeFretesApp.cliente.home.title' },
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule),
      },
      {
        path: 'endereco',
        data: { pageTitle: 'sistemaDeFretesApp.endereco.home.title' },
        loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule),
      },
      {
        path: 'frete',
        data: { pageTitle: 'sistemaDeFretesApp.frete.home.title' },
        loadChildren: () => import('./frete/frete.module').then(m => m.FreteModule),
      },
      {
        path: 'pagamento',
        data: { pageTitle: 'sistemaDeFretesApp.pagamento.home.title' },
        loadChildren: () => import('./pagamento/pagamento.module').then(m => m.PagamentoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
