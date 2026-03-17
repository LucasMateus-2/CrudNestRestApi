import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { ProfissionalEspecialidadeModule } from './profissional-especialidade/profissional-especialidade.module';
import { AgendaProfissionalModule } from './agenda-profissional/agenda-profissional.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { ProfissionaisSaudeModule } from './profissionais-saude/profissionais-saude.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), AgendamentosModule, PacientesModule, ProfissionaisSaudeModule, EspecialidadesModule, AgendaProfissionalModule, ProfissionalEspecialidadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
