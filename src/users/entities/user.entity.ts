import { Paciente } from "src/pacientes/entities/paciente.entity";
import { ProfissionaisSaude } from "src/profissionais-saude/entities/profissionais-saude.entity";
import { ProfissionalEspecialidadeService } from "src/profissional-especialidade/profissional-especialidade.service";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

}
