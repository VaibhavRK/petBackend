const express = require('express');
const multer = require('multer');
const { petsDataUpload, getPetsData, welcome, getPet, updatePet, deletePet } = require('../controllers/PetController');

const router = express.Router();

// multer
const Filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
});
  
const upload = multer({ storage: Filestorage });


// adding routes
router.route('/pet').post(upload.single("xlsx"),petsDataUpload);
router.route('/pet').get(getPetsData);
router.route('/pet/:petId').get(getPet);
router.route('/pet/:petId').delete(deletePet);
router.route('/pet/:petId').patch(updatePet);
router.route('/').get(welcome);



module.exports = router;
