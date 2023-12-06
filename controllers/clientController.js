const Client = require('../models/model-client')

exports.save = async(req,res)=>{ /**Validaciones*/
    const newClient = new Client(req.body);
    try{
        const data = await newClient.save();
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.update = async(req,res)=>{
    const {id} = req.params
    const updateInformation = req.body
    try{
        const data = await Client.updateOne({id: id},{$set: updateInformation})
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.findAll = async(req,res)=>{
    try{
        const data = await Client.find({}).populate('reservations');
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.findId = async(req,res)=>{
    const {id} = req.params
    try{
        const data = await Client.find({id: id}).populate('reservations');
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}

exports.deleteClient = async(req,res)=>{
    const {id} = req.params
    try{
        const data = await Client.deleteOne({id: id})
        res.status(200).json({state: true, data: data})
    }catch(err){
        res.status(500).json({state: false, error: err.message})
    }
}