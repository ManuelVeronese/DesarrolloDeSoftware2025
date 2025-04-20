interface City{
    continent:string
}

class Student{
    city: City

    getContinent(): string{
        return this.city.continent 
    }
}


