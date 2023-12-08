import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1701891066654 implements MigrationInterface {
    name = 'InitialMigration1701891066654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "breed" character varying(50) NOT NULL, "color" character varying(50) NOT NULL, "age" integer, "details" text, "muzzle" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pet"`);
    }

}
