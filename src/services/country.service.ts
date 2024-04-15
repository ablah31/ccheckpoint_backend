import { CountryInput } from "../inputs/country.inputs";
import { Country } from "../entities/country";


export const createCountry = async (dataCountry:CountryInput): Promise<Country> => {

    try {
        const country = new Country()
        country.countryName = dataCountry.countryName;
        country.countryCode = dataCountry.countryCode;
        country.countryEmoji = dataCountry.countryEmoji;

        return await country.save();

        
    } catch (error:any) {
       throw new Error(`Erreur lors de la création , ${error}`)
       
    }
  
}
export const getAllCountries = async (): Promise<Country[]> => {
    try {
      return await Country.find();
    } catch (error) {
      console.error("Failed to fetch countries:", error);
      throw new Error("Failed to fetch countries");
    }
  };