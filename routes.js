const passport = require('passport');
const router = require('express').Router();
const jwt = require("jsonwebtoken");

//Promesa para poder hacer asincronico JWT
function signAsync(data) {
    return new Promise((resolve, reject)=>{
        try {
            if (data && data.username){
                const token = jwt.sign({username: data.username},process.env.SECRET_KEY)
                resolve(token);
            }else{
                reject("Los datos están incorrectos en la petición")
            }
        }catch(error){
            reject("Error al crear el token");
        }
    });
}

router.post("/login", async (req, res, next) => {
    try {
        const data = req.body;
        const token = await signAsync(data);
        res.send({token});
    }catch(error){
        next({message:"Error al crear el token"});
    }
});

router.get("/validar", async (req, res) => {
    passport.authenticate('jwt',{session: false}, async (err, user, info)=> {
        if (user) {
            res.send("Verificado");
        }else {
            res.status(401).send("token no valido");
        }
    })(req, res);
});

module.exports = router