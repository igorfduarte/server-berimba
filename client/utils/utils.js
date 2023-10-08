export const  stringToNumber = (stringValue) => {
  const sanitizedValue = stringValue.replace(",", ".");
  return parseFloat(sanitizedValue);
}
