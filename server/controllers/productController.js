const BigPromise = require('../middlewares/bigPromise')
const Product = require('../models/product')
const CustomError = require('../utils/customErrors')
const cloudinary = require('cloudinary')


exports.addProduct = BigPromise(async (req, res, next) => {
    // images
  
    let imageArray = [];
  
    if (!req.files) {
      return next(new CustomError("images are required", 401));
    }
  
    if (req.files) {
      for (let index = 0; index < req.files.photos.length; index++) {
        let result = await cloudinary.v2.uploader.upload(
          req.files.photos[index].tempFilePath,
          {
            folder: "products",
          }
        );
  
        imageArray.push({
          id: result.public_id,
          secure_url: result.secure_url,
        });
      }
    }
  
    req.body.photos = imageArray;
    req.body.user = req.user.id;
  
    const product = await Product.create(req.body);
  
    res.status(200).json({
      success: true,
      product,
    });
  });

exports.getAllProducts = BigPromise(async(req, res, next) => {

    const products = await Product.find({})

    res.status(200).json({
        success: true,
        products,
    })
})