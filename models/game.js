// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  pairs: [String],
},
{
  usePushEach: true
});

const gameSchema = new Schema({
  symbol: { type: Array },
  squares: { type: Array },
  players: [playerSchema],
  turn: { type: Number, default: 0 }, // player index
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastCard: { type: Number },
  draw: { type: Boolean, default: false },
},
{
  usePushEach: true
});

module.exports = mongoose.model('games', gameSchema)
