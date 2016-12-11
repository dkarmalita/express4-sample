let mongoose     = require('mongoose'),
    Schema       = mongoose.Schema,
    DinoSchema   = new Schema({
        name: String
    })

DinoSchema.index({'$**': 'text'});                      // all text fields
//DinoSchema.index({title: 'text', body: 'text'});      // several string fields
// Include all/several fields in the text index to enabling full text search
// More info at: http://stackoverflow.com/a/28775709

module.exports = mongoose.model('Dino', DinoSchema);