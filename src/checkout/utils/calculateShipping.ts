export function calculateShipping(total: number) {
  if (total > 200) {
    return 50;
  }

  return 100;
}
