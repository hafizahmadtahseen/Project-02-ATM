import inquirer from "inquirer";

interface ansType {
  UserId: string;
  Pin: number;
  Transaction_Type: string;
  Default_Amount_Withdraw: string;
  Random_Amount_Withdraw: number;
}
const answers: ansType = await inquirer.prompt([
  {
    type: "Input",
    name: "UserId",
    message: "Enter User Id",
  },
  {
    type: "number",
    name: "Pin",
    message: "Enter Pin",
  },
  {
    type: "list",
    name: "Transaction_Type",
    choices: [
      "Default Amount Withdraw",
      "Random Amount Withdraw",
      "Online Transfer",
    ],
    message: "Select Transaction Type",
    when(answers) {
      return answers.Pin;
    },
  },
  {
    type: "list",
    name: "Default_Amount_Withdraw",
    choices: ["1000", "3000", "5000", "7000", "100000"],
    message: "Select Default Amount",
    when(answers) {
      return answers.Transaction_Type == "Default Amount Withdraw";
    },
  },
  {
    type: "number",
    name: "Random_Amount_Withdraw",
    message: "Enter Desired Amount",
    when(answers) {
      return answers.Transaction_Type == "Random Amount Withdraw";
    },
  },
  {
    type: "string",
    name: "Online Transfer",
    message: "Sorry, Server is not Available!",
    when(answers) {
      return answers.Transaction_Type == "Online Transfer";
    },
  },
]);
