export const filterByContinent = (data, continent)=>{
    return data.filter((d)=>{
        return d.continent.toLowerCase() === continent.toLowerCase()
    })
} 
export const filterByCountry = (data, country)=>{
    return data.filter((d)=>{
        return d.country.toLowerCase() === country.toLowerCase()
    })
} 