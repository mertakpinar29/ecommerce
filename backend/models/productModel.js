import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {type: String, required:true},
    rating: {type: Number, required:true},
    comment: {type: String, required:true},
},{timestamps:true})

const productSchema = mongoose.Schema({
    // which admin added this product
    user:{
        // ref tells us that the type of this field is User's ObjectId
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // array of single comments about that product
    reviews: [reviewSchema],
    // average rating
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
},
// createdAt & updatedAt fields created automatically if we set timestamps:true
// to do that,we add second argument,options
{
    timestamps:true
})

const Product = mongoose.model('Product', productSchema)

export default Product