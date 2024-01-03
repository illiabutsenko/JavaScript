//JavaScript security issues
function escapeHTML(str) {
  return str.replace(/[&<>"'\/]/g, function (char) {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "  ":
        return "&#39;";
      case "/":
        return "&#x2F;";
      default:
        return char;
    }
  });
}

const sanitizeInput = (input) => {
  //Remove HTML tags:
  const sanitizedString = input.replace(/<[^>]*>/g, " unaccepted ");

  //Display special HTML characters on the screen:
  const escapedString = escapeHTML(sanitizedString);

  return escapedString;
};

const userInput = "<html>text</html> <script>";
console.log("XSS Attack: ", sanitizeInput(userInput), escapeHTML(userInput));
