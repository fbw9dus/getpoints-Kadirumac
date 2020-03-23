

const express = require('express');
const router  = express.Router();

const { getPatients,getPatient}  =  require ('../controllers/patients')


 router.route('/').
        get(getPatients)


 router.route('/:id').
        get(getPatient)
      




module.exports = router