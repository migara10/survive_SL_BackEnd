const options = [
  { id: 1, text: "Onion" },
  { id: 2, text: "Mango" },
  { id: 3, text: "Orange" },
  { id: 4, text: "Tomato" },
  { id: 5, text: "Papaya" },
  { id: 6, text: "Butter Fruit" },
  { id: 7, text: "Banana" },
  { id: 8, text: "Carrot" },
  { id: 9, text: "Cabbage" },
  { id: 10, text: "Wood Apple" },
  { id: 11, text: "Lime" },
  { id: 12, text: "Lemon" },
  { id: 13, text: "Apple" },
];

const postNewItem = (req, res) => {
  let filteredData = options;
  const searchParam = req.body.param;
  try {
    if (searchParam) {
      req.body.param.toLowerCase();
      filteredData = options.filter((option) =>
        option.text.toLowerCase().includes(searchParam.toLowerCase())
      );
    }

    res.send(filteredData);
  } catch (error) {
    console.error("Error in postNewItem:", error);
    res.status(400).send("Bad Request"); // Respond with an error status and message
  }
};

const getNewItem = (req, res) => {
  res.send("migara");
};

module.exports = {
  postNewItem,
  getNewItem,
};
