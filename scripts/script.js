let inputText = "input";
let outputText = "output";
const inputTextElement = document.getElementById("inputTextArea");
var wrapper = document.getElementsByClassName("text-animation")[0];
var spans = wrapper.getElementsByTagName("span");
// const outputTextElement = document.getElementById("outputTextArea");

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

  // outputTextElement.value = outputText;
  document.getElementsByClassName("text-animation")[0].textContent = outputText;
  wrapper.style.opacity = "1";
  wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");
  for (var i = 0; i < spans.length; i++) {
    spans[i].style.animationDelay = i * 80 + "ms";
  }
}

function desencriptar() {
  let buffer = "";
  inputText = inputTextElement.value;
  outputText = inputText.replaceAll("ai", "a");
  outputText = outputText.replaceAll("enter", "e");
  outputText = outputText.replaceAll("imes", "i");
  outputText = outputText.replaceAll("ober", "o");
  outputText = outputText.replaceAll("ufat", "u");

  document.getElementsByClassName("text-animation")[0].textContent = outputText;
  wrapper.style.opacity = "1";
  wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");
  for (var i = 0; i < spans.length; i++) {
    spans[i].style.animationDelay = i * 80 + "ms";
  }
}

function copyText() {
  var text = document.getElementsByClassName("text-animation")[0].textContent;
  navigator.clipboard.writeText(text);
  inputTextElement.value = "";
}
