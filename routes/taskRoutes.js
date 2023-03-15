const { addTask, findAllTasks, deleteTask, modifyTask } = require("../Controllers/taskControllers");
const router = require(`express`).Router();

router.post(`/addtask`, addTask);

router.get(`/myalltasks/:email`, findAllTasks)

router.delete(`/deletetask/:id`, deleteTask)

router.patch(`/modifytask/:id`, modifyTask)

module.exports = router;


