const express = require('express');
const {check, validationResult} = require('express-validator');

const House = require('../models/House');

const router = express.Router();

const validate = [
    check('title')
        .isLength({min: 3, max: 50})
        .withMessage('Title should be between 3 to 50 characters'),
    check('description')
        .isLength({min: 10, max: 200})
        .withMessage('Description should be between 10 to 200 characters'),
    check('address')
        .isLength({min: 10, max: 100})
        .withMessage('Address should be between 10 to 100 characters'),
    check('price').isNumeric().withMessage('Price should be a number')
]

// /api/houses
router.post('/', validate, (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).send({errors: errors.array()})
    }

    const house = new House({
        title: req.body.title,
        address: req.body.address,
        homeType: req.body.homeType,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        yearBuilt: req.body.yearBuilt
    });

    house.save()
        .then(result => {
            res.send({
                message: 'House data created successfully',
                data: result
            })
        })
        .catch(err => console.log(err))

})

// /api/houses
router.get('/', (req, res) => {
    House.find()
        .then(houses => {
            res.send(houses)
        })
        .catch(err => console.log(err))
});

// /api/houses/id
router.get('/:id', (req, res) => {
    const houseId = req.params.id;

    House.findById(houseId)
        .then(house => {
            res.send(house);
        })
        .catch(err => console.log(err))
});

// /api/houses/id
router.put('/:id', validate, (req, res) => {
    const houseId = req.params.id;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).send({errors: errors.array()})
    }

    House.findById(houseId)
        .then(house => {
            house.title = req.body.title;
            house.address = req.body.address;
            house.homeType = req.body.homeType;
            house.description = req.body.description;
            house.price = req.body.price;
            house.image = req.body.image;
            house.yearBuilt = req.body.yearBuilt;

            return house.save();
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
});

// /api/houses/id
router.delete('/:id', (req, res) => {
    const houseId = req.params.id;

    House.findByIdAndRemove(houseId)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
})

module.exports = router;

// const express = require('express');
// const { check, validationResult } = require('express-validator');

// const House = require('../models/House');

// const router = express.Router();

// const validate = [
//     check('title')
//         .isLength({ min: 3, max: 50 })
//         .withMessage('Title should be between 3 to 50 characters'),
//     check('description')
//         .isLength({ min: 10, max: 200 })
//         .withMessage('Description should be between 10 to 200 characters'),
//     check('address')
//         .isLength({ min: 10, max: 100 })
//         .withMessage('Address should be between 10 to 100 characters'),
//     check('price').isNumeric().withMessage('Price should be a number')
// ]

// // /api/houses
// router.post('/', validate, (req, res) => {

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         return res.status(422).send({ errors: errors.array() })
//     }

//     const house = new House({
//         title: req.body.title,
//         address: req.body.address,
//         homeType: req.body.homeType,
//         description: req.body.description,
//         price: req.body.price,
//         image: req.body.image,
//         yearBuilt: req.body.yearBuilt
//     });

//     house.save()
//         .then(result => {
//             res.send({
//                 message: 'House data created successfully',
//                 data: result
//             })
//         })
//         .catch(err => console.log(err))

// })

// // /api/houses
// router.get('/', (req, res) => {
//     House.find()
//         .then(houses => {
//             res.send(houses)
//         })
//         .catch(err => console.log(err))
// });

// // /api/houses/id
// router.get('/:id', (req, res) => {
//     const houseId = req.params.id;

//     House.findById(houseId)
//         .then(house => {
//             res.send(house);
//         })
//         .catch(err => console.log(err))
// });

// // /api/houses/id
// router.put('/:id', validate, (req, res) => {
//     const houseId = req.params.id;

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         return res.status(422).send({ errors: errors.array() })
//     }

//     House.findById(houseId)
//         .then(house => {
//             house.title = req.body.title;
//             house.address = req.body.address;
//             house.homeType = req.body.homeType;
//             house.description = req.body.description;
//             house.price = req.body.price;
//             house.image = req.body.image;
//             house.yearBuilt = req.body.yearBuilt;

//             return house.save();
//         })
//         .then(result => {
//             res.send(result);
//         })
//         .catch(err => console.log(err))
// });

// // /api/houses/id
// router.delete('/:id', (req, res) => {
//     const houseId = req.params.id;

//     House.findByIdAndRemove(houseId)
//         .then(result => {
//             res.send(result);
//         })
//         .catch(err => console.log(err))
// })

// module.exports = router;