export default () => {
    return new Promise<void>((resolve, reject) => setTimeout(() => {resolve()}, 1000 * 2));
}
