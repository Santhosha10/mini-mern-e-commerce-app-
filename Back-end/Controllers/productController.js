const productModel = require('../Models/productModel')

// api for getting all products form DB

exports.getProduct = async (req, res, next) => {
    const query = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {};
    try {
        const products = await productModel.find(query);
        res.json({
            success: true,
            products
        });
    } catch (error) {
        // Handle any errors that occur during the database query
        next(error);
    }
};


//api for singleproduct from DB

exports.getsingleProduct = async (req,res)=>{

    try{
         const product = await  productModel.findById(req.params.id);
            res.json({
                success:true,
                product
            })
    } catch (error) {
        res.status(404).json({
            success:false,
            message: error.message
        })

    }
}


