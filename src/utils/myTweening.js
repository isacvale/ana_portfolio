// https://easings.net/#easeInOutQuad
function easeInOutQuad(x: number): number {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

const execute = ({ count, duration, from, to, callback }) => {
  if (count === duration) callback(to);
  else {
    const amplitude = to - from;
    const progress = count / duration;
    const value = Math.round(easeInOutQuad(progress) * amplitude + from);
    callback(value);
    window.setTimeout(() => {
      execute({ count: count + 1, duration, from, to, callback });
    }, 1);
  }
};

const myTweening = ({ from, to, next, duration = 100 }) => {
  execute({ count: 0, duration, from, to, callback: next });
};

export default myTweening;
