import { MigrationInterface, QueryRunner } from "typeorm";

export class default1682810386306 implements MigrationInterface {
    name = 'default1682810386306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adress" ("id" SERIAL NOT NULL, "bairro_user" text NOT NULL, "rua_user" text NOT NULL, "complemento_user" text NOT NULL, "cep_user" character varying(15) NOT NULL, "number_adress_user" character varying(7) NOT NULL, CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_user" SERIAL NOT NULL, "first_name_user" character varying(40) NOT NULL, "last_name_user" character varying(40) NOT NULL, "number_user" character varying(30) NOT NULL, "cpf_user" character varying(60) NOT NULL, "email_user" text NOT NULL, "password_user" text NOT NULL, "adressId" integer, CONSTRAINT "REL_d668d60e6cbf1966636e32f4ef" UNIQUE ("adressId"), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "adress"`);
    }

}
