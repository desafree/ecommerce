export const removeLastWord = (phrase: string, separator: string) => {
  const words = phrase.split(" ");
  words.pop();
  return words.join(" ");
};
