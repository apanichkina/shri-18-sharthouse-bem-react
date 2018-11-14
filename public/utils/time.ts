const SEC_PER_MIN = 60;

export function secToTime(seconds: string) {
  const secondsValid = Number(seconds);
  const min = Math.floor(secondsValid / SEC_PER_MIN);
  const sec = secondsValid % SEC_PER_MIN;
  let secValid = String(sec);

  if (sec < 10) {
    secValid = `0${sec}`;
  }

  return [min, secValid].join(':');
}

export function timeToSec(time: string): string {
  const timeParts = time.split(':');
  const min = Number(timeParts[0]) * SEC_PER_MIN;
  const sec = Number(timeParts[1]);

  return String(min + sec);
}
