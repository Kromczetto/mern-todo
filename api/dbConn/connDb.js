require('dotenv').config()

const mongoose = require('mongoose')

async function conn(){
    try{
        await mongoose.connect(process.env.URI)
        console.log('WE GOT THE CONNECTION :)')
    }catch(e){
        console.log(e)
    }
}
 


module.exports = {conn}