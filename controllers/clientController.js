const Client = require("../models/model-client");

exports.save = async (req, res) => {
  /**Validaciones*/
  const { email, celphone } = req.body;
  if (!validateEmail(email) || !validateCelPhone(celphone)) {
    /**En caso que no pase el test */
    res
      .status(400)
      .json({
        state: false,
        error: `Los datos ingresados no cumplen con los requerimientos`,
      });
  } else {
    const newClient = new Client(req.body);
    try {
      const data = await newClient.save();
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
  }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const updateInformation = req.body;
  
    const hasEmail = updateInformation.email !== undefined;
    const hasPhone = updateInformation.celphone !== undefined;
  
    if (hasEmail || hasPhone) {
      let errorMessage = null;
      if (hasPhone && !validateCelPhone(updateInformation.celphone)) {
        errorMessage = "El teléfono no cumple con los requerimientos";
      } else if (hasEmail && !validateEmail(updateInformation.email)) {
        errorMessage = "El email no cumple con los requerimientos";
      }
      if (errorMessage) {
        return res.status(400).json({ state: false, error: errorMessage });
      }
    }
  
    try {
      const data = await Client.updateOne({ id: id }, { $set: updateInformation });
      res.status(200).json({ state: true, data: data });
    } catch (err) {
      res.status(500).json({ state: false, error: err.message });
    }
  };

exports.findAll = async (req, res) => {
  try {
    const data = await Client.find({}).populate("reservations");
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.findId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Client.find({ id: id }).populate("reservations");
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Client.deleteOne({ id: id });
    res.status(200).json({ state: true, data: data });
  } catch (err) {
    res.status(500).json({ state: false, error: err.message });
  }
};

const validateEmail = (correo) => {
  console.log("la lllamo " + correo);
  var expresionRegularCorreo =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return expresionRegularCorreo.test(correo);
};
const validateCelPhone = (phone) => {
  console.log(phone);
  var phoneExpresion = /^[0-9]{10}$/;
  return phoneExpresion.test(phone);
};
