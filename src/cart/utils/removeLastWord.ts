export const removeLastWord = (phrase: string) => {
  const words = phrase.split(" ");
  words.pop();
  return words.join(" ");
};
