let inputText = "input";
let outputText = "output";
const inputTextElement = document.getElementById("inputTextArea");
const outputTextElement = document.getElementById("outputTextArea");

String.prototype.map = function (func) {
  let stringArray = this.split("");

  let newStringArray = stringArray.map((item, index) => {
    return func.call(window, item, index, this);
  });

  return newStringArray.join("");
};

function encriptar() {
  let buffer = "";
  inputText = inputTextElement.value;
  outputText = inputText.map((e) => {
    switch (e) {
      case "a":
        buffer = "ai";
        break;
      case "e":
        buffer = "enter";
        break;
      case "i":
        buffer = "imes";
        break;
      case "o":
        buffer = "ober";
        break;
      case "u":
        buffer = "ufat";
        break;
      default:
        buffer = e;
        break;
    }
    return buffer;
  });

  outputTextElement.value = outputText;
}

function desencriptar() {
  let buffer = "";
  inputText = inputTextElement.value;
  outputText = inputText.replaceAll("ai", "a");
  outputText = outputText.replaceAll("enter", "e");
  outputText = outputText.replaceAll("imes", "i");
  outputText = outputText.replaceAll("ober", "o");
  outputText = outputText.replaceAll("ufat", "u");

  outputTextElement.value = outputText;
}
