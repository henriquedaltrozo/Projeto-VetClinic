const PetService = require("../services/PetServices");

exports.createPet = async (req, res) => {
  try {
    await PetService.createPet(req.params.tutorId, req.body);
    res.send("Pet criado e adicionado ao tutor com sucesso!");
  } catch (error) {
    console.error("Erro ao criar e adicionar pet ao tutor:", error);
    res.status(500).send("Erro ao criar e adicionar pet ao tutor!");
  }
};

exports.updatePet = async (req, res) => {
  try {
    const success = await PetService.updatePet(req.params.petId, req.params.tutorId, req.body);
    if (!success) {
      return res.status(404).send("Pet ou Tutor não encontrado!");
    }
    res.send("Pet atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar pet:", error);
    res.status(500).send("Erro ao atualizar pet!");
  }
};

exports.deletePet = async (req, res) => {
  try {
    const success = await PetService.deletePet(req.params.petId, req.params.tutorId);
    if (!success) {
      return res.status(404).send("Pet ou Tutor não encontrado!");
    }
    res.send("Pet deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar pet:", error);
    res.status(500).send("Erro ao deletar pet!");
  }
};
