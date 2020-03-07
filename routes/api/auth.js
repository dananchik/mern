const {Router} = require('express');
const User = require('../../models/user');
const router = Router();

// api/auth/reg
router.post('/reg', async (req, res) => {
    try {
        const newUser = new User ({
            email: req.body.email,
            nickname: req.body.nickname,
            password: req.body.password
        });
        await newUser.save().then(()=>{
            res.json({
                msg: true,
                obj: newUser
            }).catch(()=>{
                res.json({
                    msg: false
                })
            })
        });
        console.log(newUser);

    } catch (e) {
        res.status(500).json({
            message:"что то пошло не так"
        })
    }
});
router.get('/reg', async (req, res) => {
    User.find().then(items=>{
        res.json(items[0].email);
    })
});
// api/auth/login
router.post('/login', async (req, res) => {

});
module.exports = router;