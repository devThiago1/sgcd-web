import { MigrationInterface, QueryRunner } from "typeorm";

export class default1684235399412 implements MigrationInterface {
    name = 'default1684235399412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "rua_user"`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "bairro_abrigo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "rua_abrigo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "complemento_abrigo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "cep_abrigo" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "number_adress_abrigo" character varying(7) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "number_adress_abrigo"`);
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "cep_abrigo"`);
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "complemento_abrigo"`);
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "rua_abrigo"`);
        await queryRunner.query(`ALTER TABLE "abrigos" DROP COLUMN "bairro_abrigo"`);
        await queryRunner.query(`ALTER TABLE "abrigos" ADD "rua_user" text NOT NULL`);
    }

}
