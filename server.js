var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Product = require('./app/models/product');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://user:pass@ds029267.mlab.com:29267/nameDb', {
    useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 8000;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('something here....');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Wow its right' })
});

// '/product'  (GET ALL & POST)
router.route('/product')

    /* 1) To create product (POST http://localhost:8000/api/product)  */
    .post(function(req, res) {
        var product = new Product();

        product.name = req.body.name;
        product.price = req.body.price;
        product.desctipion = req.body.desctipion;

        product.save(function(error) {
            if(error)
                res.send('ERROR, something wrong to save product....: ' + error);

            res.json({ message: 'Product created with success!' });
        });
    })

    /* 2) To select all Products (GET http://localhost:8000/api/product)  */
    .get(function(req, res) {
        Product.find(function(error, product) {
            if(error)
                res.send('ERROR when trying to get Products...: ' + error);

            res.json(product);
        });
    });

    router.route('/product/:product_id')

    /* 3) To select by Id: (GET http://localhost:8000/api/product/:product_id) */
    .get(function (req, res) {
        Product.findById(req.params.product_id, function(error, product) {
            if(error)
                res.send('Id not found....: ' + error);

            res.json(product);
        });
    })

    /* 4) To update by Id: (PUT http://localhost:8000/api/product/:product_id) */
    .put(function(req, res) {
        Product.findById(req.params.product_id, function(error, product) {
            if (error)
                res.send("Id not found....: " + error);

                product.name = req.body.name;
                product.price = req.body.price;
                product.desctipion = req.body.desctipion;

                product.save(function(error) {
                    if(error)
                        res.send('ERROR update product....: ' + error);

                    res.json({ message: 'Product updated with success!' });
                });
            });
        })

    /* 5) To delete by Id (http://localhost:8000/api/product/:product_id) */
    .delete(function(req, res) {
            Product.remove({
                _id: req.params.product_id
                }, function(error) {
                    if (error)
                        res.send("Id not found....: " + error);

                    res.json({ message: 'Product deleted with success!' });
                });
            });

app.use('/api', router);
app.listen(port);
console.log("Runing in " + port);
