const ItemModel = require("../models/itemModel");

const getItemsData = async (req, res) => {

  const data = await ItemModel.find({});
const extractedData = data.map(item => ({ id: item.counter, text: item.name }));

// Create an object to track unique text values
const uniqueTexts = {};

// Filter the data to keep only unique "text" values
const uniqueExtractedData = extractedData.filter(item => {
  if (!uniqueTexts[item.text]) {
    uniqueTexts[item.text] = true;
    return true; // Keep this item
  }
  return false; // Skip duplicate "text"
});
  res.status(200).send(uniqueExtractedData);
};

const getCategoryData = (req, res) => {
  const options = [
    { id: 1, text: 'Fruits' },
  { id: 2, text: 'Vegetables' },
  { id: 3, text: 'Beverages' },
  { id: 4, text: 'Snacks' },
  { id: 5, text: 'Dairy' },
  { id: 6, text: 'Meat' },
  { id: 7, text: 'Seafood' },
  { id: 8, text: 'Bakery' },
  { id: 9, text: 'Canned and Packaged Foods' },
  { id: 10, text: 'Frozen Foods' },
  { id: 11, text: 'Bakery and Bread' },
  { id: 12, text: 'Grains and Cereals' },
  { id: 13, text: 'Sweets and Candy' },
  { id: 14, text: 'Condiments and Sauces' },
  { id: 15, text: 'Spices and Seasonings' },
  { id: 16, text: 'Health and Organic Foods' },
  { id: 17, text: 'International and Ethnic Foods' },
  { id: 18, text: 'Baby Food and Care' },
  { id: 19, text: 'Pet Food' },
  { id: 20, text: 'Household and Cleaning Supplies' },
  { id: 21, text: 'Personal Care Products' },
  { id: 22, text: 'Alcoholic Beverages' },
  ];

  res.status(200).send(options);
};
const getItemData = async (req, res) => {
  const key = req.query[0];
  const query = {name: key}
  const data = await ItemModel.find(query);
  console.log(data, 'test')
  res.status(200).send(data);
};

const saveItem = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const newItem = new ItemModel({
    category: req.body.category,
    name: req.body.name,
    description: req.body.description,
    unit: req.body.unit,
    price: req.body.price,
    shop: req.body.shop,
    image_path: req.file.path.replace(/\\/g, "/"),
  });

  try {
    await ItemModel.create(newItem);
    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(console.log(error));
    res.status(500).json({ error: "Error saving data" });
  }
};

const getNewItem = (req, res) => {
  res.send("migara");
};

module.exports = {
  saveItem,
  getNewItem,
  getItemsData,
  getCategoryData,
  getItemData,
};
