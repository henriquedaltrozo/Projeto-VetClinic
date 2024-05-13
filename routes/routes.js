const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

router.get("/tutors", async (req, res) => {
  try {
    const tutors = await Tutor.findAll({ include: Pet });
    res.send(tutors);
  } catch (error) {
    console.error("Erro ao buscar tutores:", error);
    res.status(500).send("Erro ao buscar tutores!");
  }
});

router.post("/tutor", async (req, res) => {
  try {
    await Tutor.create(req.body);
    res.status(201).send("Tutor foi criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tutor:", error);
    res.status(500).send("Erro ao criar tutor!");
  }
});

router.put("/tutor/:id", async (req, res) => {
  const requestedId = req.params.id;
  try {
    const tutor = await Tutor.findOne({ where: { id: requestedId } });
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado!");
    }

    tutor.name = req.body.name;
    tutor.phone = req.body.phone;
    tutor.email = req.body.email;
    tutor.date_of_birth = req.body.date_of_birth;
    tutor.zip_code = req.body.zip_code;

    await tutor.save();

    res.send("O tutor foi atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar tutor:", error);
    res.status(500).send("Erro ao atualizar tutor!");
  }
});

router.delete("/tutor/:id", async (req, res) => {
  const requestedId = req.params.id;
  try {
    const tutor = await Tutor.findByPk(requestedId);
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado!");
    }

    await tutor.destroy();

    res.status(200).send("Tutor deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar tutor:", error);
    res.status(500).send("Erro ao deletar tutor!");
  }
});

router.post("/pet/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado!");
    }

    const petData = req.body;
    const pet = await Pet.create(petData);

    await tutor.addPet(pet);

    res.send("Pet criado e adicionado ao tutor com sucesso!");
  } catch (error) {
    console.error("Erro ao criar e adicionar pet ao tutor:", error);
    res.status(500).send("Erro ao criar e adicionar pet ao tutor!");
  }
});

router.put("/pet/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  try {
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).send("Pet não encontrado!");
    }

    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado!");
    }

    await pet.update(req.body);
    await pet.setTutor(tutor);

    res.send("Pet atualizado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao atualizar o pet!");
  }
});

router.delete("/pet/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  try {
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).send("Pet não encontrado!");
    }

    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado!");
    }

    if (pet.TutorId != tutorId) {
      return res
        .status(404)
        .send("O tutor especificado não está associado a este pet!");
    }

    await pet.destroy();

    res.send("Pet deletado com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao deletar o pet!");
  }
});

module.exports = router;
