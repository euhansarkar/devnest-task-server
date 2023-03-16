const bcrypt = require(`bcrypt`);
const Task = require(`../models/taskModels.js`);

module.exports.addTask = async (req, res, next) => {
  try {
    const { taskname, description, starttime, taskcategory, endtime, email } =
      req.body;

    const task = await Task.create({
      taskname,
      taskcategory,
      description,
      starttime,
      endtime,
      email,
    });

    return res.json({ status: true, task });
  } catch (ex) {
    next(ex);
  }
};

module.exports.findAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ email: req.params.email }).select([
      `taskname`,
      `taskcategory`,
      `description`,
      `starttime`,
      `endtime`,
      `_id`,
    ]);

    return res.json({ status: true, tasks });
  } catch (ex) {
    next(ex);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });

    return res.json({ status: true, task: `task deleted successfully` });
  } catch (ex) {
    next(ex);
  }
};

module.exports.modifyTask = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const task = await Task.findByIdAndUpdate({ _id }, req.body, { new: true });
    return res.json({ status: true, task });
  } catch (ex) {
    next(ex);
  }
};
