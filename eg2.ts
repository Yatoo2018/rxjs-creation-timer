import { interval, takeUntil, timer } from 'rxjs';

// Build a Date object that marks the
// next minute.
const currentDate = new Date();
const startOfNextMinute = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  currentDate.getMinutes() + 1
);

// This could be any observable stream
const source = interval(1000);

const result = source.pipe(takeUntil(timer(startOfNextMinute)));

result.subscribe(console.log);
