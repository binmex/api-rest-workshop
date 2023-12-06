const Reservation = require('../models/model-reservation')

exports.save = async(req,res)=>{ /**Validaciones de fechas y que no se puede hacer otra reservacion a la misma hora */
    const newReservation = new Reservation(req.body);
    try{
        const data = await newReservation.save();
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.update = async(req,res)=>{
    const {id} = req.params
    const updateInformation = req.body
    try{
        const data = await Reservation.updateOne({id: id},{$set: updateInformation})
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.findAll = async(req,res)=>{
    try{
        const data = await Reservation.find({});
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.findId = async(req,res)=>{
    const {id} = req.params
    try{
        const data = await Reservation.find({id: id});
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.deleteReservation = async(req,res)=>{ /**cuando elimino un servicio tambien debo elminarlos del cliente*/
    const {id} = req.params
    try{
        const data = await Reservation.deleteOne({id: id})
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}