import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm"

@Entity('abrigos')
export class Abrigos{

    @PrimaryGeneratedColumn()
    id_abrigo:number;

    @Column({type: "text"})
    title_abrigo: string;

    @Column({type: "text"})
    rua_user: string;
    
    @Column("varchar", {length: 40})
    abrigo_type_user: string;
}