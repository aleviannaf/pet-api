import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrate1701283714559 implements MigrationInterface {
    name = 'InitialMigrate1701283714559'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "breed" character varying(50) NOT NULL, "color" character varying(50) NOT NULL, "age" integer, "details" text, "muzzle" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pet"`);
    }

}
