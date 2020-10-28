import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    // { duration: '15s', target: 200 }, // below normal load
    // { duration: '45s', target: 200 },
    // { duration: '15s', target: 400 }, // normal load
    // { duration: '45s', target: 400 },
    { duration: '15s', target: 700 }, // around the breaking point
    { duration: '45s', target: 700 },
    { duration: '15s', target: 900 }, // beyond the breaking point
    { duration: '45s', target: 900 },
    { duration: '15s', target: 1100 }, // beyond the breaking point
    { duration: '45s', target: 1100 },
    { duration: '15s', target: 1400 }, // normal load
    { duration: '45s', target: 1400 },
    { duration: '20s', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  // const before = new Date().getTime();
  // const T = 2;

  http.get('http://localhost:3002/getProduct/100000');

  // const after = new Date().getTime();
  // const diff = (after - before) / 1000;
  // const remainder = T - diff;
  // check(remainder, { 'reached request rate': remainder > 0 });
  // if (remainder > 0) {
  //   sleep(remainder);
  // } else {
  //   console.warn(
  //     `Timer exhausted! The execution time of the test took longer than ${T} seconds`
  //   );
  // }
  sleep(1)
}