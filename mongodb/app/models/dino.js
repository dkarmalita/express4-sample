let mongoose     = require('mongoose'),
    Schema       = mongoose.Schema,
    DinoSchema   = new Schema({
        name: String
    })

module.exports = mongoose.model('Dino', DinoSchema);