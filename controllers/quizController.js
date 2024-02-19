import quizData from "../data/quizData.json" assert { type: "json" };
export const getQuestions = async ( req, res) => {
    res.status(200).json(quizData);
}

export default getQuestions; 