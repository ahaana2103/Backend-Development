// const users = [
//   { id: 1, name: "Aman" },
//   { id: 2, name: "Riya" },
//   { id: 3, name: "Arya" },
//   { id: 4, name: "Subh" },
//   { id: 5, name: "Esha" },
//   { id: 6, name: "Anu" }

// ];

// module.exports = users;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    age: Number,
    course: String,
    skills: [String],
    address: {
      city: String,
      pincode: Number
    },
    isActive: Boolean
  },
  { collection: "students" } 
);

module.exports = mongoose.model("User", userSchema);