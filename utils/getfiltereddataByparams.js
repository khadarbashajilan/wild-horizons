import { filterByContinent, filterByCountry, filterByisopentoPub } from "./getdataByPathParams.js"

export default function getfilteredData(destination, queryObj){
    let data = destination
    data = queryObj?.country ? filterByCountry(data, queryObj.country): data
    data = queryObj?.continent ? filterByContinent(data, queryObj.continent) : data
    data = queryObj?.is_open_to_public? filterByisopentoPub(data, JSON.parse(queryObj.is_open_to_public.toLowerCase())): data
    return data
}