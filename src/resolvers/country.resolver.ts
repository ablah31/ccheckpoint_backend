import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import { CountryInput } from "../inputs/country.inputs";
import * as countryService from "../services/country.service"

@Resolver(Country)
export class CountryResolver {
  @Mutation(()=>Country)
  async createCountry(@Arg("countryInput") countryInput: CountryInput):Promise<Country|String> {
      try {

        return await countryService.createCountry(countryInput);
        
      } catch (error) {
        console.error("Erreur lors de la création du pays",error);
        return "Aucun pays créé"
      }
  }
  
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    try {
      return await countryService.getAllCountries();
    } catch (error) {
      console.error(`Error while fetching countries:  ${error}`);
      return [];
    }
  }
}
