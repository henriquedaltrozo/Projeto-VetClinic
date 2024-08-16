const express = require("express");
const router = express.Router();
const TutorController = require("../controllers/TutorController");

router.get("/tutors", TutorController.getAllTutors);
router.post("/tutor", TutorController.createTutor);
router.put("/tutor/:id", TutorController.updateTutor);
router.delete("/tutor/:id", TutorController.deleteTutor);

module.exports = router;
