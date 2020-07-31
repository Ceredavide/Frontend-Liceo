const express = require("express")

const comunicazioniController = require("../controllers/comunicazioni");

const checkAuth = require("../middlewares/auth-check")
const fileUpload = require("../middlewares/file-upload")

const {
    getComunicazioni,
    getComunicazioniById,
    createComunicazione,
    updateComunicazione,
    deleteComunicazione
} = comunicazioniController

const router = express.Router();

router.use(checkAuth)

router.get('/', getComunicazioni);

router.get('/:id', getComunicazioniById)

router.post('/', fileUpload.single("image"), createComunicazione)

router.patch('/:id', updateComunicazione)

router.delete('/:id', deleteComunicazione)

module.exports = router;