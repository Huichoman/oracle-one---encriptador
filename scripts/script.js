let inputText = "input";
let outputText = "output";
const inputTextElement = document.getElementById("inputTextArea");
var wrapper = document.getElementsByClassName("text-animation")[0];
var spans = wrapper.getElementsByTagName("span");
var outputContainer = document.getElementById("outputContainer");
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
  inputText = inputTextElement.value.trim();
  if (inputText.length <= 0) {
    wrapper.style.color = "#eb5f08";
    outputText = "Oops! Ningún mensaje se ha encontrado";
    outputContainer.style.backgroundImage =
      "url('https://huichoman.github.io/oracle-one---encriptador/images/robot.svg')";
  } else {
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

    wrapper.style.color = "rgb(27, 12, 34)";
    outputContainer.style.backgroundImage = "none";
  }

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

function inputFilter(string) {
  var out = "";

  var filtro = "abcdefghijklmnñopqrstuvwxyz ";

  for (var i = 0; i < string.length; i++)
    if (filtro.indexOf(string.charAt(i)) != -1) out += string.charAt(i);
  return out;
}
