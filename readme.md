# Rxjs 创建型操作符 timer

## type

`timer(dueTime: number | Date = 0, intervalOrScheduler?: number | SchedulerLike, scheduler: SchedulerLike = asyncScheduler): Observable<number>`

### 参数：

- `dueTime：number | Date`

可选参数. 默认值是 `0`.

- `intervalOrScheduler： number | SchedulerLike`

可选参数. 默认值是 `undefined`.

- `scheduler: SchedulerLike`

可选参数. 默认值是 `asyncScheduler`.

### Returns

`Observable<number>`。

## 重载

### 重载类型定义 1

创建一个可观察对象，该对象将等待指定的时间段或确切日期，然后再发出数字 0。

`timer(due: number | Date, scheduler?: SchedulerLike): Observable<0>`

### 参数：

- due number | Date

如果是数字，则在发射之前等待的时间量（以毫秒为单位）。如果是日期，则发送的确切时间。

- scheduler SchedulerLike

可选参数. 默认值是 `undefined`. 用于调度延迟的调度程序。默认为 asyncScheduler。

## 例子 1

等待 3 秒，然后启动另一个可观察的

您可能希望使用计时器将对可观察对象的订阅延迟设置的时间量。在这里，我们使用带有 concatMapTo 或 concatMap 的计时器，以便等待几秒钟并开始对源的订阅。

```typescript
import { of, timer, concatMap } from 'rxjs';

// This could be any observable
const source = of(1, 2, 3);

timer(3000)
  .pipe(concatMap(() => source))
  .subscribe(console.log);
```

## 例子 2

取所有值，直到下一分钟开始

使用日期作为第一次发射的触发器，您可以执行一些操作，比如等到午夜触发事件，或者在这种情况下，等到新的一分钟开始（选择这样示例就不会花费太长时间运行），以便停止观看流。利用采取 `takeUntil`。

```typescript
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

const result = source.pipe(
  takeUntil(timer(startOfNextMinute))
);

result.subscribe(console.log);
```

### 重载类型定义 2

`timer(startDue: number | Date, intervalDuration: number, scheduler?: SchedulerLike): Observable<number>`

## 例子 3

开始一个马上开始的间隔
由于间隔在开始之前等待经过的延迟，有时这并不理想。您可能需要立即开始一个间隔。计时器对此工作很好。在这里，我们有两个并排的，所以你可以看到它们的比较。

请注意，此可观察对象永远不会完成。

```ts
import { timer, interval } from 'rxjs';

timer(0, 1000).subscribe(n => console.log('timer', n));
interval(1000).subscribe(n => console.log('interval', n));
```
