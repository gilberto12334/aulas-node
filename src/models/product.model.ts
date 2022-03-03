import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { BaseModel } from "./base.model";

@Entity("product")
export class ProductModel extends BaseModel {

    @PrimaryColumn()
    id: string = uuid();

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'decimal'
    })
    price: number;

}