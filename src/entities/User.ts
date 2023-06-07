import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Adress } from './Adress';
import { Posts } from './Post';

@Entity('users')
export class User{
    
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column("varchar", { length: 40})
    first_name_user: string;

    @Column("varchar", { length: 40})
    last_name_user: string;

    @Column("varchar", { length: 30})
    number_user: string;

    @Column({type: "text"})
    password_user: string;
    
    @OneToOne(type => Adress)
    @JoinColumn()
    Adress: Adress

    @OneToMany(type => Posts, post => post.user)
    posts: Posts[];
}


