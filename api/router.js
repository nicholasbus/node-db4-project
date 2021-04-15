const router = require("express").Router();
const Recipe = require("./model");

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.getRecipeById(req.params.id);
    if (!recipe) {
      res.status(404).json({ message: "no such recipe" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
