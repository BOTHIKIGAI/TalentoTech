const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const keys = require('./claves/keys');

app.set('key', keys.key);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('holamundo');
});

// Configuración JWT
app.post('/logueo', (req,res) => {
    if (req.body.username == 'admin' && req.body.pass == '12345') {
        const payload = {
            check: true
        };

        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '3d'        
        });
        res.json({msg: 'el usuario se encuentra logeado', token: token});
    }
    else {
        res.json({msg: 'no es posible ingresar valide usuario y contraseña'})
    }
});

// tipo de acceso de tipo de verificación
const verificacion = express.Router();
verificacion.use((req, res, next) => {
    let token = req.headers['acces-token'] || req.headers['authorization'];
    // console.log(token);
    
    if (!token) {
        res.status(401).send({msg: "debe ingresar un token valido para autenticarse"})
        return;
    }
    if (token.startsWith ('Bearer ')) {
        token = token.slice(7, token.length);
        console.log(token);
    }
    if (token){
        jwt.verify(token, app.get('key'), (error, decoded)=> {
            if (error) {
                return res.json({msg: 'token no valido'});
            }
            else {
                res.decoded = decoded;
                next();
            }
        });
    }
});

app.get('/info', verificacion, (req, res) => {
    res.json('informacion recibida');
});



app.listen(3000, () => {
    console.log('El servidor esta conectado');
})