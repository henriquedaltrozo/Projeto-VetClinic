const TutorService = require("../services/TutorServices");

exports.getAllTutors = async (req, res) => {
  try {
    const tutors = await TutorService.getAllTutors();
    res.send(tutors);
  } catch (error) {
    console.error("Erro ao buscar tutores:", error);
    res.status(500).send("Erro ao buscar tutores!");
  }
};

exports.createTutor = async (req, res) => {
  try {
    await TutorService.createTutor(req.body);
    res.status(201).send("Tutor foi criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tutor:", error);
    res.status(500).send("Erro ao criar tutor!");
  }
};

exports.updateTutor = async (req, res) => {
  try {
    const updatedTutor = await TutorService.updateTutor(req.params.id, req.body);
    if (!updatedTutor) {
      return res.status(404).send("Tutor não encontrado!");
    }
    res.send("O tutor foi atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar tutor:", error);
    res.status(500).send("Erro ao atualizar tutor!");
  }
};

exports.deleteTutor = async (req, res) => {
  try {
    const success = await TutorService.deleteTutor(req.params.id);
    if (!success) {
      return res.status(404).send("Tutor não encontrado!");
    }
    res.status(200).send("Tutor deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar tutor:", error);
    res.status(500).send("Erro ao deletar tutor!");
  }
};
