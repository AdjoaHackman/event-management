const mongoose = require('mongoose')
const { Schema, models } = mongoose;
const dayjs = require('dayjs')

const eventSchema = new Schema(
    {

        eventTitle: {
            type: String,
            required: true,
            maxlength: 280,
        },
        dateOfEvent: {
            type: Date,
            default: Date.now,
            get: () => dayjs().format("MM/DD/YYYY")
        },
        location: {
            type: String,
            required: true,
            maxlength: 250,
        },
        eventDescription: {
            type: String,
            required: true,
            maxlength: 3000,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const Event = models.Event || mongoose.model("Event", eventSchema);
module.exports = Event 