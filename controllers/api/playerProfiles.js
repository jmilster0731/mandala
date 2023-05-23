const PlayerProfile = require('../../models/playerProfile');

// Create a user profile
async function createProfile(req, res) {
  try {
    // Retrieve the user ID from the authenticated user
    const userId = req.user._id;

    // Create the new user profile with the provided data
    const userProfile = new PlayerProfile({
      user: userId,
      name: req.body.name,
      level: req.body.level,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      currentHP: req.body.currentHP,
      maxHP: req.body.maxHP,
      currentMana: req.body.currentMana,
      maxMana: req.body.maxMana,
      attackPower: req.body.attackPower,
      currentExperience: req.body.currentExperience,
      requiredExperience: req.body.requiredExperience,
      skillPoints: req.body.skillPoints,
      unassignedStatPoints: req.body.unassignedStatPoints,
    });

    // Save the new user profile to the database
    const savedProfile = await userProfile.save();

    res.status(201).json(savedProfile);
  } catch (error) {
    console.error('Error creating user profile:', error);
    res.status(500).json({ error: 'Failed to create user profile' });
  }
}

// Delete a specific user profile
async function deleteProfile(req, res) {
  try {
    const userId = req.user._id;
    const profileId = req.params.id;

    // Find and delete the user profile associated with the given ID
    await PlayerProfile.findOneAndDelete({ _id: profileId, user: userId });

    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ error: 'Failed to delete user profile' });
  }
}

// Update a user profile
async function updateProfile(req, res) {
  try {
    const userId = req.user._id;
    const profileId = req.params.id;

    // Find the user profile associated with the given ID and user
    const userProfile = await PlayerProfile.findOne({ _id: profileId, user: userId });

    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    // Update the user profile fields with the provided data
    const updateFields = req.body;

    Object.keys(updateFields).forEach((field) => {
      userProfile[field] = updateFields[field];
    });

    // Save the updated user profile
    const updatedProfile = await userProfile.save();

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Failed to update user profile' });
  }
}

// Retrieve all user profiles associated with the user
async function getAllProfiles(req, res) {
  try {
    const userId = req.user._id;

    // Find all user profiles associated with the given user ID
    const profiles = await PlayerProfile.find({ user: userId });

    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error retrieving user profiles:', error);
    res.status(500).json({ error: 'Failed to retrieve user profiles' });
  }
}

module.exports = {
  createProfile,
  deleteProfile,
  updateProfile,
  getAllProfiles,
};