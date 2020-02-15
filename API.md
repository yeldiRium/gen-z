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
    * [.reduce(reducer, accumulator, sourceGenerator)](#g_sync.reduce) ⇒ <code>any</code>
    * [.acknowledgable(sourceGenerator)](#g_sync.acknowledgable)
    * [.retryable(sourceGenerator)](#g_sync.retryable)
    * [.concat(sourceGenerator1, sourceGenerator2)](#g_sync.concat)
    * [.cycle(array)](#g_sync.cycle)
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

### g:sync.acknowledgable(sourceGenerator)
Makes a generator acknowledgable. The generator repeatedly yields each value
from the `sourceGenerator` until the value is explicitly acknowledged by
passing true to next().

This is basically the opposite of `g:sync.retryable`.

**Kind**: static method of [<code>g:sync</code>](#g_sync)  

| Param | Type |
| --- | --- |
| sourceGenerator | <code>Generator</code> | 

<a name="g_sync.retryable"></a>

### g:sync.retryable(sourceGenerator)
Makes a generator retryable. The generator will re-yield the previous value
if true is passed to next().

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
Yields the given value repeatedly.

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

<a name="g_async"></a>

## g:async
Working with or creating asynchronous generators. Often compatible with
node.js streams, but not guaranteed.


* [g:async](#g_async)
    * [.collect(sourceGenerator, [collection])](#g_async.collect) ⇒ <code>Promise.&lt;(Set.&lt;any&gt;\|Array.&lt;any&gt;)&gt;</code>
    * [.collectInArray(sourceGenerator, array)](#g_async.collectInArray) ⇒ <code>Promise.&lt;Array.&lt;any&gt;&gt;</code>
    * [.collectInSet(gen, set)](#g_async.collectInSet) ⇒ <code>Promise.&lt;Set.&lt;any&gt;&gt;</code>
    * [.from(iterable)](#g_async.from)

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

<a name="g_async.from"></a>

### g.from(iterable)
Creates an asynchronous generator from a given iterable. Any promises in the
iterable will be flattened in the generator.

**Kind**: static method of [<code>g:async</code>](#g_async)  

| Param | Type |
| --- | --- |
| iterable | <code>Iterable</code> | 

