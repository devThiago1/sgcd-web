import { MigrationInterface, QueryRunner } from "typeorm";

export class default1686165134872 implements MigrationInterface {
    name = 'default1686165134872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "abrigos" ("id_abrigo" SERIAL NOT NULL, "title_abrigo" text NOT NULL, "abrigo_type_user" character varying(40) NOT NULL, "bairro_abrigo" text NOT NULL, "rua_abrigo" text NOT NULL, "complemento_abrigo" text NOT NULL, "cep_abrigo" character varying(15) NOT NULL, "number_adress_abrigo" character varying(7) NOT NULL, CONSTRAINT "PK_8a3d7e999db0465a324bf998790" PRIMARY KEY ("id_abrigo"))`);
        await queryRunner.query(`CREATE TABLE "adress" ("id" SERIAL NOT NULL, "bairro_user" text NOT NULL, "rua_user" text NOT NULL, "complemento_user" text NOT NULL, "cep_user" character varying(15) NOT NULL, "number_adress_user" character varying(7) NOT NULL, CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "message" text NOT NULL, "user_id" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id_user" SERIAL NOT NULL, "first_name_user" character varying(40) NOT NULL, "last_name_user" character varying(40) NOT NULL, "number_user" character varying(30) NOT NULL, "cpf_user" character varying(60) NOT NULL, "email_user" text NOT NULL, "password_user" text NOT NULL, "adressId" integer, CONSTRAINT "REL_d668d60e6cbf1966636e32f4ef" UNIQUE ("adressId"), CONSTRAINT "PK_fbb07fa6fbd1d74bee9782fb945" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986" FOREIGN KEY ("user_id") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c4f9a7bd77b489e711277ee5986"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "adress"`);
        await queryRunner.query(`DROP TABLE "abrigos"`);
    }

}
