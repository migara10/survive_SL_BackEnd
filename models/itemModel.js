const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  counter: { type: Number }, // increment data
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  unit: { type: String, required: true, enum: ["Liter", "Kilo"] },
  price: { type: String, required: true },
  shop: { type: String, required: true },
  image_path: { type: String, required: true },
});

itemSchema.pre("save", async function (next) {
  if (!this.counter) {
    // Only increment the counter if it's not already set
    const lastItem = await this.constructor.findOne(
      {},
      {},
      { sort: { counter: -1 } }
    );
    this.counter = lastItem ? lastItem.counter + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("items", itemSchema);

/* 
fd.append('file', selectImage.value)
      fd.append('category', productData.value.category)
      fd.append('name', productData.value.name)
      fd.append('description', productData.value.description)
      fd.append('unit', productData.value.unit)
      fd.append('price', productData.value.price) */

/* name: { type: String, required : true},
    description: { type: String, required : true},
    unit: { type: String, required : true, enum: ['Liter', 'Kilo']},
    price: { type: String, required : true},
    image_path: { type: String, required : true}, */
