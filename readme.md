# Rxjs 创建型操作符 interval

创建一个 `Observable`，该`Observable`在指定的 `SchedulerLike` 上每隔指定的时间间隔发出序列流项。

## type

`interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>`


### 参数：

- `period: number`	

可选参数. 默认值为0. 间隔大小（默认情况下），以毫秒为单位，或由调度程序时钟确定的时间单位。

- `scheduler: SchedulerLike`

可选参数. 默认值为 `asyncScheduler`. `SchedulerLike` 用于调度值的产生，并提供“时间”的概念。


### Returns

`Observable<number>`: 在时间间隔后发出一个递增整数的 `Observable`。


## 例子1

```typescript
import { interval, take } from 'rxjs';
 
const numbers = interval(1000);
 
const takeFourNumbers = numbers.pipe(take(4));
 
takeFourNumbers.subscribe(x => console.log('Next: ', x));
 
// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```