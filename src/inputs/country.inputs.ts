import { Field, InputType } from "type-graphql";

@InputType()
export class CountryInput { 
    @Field()
    countryName: String;

    @Field()
    countryCode: String; 

    @Field()
    countryEmoji: String;
}