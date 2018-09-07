import { NgModule } from '@angular/core';
import { ReporteComponent } from './reporte/reporte';

import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario';

@NgModule({
	declarations: [ReporteComponent,
    RegistrarUsuarioComponent],
	imports: [	],
	
	exports: [ReporteComponent,
    RegistrarUsuarioComponent]
})
export class ComponentsModule {}
