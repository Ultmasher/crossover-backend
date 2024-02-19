// import pool from "../db/pool.js";

export const getQuestions = async (req, res, next) => {
  try {
    const query = "SELECT * FROM questions";
    const { rows } = await pool.query(query);
    if (!rows.length) {
      return res.status(404).json({ message: "No questions found" });
    }
    req.questions = rows;
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// export const checkRecipe = async (req, res, next) => {
//   const { id } = req.params;
//   if (!id) return res.status(400).json({ message: "Recipe id required." });
//   if (isNaN(id)) return res.status(400).json({ message: "Recipe id must be a number" });
//   try {
//     const query = "SELECT * FROM recipes WHERE id=$1";
//     const values = [id];
//     const { rows } = await pool.query(query, values);
//     return !rows[0]
//       ? res.status(404).json({ message: "Recipe not found" })
//       : (req.recipe = rows[0]) && next();
//   } catch (error) {
//     res.sendStatus(500);
//   }
// };