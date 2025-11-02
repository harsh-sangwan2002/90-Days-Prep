const theatreModel = require('../models/theatre.model');

const addTheatre = async (req, res) => {
    try {
        const theatreDetails = req.body;
        theatreDetails.owner = req.user.id;
        const newTheatre = new theatreModel(theatreDetails);
        await newTheatre.save();
        res.status(201).json({ message: 'Theatre added successfully', newTheatre });
    } catch (error) {
        res.status(500).json({ message: 'Error adding theatre', error: error.message });
    }
}

const getTheatreById = async (req, res) => {
    try {
        const theatreId = req.params.id;
        const theatre = await theatreModel.findById(theatreId);
        if (!theatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json({ theatre });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching theatre', error: err.message });
    }
}

const getAllTheatres = async (req, res) => {
    try {
        const theatres = await theatreModel.find();
        res.status(200).json({ theatres });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching theatres', error: err.message });
    }
}

const updateTheatre = async (req, res) => {
    try {
        const theatreId = req.params.id;
        const updateData = req.body;
        const updatedTheatre = await theatreModel.findByIdAndUpdate(theatreId, updateData);
        if (!updatedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json({ message: 'Theatre updated successfully', theatre: updatedTheatre });
    } catch (err) {
        res.status(500).json({ message: 'Error updating theatre', error: err.message });
    }
}

const deleteTheatre = async (req, res) => {
    try {
        const theatreId = req.params.id;
        const deletedTheatre = await theatreModel.findByIdAndDelete(theatreId);
        if (!deletedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json({ message: 'Theatre deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting theatre', error: err.message });
    }
}

module.exports = {
    addTheatre,
    getTheatreById,
    getAllTheatres,
    updateTheatre,
    deleteTheatre
}