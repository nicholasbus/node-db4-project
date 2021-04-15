exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { instructions: "Put PB on bread", recipe_id: 1, step_number: 1 },
        { instructions: "Put J on bread", recipe_id: 1, step_number: 2 },
        {
          instructions: "Put two pieces of bread together",
          recipe_id: 1,
          step_number: 3,
        },
        { instructions: "Drink water", recipe_id: 2, step_number: 1 },
        { instructions: "Boil water", recipe_id: 3, step_number: 1 },
        { instructions: "Add coffee to water", recipe_id: 3, step_number: 2 },
        { instructions: "Steep coffee", recipe_id: 3, step_number: 3 },
      ]);
    });
};
