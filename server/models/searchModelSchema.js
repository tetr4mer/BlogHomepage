const mongoose = require("mongoose");

const searchDataSchema = new mongoose.Schema({
    searchString: {
        type: String,
        required: true
    },
    dateSearched: {
        type: String,
        required: true
    },
    isWebpage: {
        type: Boolean,
        required: false
    },
    isStack: {
        type: Boolean,
        required: false
    },
    isGoogleSearch: {
        type: Boolean,
        required: false
    },
    searchURL: {
        type: String,
        required: true
    },
    destinationURL: {
        type: String,
        required: false
    },
    resolutionReached: {
        type: Boolean,
        required: true
    }
})

const searchModelSchema = mongoose.model('search data', searchDataSchema);
module.exports = searchModelSchema;