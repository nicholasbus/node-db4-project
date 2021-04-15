const db = require("../data/config");

module.exports = {
  async getRecipeById(id) {
    const recipeAndSteps = await db("recipes as r")
      .join("steps as st", "st.recipe_id", "r.recipe_id")
      .select("r.name")
      .select("st.instructions", "st.step_id", "st.step_number")
      .where("st.recipe_id", id)
      .join("recipe_ingredients as ri", "ri.recipe_id", "st.recipe_id")
      .select("ri.ingredient_id", "ri.quantity")
      .where("ri.recipe_id", id)
      .groupBy("st.step_id")
      .orderBy("st.step_number");

    const ingredientsArr = [];

    const stepsArr = recipeAndSteps.map((item) => {
      return {
        step_id: item.step_id,
        step_number: item.step_number,
        step_instructions: item.instructions,
        ingredients: ingredientsArr,
      };
    });

    const formatted = {
      recipe_id: id,
      recipe_name: recipeAndSteps[0].name,
      steps: stepsArr,
    };

    return formatted;

    // return recipeAndSteps;
  },
};
