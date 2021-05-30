
const mongoose = require('mongoose')
const cities = require('./cities')
const Campground = require('../models/campground')
const { places, descriptors } = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/campers', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '60a89d66a4640d11b43d3268',
            location: `${cities[random1000].city} ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/djh9wwuii/image/upload/v1621745867/Campers/g4qnpc2cnlnshs5odufk.jpg',
                    filename: 'Campers/g4qnpc2cnlnshs5odufk'
                }, {
                    url: 'https://res.cloudinary.com/djh9wwuii/image/upload/v1621758475/Campers/szghlq7qroet301pduta.jpg',
                    filename: 'Campers/szghlq7qroet301pduta'
                }

            ],
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ],
            },
            description: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vitae fugit quasi ab dolorum vero pariatur officia, aspernatur hic iure, odit nesciunt maiores ut nisi rem. Eaque in dicta laudantium!',
            price: price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});



// const sample = (array) => array[Math.floor(Math.random() * array.length)]

// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 300; i++) {
//         const random1000 = Math.floor(Math.random() * 1000)
//         const price = Math.floor(Math.random() * 20) + 10;
//         const camp = new Campground({
//             author: '603875d4db80454260a42bfa',
//             location: `${cities[random1000].city},${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             // image: 'http://source.unsplash.com/collection/483251',
//             description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nemo earum quis laboriosam rerum repudiandae nam distinctio optio porro aperiam unde, dolore eveniet, id corporis repellendus numquam! Neque, voluptas voluptate?',
//             price: price,
//             geometry: {
//                 type: "Point",
//                 coordinates: [
//                     cities[random1000].longitude,
//                     cities[random1000].latitude
//                 ]
//             },
//             images: [
//                 {

//                     url: 'https://res.cloudinary.com/djh9wwuii/image/upload/v1614492452/YelpCamp/jykhb2cucpyfy4ze648y.jpg',
//                     filename: 'YelpCamp/jykhb2cucpyfy4ze648y'
//                 },
//                 {

//                     url: 'https://res.cloudinary.com/djh9wwuii/image/upload/v1614492524/YelpCamp/jwhdvt3oe6etyvdtn4pe.jpg',
//                     filename: 'YelpCamp/jwhdvt3oe6etyvdtn4pe'
//                 }
//             ]
//         })
//         await camp.save()
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close()
// })