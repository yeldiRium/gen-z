## Modules

<dl>
<dt><a href="#g_sync">g:sync</a></dt>
<dd><p>Working with or creating synchronous generators.</p>
</dd>
<dt><a href="#g_async">g:async</a></dt>
<dd><p>Working with or creating asynchronous generators. Often compatible with
node.js streams, but not guaranteed.</p>
</dd>
</dl>

<a name="g_sync"></a>

## g:sync
Working with or creating synchronous generators.


* [g:sync](#g_sync)
    * [.collect(sourceGenerator, [collection])](#g_sync.collect) ⇒ <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code>
    * [.collectInArray(sourceGenerator, [array])](#g_sync.collectInArray) ⇒ <code>Array.&lt;any&gt;</code>
    * [.collectInSet(sourceGenerator, [set])](#g_sync.collectInSet) ⇒ <code>Set.&lt;any&gt;</code>
    * [.forEach(callback, sourceGenerator)](#g_sync.forEach)
    * [.reduce(reducer, accumulator, sourceGenerator)](#g_sync.reduce) ⇒ <code>any</code>
    * [.acknowledgable(sourceGenerator, [onAcknowledge])](#g_sync.acknowledgable)
    * [.retryable(sourceGenerator)](#g_sync.retryable)
    * [.concat(sourceGenerator1, sourceGenerator2)](#g_sync.concat)
    * [.cycle(array)](#g_sync.cycle)
    * [.echo()](#g_sync.echo)
    * [.flatten(sourceGenerator)](#g_sync.flatten)
    * [.from(iterable)](#g_sync.from)
    * [.iterate(producer, start)](#g_sync.iterate)
    * [.range(start, [stop], [step])](#g_sync.range)
    * [.repeat(value)](#g_sync.repeat)
    * [.drop(n, sourceGenerator)](#g_sync.drop)
    * [.dropRepeats(sourceGenerator)](#g_sync.dropRepeats)
    * [.dropWhile(predicate, sourceGenerator)](#g_sync.dropWhile)
    * [.filter(predicate, sourceGenerator)](#g_sync.filter)
    * [.head(sourceGenerator)](#g_sync.head) ⇒ <code>any</code> \| <code>undefined</code>
    * [.tail(sourceGenerator)](#g_sync.tail)
    * [.take(n, sourceGenerator)](#g_sync.take)
    * [.takeWhile(predicate, sourceGenerator)](#g_sync.takeWhile)
    * [.find(predicate, sourceGenerator)](#g_sync.find) ⇒ <code>any</code> \| <code>undefined</code>
    * [.some(predicate, sourceGenerator)](#g_sync.some) ⇒ <code>boolean</code>
    * [.chain(f, sourceGenerator)](#g_sync.chain)
    * [.map(f, sourceGenerator)](#g_sync.map)
    * [.zip(sourceGenerator1, sourceGenerator2)](#g_sync.zip)
    * [.drop(n, sourceGenerator)](#g_sync.drop)
    * [.filter(predicate, sourceGenerator)](#g_sync.filter)
    * [.head(sourceGenerator)](#g_sync.head) ⇒ <code>any</code> \| <code>undefined</code>

<a name="g_sync.collect"></a>

### g:sync.collect(sourceGenerator, [collection]) ⇒ <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code>
Collect the values yielded by the `sourceGenerator` in the given collection
or in a new array.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 
| [collection] | <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code> | 

<a name="g_sync.collectInArray"></a>

### g:sync.collectInArray(sourceGenerator, [array]) ⇒ <code>Array.&lt;any&gt;</code>
Collect the values yielded by the `sourceGenerator` in a new or given array.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 
| [array] | <code>Array.&lt;any&gt;</code> | 

<a name="g_sync.collectInSet"></a>

### g:sync.collectInSet(sourceGenerator, [set]) ⇒ <code>Set.&lt;any&gt;</code>
Collect the values yielded by the `sourceGenerator` in a new or given set.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 
| [set] | <code>Set.&lt;any&gt;</code> | 

<a name="g_sync.forEach"></a>

### g:sync.forEach(callback, sourceGenerator)
Executes the `callback` for each value yielded by the `sourceGenerator`.

Each return value of the `callback` is passed to the next next-function call
on the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

**Example**  
```js
const generator = acknowledgable(eventsFromSomewhere(), acknowledgeEvent);
forEach(
  event => {
    try {
      sendEventSomewhere(event);

      // This acknowledges the event via acknowledgable above.
      return true;
    } catch {
      return false;
    }
  },
  generator
);
```
<a name="g_sync.reduce"></a>

### g:sync.reduce(reducer, accumulator, sourceGenerator) ⇒ <code>any</code>
Reduces the values yielded by `sourceGenerator` by repeatedly applying
`reducer` to an accumulator and the next value.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| reducer | <code>function</code> | 
| accumulator | <code>any</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.acknowledgable"></a>

### g:sync.acknowledgable(sourceGenerator, [onAcknowledge])
Makes a generator acknowledgable. The generator repeatedly yields each value
from the `sourceGenerator` until the value is explicitly acknowledged by
passing true to next().

This is basically the opposite of `g:sync.retryable`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 
| [onAcknowledge] | <code>function</code> | 

<a name="g_sync.retryable"></a>

### g:sync.retryable(sourceGenerator)
Makes a generator retryable. The generator will re-yield the previously
yielded value if true is passed to next().

This is basically the opposite of `g:sync.acknowledgable`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.concat"></a>

### g:sync.concat(sourceGenerator1, sourceGenerator2)
Concatenates two generators by first yielding all the values from
`sourceGenerator1`, then all the values from `sourceGenerator2`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator1 | <code>Generator</code> | 
| sourceGenerator2 | <code>Generator</code> | 

<a name="g_sync.cycle"></a>

### g:sync.cycle(array)
Cycles through the given `array`, yielding its values repeatedly.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;any&gt;</code> | 

<a name="g_sync.echo"></a>

### g:sync.echo()
Yields the value passed to next and thus echos the values passed into it.

The first yielded value is always undefined and the first value passod to
next() is ignored. This is due to how generators work.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  
<a name="g_sync.flatten"></a>

### g:sync.flatten(sourceGenerator)
Recursively flattens generators and yields their values
in depth-first order.

Should work with anything implementing the `Iterator` interface.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.from"></a>

### g:sync.from(iterable)
Creates a generator from an iterable.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| iterable | <code>Iterable</code> | 

<a name="g_sync.iterate"></a>

### g:sync.iterate(producer, start)
Yields infinite values by repeatedly applying `producer` to `start`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| producer | <code>function</code> | 
| start | <code>any</code> | 

<a name="g_sync.range"></a>

### g:sync.range(start, [stop], [step])
Yields values from `start` to `stop` in steps of length `step`.

If only `start` is given, it is treated as `stop` and `start = 0` is assumed.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type | Default |
| --- | --- | --- |
| start | <code>number</code> |  | 
| [stop] | <code>number</code> |  | 
| [step] | <code>number</code> | <code>1</code> | 

<a name="g_sync.repeat"></a>

### g:sync.repeat(value)
Yields the given value repeatedly. If a function is given, it is called on
repeat. It does not cache the function's return value.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="g_sync.drop"></a>

### g:sync.drop(n, sourceGenerator)
Drop the first `n` values from the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.dropRepeats"></a>

### g:sync.dropRepeats(sourceGenerator)
Drops repeating values from the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.dropWhile"></a>

### g:sync.dropWhile(predicate, sourceGenerator)
Drop values from the beginning of the `sourceGenerator` as long as the values
match the `predicate`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.filter"></a>

### g:sync.filter(predicate, sourceGenerator)
Filters the `sourceGenerator` by yielding only values from it matching
the `predicate`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.head"></a>

### g:sync.head(sourceGenerator) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first value from the `sourceGenerator` or undefined, if
`sourceGenerator` does not yield anything.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.tail"></a>

### g:sync.tail(sourceGenerator)
Drops the first value from the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.take"></a>

### g:sync.take(n, sourceGenerator)
Yields the first `n` values of the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.takeWhile"></a>

### g:sync.takeWhile(predicate, sourceGenerator)
Yields values from the `sourceGenerator` as long as they match the `predicate`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.find"></a>

### g:sync.find(predicate, sourceGenerator) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first value in the `sourceGenerator` that matches the
`predicate`. Returns undefined, if no value matches and the `sourceGenerator`
is finite.

Careful: If the `sourceGenerator` is infinite and no value matches, this will
block indefinitely.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.some"></a>

### g:sync.some(predicate, sourceGenerator) ⇒ <code>boolean</code>
Returns true, if any of the value from the `sourceGenerator` matches
the `predicate`. Returns false, if none do and the `sourceGenerator` is
finite.

Careful: If the `sourceGenerator` is infinite and no value matches the
`predicate`, this will block indefinitely.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.chain"></a>

### g:sync.chain(f, sourceGenerator)
Applies `f` to the values of the `sourceGenerator` and concatenates resulting
generators.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.map"></a>

### g:sync.map(f, sourceGenerator)
Applies `f` to the values yielded by the `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.zip"></a>

### g:sync.zip(sourceGenerator1, sourceGenerator2)
Zips the values from `sourceGenerator1` and `sourceGenerator2` together.
Yields arrays with two values each.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator1 | <code>Generator</code> | 
| sourceGenerator2 | <code>Generator</code> | 

<a name="g_sync.drop"></a>

### g:sync.drop(n, sourceGenerator)
Drop the first `n` values from the asynchronous `sourceGenerator`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_sync.filter"></a>

### g:sync.filter(predicate, sourceGenerator)
Filters the asynchronous `sourceGenerator` by yielding only values from it
matching the (optionally asynchronous) `predicate`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.head"></a>

### g:sync.head(sourceGenerator) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first value from the asynchronous `sourceGenerator` or undefined,
if the `sourceGenerator` does not yield anything.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async"></a>

## g:async
Working with or creating asynchronous generators. Often compatible with
node.js streams, but not guaranteed.


* [g:async](#g_async)
    * [.collect(sourceGenerator, [collection])](#g_async.collect) ⇒ <code>Promise.&lt;(Set.&lt;any&gt;\|Array.&lt;any&gt;)&gt;</code>
    * [.collectInArray(sourceGenerator, array)](#g_async.collectInArray) ⇒ <code>Promise.&lt;Array.&lt;any&gt;&gt;</code>
    * [.collectInSet(gen, set)](#g_async.collectInSet) ⇒ <code>Promise.&lt;Set.&lt;any&gt;&gt;</code>
    * [.forEach(callback, sourceGenerator)](#g_async.forEach)
    * [.reduce(reducer, accumulator, sourceGenerator)](#g_async.reduce) ⇒ <code>any</code>
    * [.acknowledgable(sourceGenerator, [onAcknowledge])](#g_async.acknowledgable)
    * [.retryable(sourceGenerator)](#g_async.retryable)
    * [.concat(sourceGenerator1, sourceGenerator2)](#g_async.concat)
    * [.flatten(sourceGenerator)](#g_async.flatten)
    * [.from(iterable)](#g_async.from)
    * [.iterate(producer, start)](#g_async.iterate)
    * [.repeat(value)](#g_async.repeat)
    * [.dropRepeats(sourceGenerator)](#g_async.dropRepeats)
    * [.dropWhile(predicate, sourceGenerator)](#g_async.dropWhile)
    * [.tail(sourceGenerator)](#g_async.tail)
    * [.take(n, sourceGenerator)](#g_async.take)
    * [.takeWhile(predicate, sourceGenerator)](#g_async.takeWhile)
    * [.find(predicate, sourceGenerator)](#g_async.find) ⇒ <code>any</code> \| <code>undefined</code>
    * [.some(predicate, sourceGenerator)](#g_async.some) ⇒ <code>boolean</code>
    * [.chain(f, sourceGenerator)](#g_async.chain)
    * [.map(f, sourceGenerator)](#g_async.map)
    * [.zip(sourceGenerator1, sourceGenerator2)](#g_async.zip)

<a name="g_async.collect"></a>

### g.collect(sourceGenerator, [collection]) ⇒ <code>Promise.&lt;(Set.&lt;any&gt;\|Array.&lt;any&gt;)&gt;</code>
Collects the values yielded by the asynchronous `sourceGenerator` in a given
collection or in a new array.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncIterator</code> | 
| [collection] | <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code> | 

<a name="g_async.collectInArray"></a>

### g.collectInArray(sourceGenerator, array) ⇒ <code>Promise.&lt;Array.&lt;any&gt;&gt;</code>
Collects the values yielded by the asynchronous `sourceGenerator` in a new or
the given array.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncIterator</code> | 
| array | <code>Array.&lt;any&gt;</code> | 

<a name="g_async.collectInSet"></a>

### g.collectInSet(gen, set) ⇒ <code>Promise.&lt;Set.&lt;any&gt;&gt;</code>
Collects the values yielded by the asynchronous `sourceGenerator` in a new or
the given set.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| gen | <code>AsyncIterator</code> | 
| set | <code>Set.&lt;any&gt;</code> | 

<a name="g_async.forEach"></a>

### g.forEach(callback, sourceGenerator)
Executes the (optionally asynchronous) `callback` for each value
asynchronously yielded by the `sourceGenerator`.

Each resolved value of the `callback` is passed to the next next-function
call on the `sourceGenerator`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

**Example**  
```js
const generator = acknowledgable(eventsFromSomewhere(), acknowledgeEvent);
await forEach(
  async event => {
    try {
      await sendEventSomewhere(event);

      // This acknowledges the event via acknowledgable above.
      return true;
    } catch {
      return false;
    }
  },
  generator
);
```
<a name="g_async.reduce"></a>

### g.reduce(reducer, accumulator, sourceGenerator) ⇒ <code>any</code>
Reduces the values asynchronously yielded by the `sourceGenerator` by
repeatedly applying (the optionally asynchronous) `reducer` to an accumulator
and the next value.

**Kind**: static method of [<code>g:async</code>](#g_async)  
**Asyne**:   

| Param | Type |
| --- | --- |
| reducer | <code>function</code> | 
| accumulator | <code>any</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.acknowledgable"></a>

### g.acknowledgable(sourceGenerator, [onAcknowledge])
Makes an asynchronous generator acknowledgable. The resulting generator
repeatedly yields each value from the `sourceGenerator` until the value is
explicitly acknowledged by passing true to next().

This is basically the opposite of `g:async.retryable`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 
| [onAcknowledge] | <code>function</code> | 

<a name="g_async.retryable"></a>

### g.retryable(sourceGenerator)
Makes an asynchronous generator retryable. The resulting generator will
re-yield the previously yielded value if true is passed to next().

This is basically the opposite of `g:async.acknowledgable`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.concat"></a>

### g.concat(sourceGenerator1, sourceGenerator2)
Concatenates two asynchronous generators by first yielding all the values
from `sourceGenerator1`, then all the values from `sourceGenerator2`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator1 | <code>AsyncGenerator</code> | 
| sourceGenerator2 | <code>AsyncGenerator</code> | 

<a name="g_async.flatten"></a>

### g.flatten(sourceGenerator)
Recursively flattens asynchronous and synchronous generators and yields their
values in depth-first order.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.from"></a>

### g.from(iterable)
Creates an asynchronous generator from a given iterable. Any promises in the
iterable will be flattened in the generator.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| iterable | <code>Iterable</code> | 

<a name="g_async.iterate"></a>

### g.iterate(producer, start)
Yields infinite values by repeatedly applying the optionally asynchronous
`producer` to `start`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| producer | <code>function</code> | 
| start | <code>any</code> | 

<a name="g_async.repeat"></a>

### g.repeat(value)
Yields the given value repeatedly. If an asynchronous function is given, it
is called on repeat. It does not cache the function's resolve value.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="g_async.dropRepeats"></a>

### g.dropRepeats(sourceGenerator)
Drops repeating values from the asynchronous `sourceGenerator`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.dropWhile"></a>

### g.dropWhile(predicate, sourceGenerator)
Drop values from the beginning of the asynchronous `sourceGenerator` as long
as the values match the (optionally asynchronous) `predicate`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.tail"></a>

### g.tail(sourceGenerator)
Drops the first value from the asynchronous `sourceGenerator`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.take"></a>

### g.take(n, sourceGenerator)
Yields the first `n` values of the asynchronous `sourceGenerator`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.takeWhile"></a>

### g.takeWhile(predicate, sourceGenerator)
Yields values from the asynchronous `sourceGenerator` as long as they match
the (optionally asynchronous) `predicate`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.find"></a>

### g.find(predicate, sourceGenerator) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first value in the asynchronous `sourceGenerator` that matches
the (optionally asynchronous) `predicate`. Returns undefined, if no value matches and the `sourceGenerator`
is finite.

Careful: If the `sourceGenerator` is infinite and no value matches, this will
never resolve.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.some"></a>

### g.some(predicate, sourceGenerator) ⇒ <code>boolean</code>
Returns true, if any of the value from the asynchronous `sourceGenerator`
matches the (optionally asynchronous) `predicate`. Returns false, if none
do and the `sourceGenerator` is finite.

Careful: If the `sourceGenerator` is infinite and no value matches the
`predicate`, this will never resolve.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.chain"></a>

### g.chain(f, sourceGenerator)
Applies (the optionally asynchronous) `f` to the values of the asynchronous
`sourceGenerator` and concatenates resulting (asynchronous) generators.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.map"></a>

### g.map(f, sourceGenerator)
Applies (the optionally asynchronous) `f` to the values yielded by the
asynchronous `sourceGenerator`.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| sourceGenerator | <code>AsyncGenerator</code> | 

<a name="g_async.zip"></a>

### g.zip(sourceGenerator1, sourceGenerator2)
Zips the values from asynchronous generators `sourceGenerator1` and
`sourceGenerator2` together.
Yields arrays with two values each.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| sourceGenerator1 | <code>AsyncGenerator</code> | 
| sourceGenerator2 | <code>AsyncGenerator</code> | 

