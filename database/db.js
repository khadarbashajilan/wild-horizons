// Import the 'data' object from the local data module
import { data } from "../data/data.js";

/**
 * Asynchronously retrieves data from the database.
 */
export async function getDataFromDB(){
    // Return the imported data object
    return data;
}