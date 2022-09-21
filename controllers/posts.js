import postMessage from "../models/postMessage.js"
const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find()
    console.log(postMessages)
    res.status(200).json(postMessages)
  } catch (error) {
    res.send(error)
  }
}
const createPost = (req, res) => {
  res.send("Post Create")
}

export { getPosts, createPost }
