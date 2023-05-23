const mongoose = require("mongoose");

const playerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    maxlength: 150,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  constitution: {
    type: Number,
    required: true,
    default: 20,
  },
  intelligence: {
    type: Number,
    required: true,
    default: 20,
  },
  strength: {
    type: Number,
    required: true,
    default: 20,
  },
  dexterity: {
    type: Number,
    required: true,
    default: 20,
  },
  wisdom: {
    type: Number,
    required: true,
    default: 20,
  },
  charisma: {
    type: Number,
    required: true,
    default: 20,
  },
  currentHP: {
    type: Number,
    required: true,
    default: 0,
  },
  maxHP: {
    type: Number,
    required: true,
    default: 0,
  },
  currentMana: {
    type: Number,
    required: true,
    default: 0,
  },
  maxMana: {
    type: Number,
    required: true,
    default: 0,
  },
  attackPower: {
    type: Number,
    required: true,
    default: 0,
  },
  currentExperience: {
    type: Number,
    required: true,
    default: 0,
  },
  requiredExperience: {
    type: Number,
    required: true,
    default: 0,
  },
  skillPoints: {
    type: Number,
    required: true,
    default: 0,
  },
  unassignedStatPoints: {
    type: Number,
    required: true,
    default: 0,
  }
});

const PlayerProfile = mongoose.model('PlayerProfile', playerProfileSchema);

module.exports = PlayerProfile;