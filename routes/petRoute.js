const express = require('express');
const { petsDataUpload, getPetsData, welcome, getPet, updatePet, deletePet } = require('../controllers/PetController');

const router = express.Router();

router.route('/pet').post(petsDataUpload);
router.route('/pet').get(getPetsData);
router.route('/pet/:petId').get(getPet);
router.route('/pet/:petId').delete(deletePet);
router.route('/pet/:petId').patch(updatePet);
router.route('/').get(welcome);



module.exports = router;
