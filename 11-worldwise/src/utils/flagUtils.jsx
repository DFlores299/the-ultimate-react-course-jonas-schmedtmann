export const flagemojiToPNG = (flag) => {
  // Extract the country code from the flag emoji
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  // Return the URL of the flag image
  return `https://flagcdn.com/24x18/${countryCode}.png`;
};
