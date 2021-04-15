exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Water" },
        { name: "Coffee" },
        { name: "Peanut Butter" },
        { name: "Jelly" },
        { name: "Bread" },
      ]);
    });
};
