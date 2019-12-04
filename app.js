const request = require('request')
const chalk = require('chalk')

 const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXRoYXJ2YTk5MTIzNDUiLCJhIjoiY2szcHEwb2NzMDVnODNjdW1lbDFydTBzMCJ9.NiVTdEkoYTjcN4b9CpTU2g'


 request({url:url1 , json: true}, (error,response) =>{
    if(error){
        console.log(chalk.red.inverse('Unable to connect to geolocation service'))
    }else if(response.body.features.length === 0){
        console.log(chalk.red.inverse('unable to find location try another search'))
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log( latitude+ ' / ' + longitude)    
    }
 })

const url = 'https://api.darksky.net/forecast/7fac052cbd520b5126bcec58cbcd821d/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) =>{
    if(error){
        console.log(chalk.red.inverse('Unable to connect to the weather service'))
    }
    else if(response.body.error){
        console.log(chalk.red.inverse('Unable to find the location'))   
    }
    else{
        console.log(response.body.daily.data[0].summary + ' It is currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability +'% chance of rain.')
    }
    
    })