// * Decorator
export const Everis = config => {
  return target => {
    Object.defineProperty(target.prototype, 'getProfile', {
      value: () => config,
    });
  };
};
