import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('pet')
export default class Pet{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 50})
    name: string

    @Column({length: 50})
    breed: string

    @Column({length: 50})
    color: string

    @Column({type: 'integer', nullable: true})
    age?: number | null | undefined

    @Column({type: 'text', nullable: true})
    details?: string | null | undefined

    @Column({default: true})
    muzzle: boolean
}