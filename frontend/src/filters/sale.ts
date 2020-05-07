export default (price: number, salePrice: number): number => {
  return Math.floor((price - salePrice) / price * 100);
}
