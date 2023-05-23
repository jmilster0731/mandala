const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const playerProfilesCtrl = require('../../controllers/api/playerProfiles');

// Create a user profile
router.post('/', ensureLoggedIn, playerProfilesCtrl.createProfile);

// Delete a specific user profile
router.delete('/:id', ensureLoggedIn, playerProfilesCtrl.deleteProfile);

// Update a user profile
router.put('/:id', ensureLoggedIn, playerProfilesCtrl.updateProfile);

// Retrieve all user profiles associated with the user
router.get('/', ensureLoggedIn, playerProfilesCtrl.getAllProfiles);

module.exports = router;