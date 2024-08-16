const Pet = require("../models/Pet");
const Tutor = require("../models/Tutor");

exports.createPet = async (tutorId, petData) => {
  const tutor = await Tutor.findByPk(tutorId);
  if (!tutor) {
    throw new Error("Tutor não encontrado!");
  }

  const pet = await Pet.create(petData);
  await tutor.addPet(pet);
  return pet;
};

exports.updatePet = async (petId, tutorId, petData) => {
  const pet = await Pet.findByPk(petId);
  if (!pet) {
    return null;
  }

  const tutor = await Tutor.findByPk(tutorId);
  if (!tutor) {
    return null;
  }

  await pet.update(petData);
  await pet.setTutor(tutor);
  return pet;
};

exports.deletePet = async (petId, tutorId) => {
  const pet = await Pet.findOne({ where: { id: petId, TutorId: tutorId } });
  if (!pet) {
    return null;
  }

  await pet.destroy();
  return true;
};
