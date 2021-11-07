export const normalizeResponsiveProp = value => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return [value];
  }

  if (value && value.length) {
    return value;
  }

  console.warn(`Invalid responsive prop value: ${JSON.stringify(value)}`)

  return []
}
