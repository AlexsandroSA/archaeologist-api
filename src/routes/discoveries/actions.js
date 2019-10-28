const HttpStatus = require('http-status');
const Discoveries = require('./schema');
const Schema = require('./schema');

exports.create = async (req, res) => {
  try {
    const discovery = new Discoveries({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date || new Date(),
      comments: req.body.comments,
    });

    const data = await discovery.save();

    res.send(data);
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      message: err.message || 'Some error occurred while creating.',
    });
  }
};

exports.findAll = async (_, res) => {
  try {
    const data = await Discoveries.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving discovery.',
    });
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Discoveries.findById(id);

    if (!data) {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    res.send(data);
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    return res.status(500).send({
      message: `Could not find item with id ${id}`,
    });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Discoveries.findByIdAndUpdate(id, req.body, { new: true });

    if (!data) {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    res.send(data);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    return res.status(500).send({
      message: `Error updating item with id ${id}`,
    });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Discoveries.findByIdAndRemove(id);

    if (!data) {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    res.send({ message: 'Deleted successfully!' });
  } catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: `Item not found with id ${id}`,
      });
    }

    return res.status(500).send({
      message: `Could not delete item with id ${id}`,
    });
  }
};
