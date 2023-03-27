import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679667755735 implements MigrationInterface {
    name = 'InitialMigration1679667755735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying NOT NULL`);
    }

}
