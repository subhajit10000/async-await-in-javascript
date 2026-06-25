    async function weather () {
        let delhiWeather = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("27 degree")
            }, 3000)
        }) 
        
        let delhi = await delhiWeather

        return [delhi]
    
    }
console.log("hello");

weather()
