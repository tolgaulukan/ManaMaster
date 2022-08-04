//login a user
router.post('/', (req, res) => {
    const {email, password} = req.body
    const sql = 'SELECT * FROM users WHERE email = $1'
    db.query(sql, [email]).then((dbRes) => {
        const userData = dbRes.rows[0]

        if (userData == undefined) {
            res.status(400).json({msg: 'user does not exist in database. sign up instead'})
        } else if (userData.email == email) {
            //if email exists 
            const password_check = isValidPassword(password, userData.password_hash)
            //if password checks returns true
            if (password_check) {
                // set the session for user
                req.session.user_id = userData.id
                req.session.first_name = userData.first_name
                req.session.email = userData.email
                console.log(req.session)
                res.json({session: req.session})
            } else {
                res.json({msg: 'password is incorrect'})
            }
        } 

    }).catch((err) => {
        res.status(500).json({msg: 'server error occured when accessing database', errmsg: err})
    })
})