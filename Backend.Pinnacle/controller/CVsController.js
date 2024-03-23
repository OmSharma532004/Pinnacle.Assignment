const CV = require('../models/CV');

exports.uploadCV = async (req, res) => {
  try {
    const { name, role, description, skills, experience, education } = req.body;

    if (!name || !role || !skills || !experience || !education) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const cvData = {
      name,
      role,
      description,
      skills,
      experience,
      education,
      // Add other fields as needed
    };

    // Save CV data to MongoDB
    const newCV = new CV(cvData);
    await newCV.save();

    res.status(200).json({ message: 'CV uploaded successfully' });
  } catch (error) {
    console.error('Error uploading CV:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.rankCVs = async (req, res) => {
    const { field, keywords } = req.query;
  
    try {
      const cvs = await CV.find({ [field]: { $regex: new RegExp(keywords, 'i') } });
  
      // Dummy ranking logic (counting keyword matches)
      const rankedCVs = cvs.map(cv => ({
        name: cv.name,
        score: (cv[field].match(new RegExp(keywords, 'gi')) || []).length,
      })).sort((a, b) => b.score - a.score);
  
      res.status(200).json({ rankedCVs });
    } catch (error) {
      console.error('Error ranking CVs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.searchCVs = async (req, res) => {
    const { field, keywords } = req.query;
  
    try {
      console.log('Search Query:', { field, keywords }); // Debugging
  
      let cvs;
      if (field === 'skills') {
        cvs = await CV.find({ skills: { $in: [keywords] } });
      } else {
        cvs = await CV.find({ [field]: { $regex: new RegExp(keywords, 'i') } });
      }
  
      console.log('Matching CVs:', cvs); // Debugging
  
      res.status(200).json({ cvs });
    } catch (error) {
      console.error('Error searching CVs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  exports.getCV = async (req, res) => {
    const { id } = req.params;
  
    try {
      const cv = await CV.findById(id);
  
      if (!cv) {
        return res.status(404).json({ error: 'CV not found' });
      }
  
      res.status(200).json({ cv });
    } catch (error) {
      console.error('Error getting CV:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.getAllCVs = async (req, res) => {
    try {
      const cvs = await CV.find();
  
      res.status(200).json({ cvs });
    } catch (error) {
      console.error('Error getting all CVs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }