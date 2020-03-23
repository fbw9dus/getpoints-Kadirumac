const patients = require('../data-patients')

exports.getPatients = (req, res, next) => {


      
        res.status(200).send(patients.patients)

} 

exports.getPatient = async (req, res, next) => {
    
    const id =  await parseInt(req.params.id) -1
   
    res.status(200).send(patients.patients[id])


} 