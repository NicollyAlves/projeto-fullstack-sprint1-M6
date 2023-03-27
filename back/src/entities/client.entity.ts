import { hashSync } from "bcryptjs"
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { Contact } from "./contact.entity";

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    contact: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contact, (contact) => contact.client, { nullable: true })
    contacts: Contact[];
}

export { Client };
