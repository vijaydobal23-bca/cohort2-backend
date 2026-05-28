import { ChatMistralAI } from "@langchain/mistralai";
import readline from "readline/promises";
import dotenv from "dotenv";
import { HumanMessage } from "@langchain/core/messages";
dotenv.config();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const model = new ChatMistralAI({
  model: "mistral-small-latest",
  temperature: 0,
});

const messages = [];



while(true){
  const userInput = await rl.question("You :");
  messages.push(new HumanMessage(userInput));
  const response = await model.invoke(messages);
  messages.push(response);
  console.log("AI :" +response.content);
}

