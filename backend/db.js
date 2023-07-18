const mongoose=require('mongoose')
mongoURI='mongodb://sahiltiwari1222:sahiltiwariinterview@ac-pmabt6b-shard-00-00.ybkxmtc.mongodb.net:27017,ac-pmabt6b-shard-00-01.ybkxmtc.mongodb.net:27017,ac-pmabt6b-shard-00-02.ybkxmtc.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-sd8hf2-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB=async()=>{

  await mongoose.connect(mongoURI).then(()=>console.log('connecteed'))
  
   const fetched_data= await mongoose.connection.db.collection('food_items');
   fetched_data.find({}).toArray().then( async function(data) {
    const foodCategory=await mongoose.connection.db.collection('foodCategory');
    foodCategory.find({}).toArray().then( async function(catData){
     
        global.food_items=data;
        global.foodCategory=catData;
   
    })

    // console.log(data)
    global.food_items=data;
    // console.log(global.food_items)
  })
}
module.exports=mongoDB