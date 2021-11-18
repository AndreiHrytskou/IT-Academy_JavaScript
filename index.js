function vowels() {
  let a = 0;
  const rusVowels = ["у", "ё", "е", "ы", "а", "о", "э", "я", "и", "ю"];
  const word = prompt("Введите слово");
  for (let i = 0; i < word.length; i++)
    for (let j = 0; j < rusVowels.length; j++)
      if (word[i] === rusVowels[j]) {
        ++a;
        break;
      }
  return a ? a : "нет русских гласных букв";
}
alert(vowels());
