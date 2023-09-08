import { timer, interval } from 'rxjs';

timer(0, 1000).subscribe((n) => console.log('timer', n));
interval(1000).subscribe((n) => console.log('interval', n));
