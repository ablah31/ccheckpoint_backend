import { ObjectType } from "type-graphql";
import { BaseEntity, Entity } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {

}