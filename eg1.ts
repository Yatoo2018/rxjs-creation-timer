import { of, timer, concatMap } from 'rxjs';

// This could be any observable
const source = of(1, 2, 3);

timer(3000)
  .pipe(concatMap(() => source))
  .subscribe(console.log);
