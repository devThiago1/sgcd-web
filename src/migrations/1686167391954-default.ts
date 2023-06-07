import { MigrationInterface, QueryRunner } from "typeorm";

export class default1686167391954 implements MigrationInterface {
    name = 'default1686167391954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf_user"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email_user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email_user" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf_user" character varying(60) NOT NULL`);
    }

}
