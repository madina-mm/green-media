var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name || 'dccj3wrza',
  api_key: process.env.cloudinary_api_key || '515419329567953',
  api_secret: process.env.coudinary_api_secret || 'jXAn46rtmyRloj5iCyemz-uaUoM'
});

var isSetup = true; //change to true if using cloudinary

module.exports = {
  cloudinary,
  isSetup
};
