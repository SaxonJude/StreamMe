const router = require('express').Router();
let User = require('../models/user.model');
// All
router.route('/').get((req, res) => {
    User.find()
    .then(res => res.json(res))
    .catch(err => console.log(`Error, ${err}`));
})
// Create
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const location = req.body.location;

    const user = new User({
        username,
        age,
        location
    });

    user.save()
    .then(res => res.json(`User Created!`))
    .catch(err => console.log(`Error, ${err}`));
})
// Read
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.dob = req.body.dob;
        user.location = req.body.location;

        user.save()
        .then(res => res.json(res))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(`Error, ${err}`));
})
// Update
router.route('/').post((req, res) => {
    User.findByIdAndUpdate(req.params.id)
    .then(res => res.json('User Updated!'))
    .catch(err => console.log(`Error, ${err}`));
})
// Destroy
router.route('/').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(res => res.json('User Deleted!'))
    .catch(err => console.log(`Error, ${err}`));
})

module.exports = router;
