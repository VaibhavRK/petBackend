const PetSchema = require("../models/PetSchema");
const render = require('xlsx');

exports.petsDataUpload = async (req, res) => {
    try {
        let path = req.file.path;
        
        const file = render.readFile(path);
  
        const sheetName = file.SheetNames[0];
  
          let data = render.utils.sheet_to_json(file.Sheets[sheetName]);
  
          for(let i=0;i<data.length;i++){
              const pet = await PetSchema.create(data[i]);
              console.log(pet);
          }
  
          res.status(200).json({
              message:'Uploaded Successfully'
          });
      } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
      }
}

exports.getPetsData = async (req, res) => {
    try {
        const petsData = await PetSchema.find();

        res.status(201).json({
            message:'success',
            petsData
        })
    } catch (error) {
        res.status(400).json({
            message:'Failed to get data',
            error
        })
    }
}

exports.welcome = async (req, res) => {
    try {
        res.send('Welcome')
    } catch (error) {
        res.status(400).json({
            message:'Failed to get data',
            error
        })
    }
}

exports.getPet = async (req, res) => {
    try {
        const petId = req.params.petId;

        const pet = await PetSchema.findById(petId);

        res.status(201).json({
            message:'success',
            pet
        });
    } catch (error) {
        res.status(400).json({
            message:'Failed to get data',
            error
        })
    }
}

exports.updatePet = async (req, res) => {
    try {
        const petId = req.params.petId;
        const data = req.body;

        const result = await PetSchema.findByIdAndUpdate(petId,data);

        res.status(201).json({
            message:'success',
            result
        });
    } catch (error) {
        res.status(400).json({
            message:'Failed to update data',
            error
        })
    }
}

exports.deletePet = async (req, res) => {
    try {
        const petId = req.params.petId;

        const result = await PetSchema.findByIdAndDelete(petId);

        res.status(201).json({
            message:'deleted successfully',
            result
        });
    } catch (error) {
        res.status(400).json({
            message:'Failed to delete data',
            error
        })
    }
}