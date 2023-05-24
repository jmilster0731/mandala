const express = require('express');
const router = express.Router();
const playerProfilesCtrl = require('../../controllers/api/playerProfiles');

// Create a user profile
router.post('/', playerProfilesCtrl.createProfile);

// Delete a specific user profile
router.delete('/:id', playerProfilesCtrl.deleteProfile);

// Update a user profile
router.put('/:id', playerProfilesCtrl.updateProfile);

// Retrieve all user profiles associated with the user
router.get('/:id', playerProfilesCtrl.getAllProfiles);

module.exports = router;