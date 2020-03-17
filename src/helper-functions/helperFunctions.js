export default function calculateExp(n1, n2, operand) {
  switch (operand) {
    case "+":
      return Number(n1) + Number(n2);

    case "-":
      return Number(n1) - Number(n2);

    case "*":
      return Number(n1) * Number(n2);

    case "/":
      return Number(n1) / Number(n2);

    case "^":
      return Number(n1) ** Number(n2);
  }
}
