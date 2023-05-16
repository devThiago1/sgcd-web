import { MigrationInterface, QueryRunner } from "typeorm";

export class default1684206047244 implements MigrationInterface {
    name = 'default1684206047244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "abrigos" ("id_abrigo" SERIAL NOT NULL, "title_abrigo" text NOT NULL, "rua_user" text NOT NULL, "abrigo_type_user" character varying(40) NOT NULL, CONSTRAINT "PK_8a3d7e999db0465a324bf998790" PRIMARY KEY ("id_abrigo"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "abrigos"`);
    }

}
