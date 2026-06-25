    async function weather () {
        let delhiWeather = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("27 degree")
            }, 3000)
        }) 

        let goaWeather = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("20 degree")
            }, 5000)
        }) 
        
        let delhi = await delhiWeather
        let goa = await goaWeather
        return [delhi, goa]
    
    }
console.log("hello");

weather()
