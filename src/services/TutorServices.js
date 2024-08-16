const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

exports.getAllTutors = async () => {
  return await Tutor.findAll({ include: Pet });
};

exports.createTutor = async (tutorData) => {
  return await Tutor.create(tutorData);
};

exports.updateTutor = async (id, tutorData) => {
  const tutor = await Tutor.findOne({ where: { id } });
  if (!tutor) {
    return null;
  }

  return await tutor.update(tutorData);
};

exports.deleteTutor = async (id) => {
  const tutor = await Tutor.findByPk(id);
  if (!tutor) {
    return null;
  }

  await tutor.destroy();
  return true;
};
