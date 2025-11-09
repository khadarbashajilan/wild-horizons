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
export const filterByisopentoPub = (data, isOpen)=>{
    if(isOpen){
        return data.filter((d)=>{
            return d.is_open_to_public === true
        })
    }
    return data.filter((d)=>{
        return d.is_open_to_public === false
    })
}