export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ messgae: "Invalid input." });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Succesfully stored message!", message: newMessage });
  }
}
