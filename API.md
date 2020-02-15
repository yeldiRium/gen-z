## Functions

<dl>
<dt><a href="#collect">collect(gen, [collection])</a> ⇒ <code>Set.&lt;any&gt;</code> | <code>Array.&lt;any&gt;</code></dt>
<dd><p>Collect the values generated by <code>gen</code> into a given collection or into a new array.</p>
</dd>
<dt><a href="#collectInArray">collectInArray(gen, [array])</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Collect the values generated by <code>gen</code> into a new or given array.</p>
</dd>
<dt><a href="#collectInSet">collectInSet(gen, [set])</a> ⇒ <code>Set.&lt;any&gt;</code></dt>
<dd><p>Collect the values generated by <code>gen</code> into a new or given set.</p>
</dd>
<dt><a href="#reduce">reduce(f, acc, gen)</a> ⇒ <code>any</code></dt>
<dd><p>Reduces the values from <code>gen</code> by repeatedly applying <code>f</code> to an accumulator and the next value.</p>
</dd>
<dt><a href="#concat">concat(gen1, gen2)</a></dt>
<dd><p>Concatenates two generators.</p>
</dd>
<dt><a href="#cycle">cycle(values)</a></dt>
<dd><p>Cycles infinitely through the given <code>values</code>.</p>
</dd>
<dt><a href="#flatten">flatten(gen)</a></dt>
<dd><p>Recursively flattens generators and other iterators.</p>
</dd>
<dt><a href="#from">from(iterable)</a></dt>
<dd><p>Creates a generator from an iterable.</p>
</dd>
<dt><a href="#iterate">iterate(producer, start)</a></dt>
<dd><p>Generate infinite values by repeatedly applying <code>producer</code> to <code>start</code>.</p>
</dd>
<dt><a href="#range">range(start, [stop], [step])</a></dt>
<dd><p>Generates values from <code>start</code> to <code>stop</code> in steps of length <code>step</code>.</p>
<p>If only <code>start</code> is given, it is treated as <code>stop</code> and <code>start = 0</code> is assumed.</p>
</dd>
<dt><a href="#repeat">repeat(value)</a></dt>
<dd><p>Repeats the given value infinitely.</p>
</dd>
<dt><a href="#drop">drop(count, gen)</a></dt>
<dd><p>Drop the first <code>count</code> elements from <code>gen</code>.</p>
</dd>
<dt><a href="#dropRepeats">dropRepeats(gen)</a></dt>
<dd><p>Drops repeating elements from <code>gen</code>.</p>
</dd>
<dt><a href="#dropWhile">dropWhile(predicate, gen)</a></dt>
<dd><p>Drop elements from the beginning of <code>gen</code> as long as <code>predicate</code> matches these elements.</p>
</dd>
<dt><a href="#filter">filter(predicate, gen)</a></dt>
<dd><p>Filters <code>gen</code> to contain only elements matching <code>predicate</code>.</p>
</dd>
<dt><a href="#head">head(gen)</a> ⇒ <code>any</code> | <code>undefined</code></dt>
<dd><p>Returns the first element from <code>gen</code> or undefined, if <code>gen</code> does not generate anything.</p>
</dd>
<dt><a href="#tail">tail(gen)</a></dt>
<dd><p>Returns <code>gen</code> without its first element.</p>
</dd>
<dt><a href="#take">take(count, gen)</a></dt>
<dd><p>Take the first <code>count</code> elements of <code>gen</code>.</p>
</dd>
<dt><a href="#takeWhile">takeWhile(predicate, gen)</a></dt>
<dd><p>Take elements from <code>gen</code> as long as they match <code>predicate</code>.</p>
</dd>
<dt><a href="#find">find(predicate, gen)</a> ⇒ <code>any</code> | <code>undefined</code></dt>
<dd><p>Returns the first element in <code>gen</code> that matches <code>predicate</code>. Returns undefined, if no element matches and <code>gen</code> is
finite.</p>
</dd>
<dt><a href="#some">some(predicate, gen)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true, if any of the elements from <code>gen</code> matches <code>predicate</code>. Returns false, if none do and <code>gen</code> is finite.</p>
</dd>
<dt><a href="#chain">chain(f, gen)</a></dt>
<dd><p>Applies <code>f</code> to the elements of <code>gen</code> and concatenates resulting generators.</p>
</dd>
<dt><a href="#map">map(f, gen)</a></dt>
<dd><p>Map the values from <code>gen</code> by applying <code>f</code>.</p>
</dd>
<dt><a href="#zip">zip(gen1, gen2)</a></dt>
<dd><p>Zips the elements from <code>gen1</code> and <code>gen2</code> together.</p>
</dd>
</dl>

<a name="collect"></a>

## collect(gen, [collection]) ⇒ <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code>
Collect the values generated by `gen` into a given collection or into a new array.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 
| [collection] | <code>Set.&lt;any&gt;</code> \| <code>Array.&lt;any&gt;</code> | 

<a name="collectInArray"></a>

## collectInArray(gen, [array]) ⇒ <code>Array.&lt;any&gt;</code>
Collect the values generated by `gen` into a new or given array.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 
| [array] | <code>Array.&lt;any&gt;</code> | 

<a name="collectInSet"></a>

## collectInSet(gen, [set]) ⇒ <code>Set.&lt;any&gt;</code>
Collect the values generated by `gen` into a new or given set.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 
| [set] | <code>Set.&lt;any&gt;</code> | 

<a name="reduce"></a>

## reduce(f, acc, gen) ⇒ <code>any</code>
Reduces the values from `gen` by repeatedly applying `f` to an accumulator and the next value.

**Kind**: global function  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| acc | <code>any</code> | 
| gen | <code>Generator</code> | 

<a name="concat"></a>

## concat(gen1, gen2)
Concatenates two generators.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen1 | <code>Generator</code> | 
| gen2 | <code>Generator</code> | 

<a name="cycle"></a>

## cycle(values)
Cycles infinitely through the given `values`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| values | <code>Array.&lt;any&gt;</code> | 

<a name="flatten"></a>

## flatten(gen)
Recursively flattens generators and other iterators.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 

<a name="from"></a>

## from(iterable)
Creates a generator from an iterable.

**Kind**: global function  

| Param | Type |
| --- | --- |
| iterable | <code>Iterable</code> | 

<a name="iterate"></a>

## iterate(producer, start)
Generate infinite values by repeatedly applying `producer` to `start`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| producer | <code>function</code> | 
| start | <code>any</code> | 

<a name="range"></a>

## range(start, [stop], [step])
Generates values from `start` to `stop` in steps of length `step`.

If only `start` is given, it is treated as `stop` and `start = 0` is assumed.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| start | <code>number</code> |  | 
| [stop] | <code>number</code> |  | 
| [step] | <code>number</code> | <code>1</code> | 

<a name="repeat"></a>

## repeat(value)
Repeats the given value infinitely.

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="drop"></a>

## drop(count, gen)
Drop the first `count` elements from `gen`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| count | <code>number</code> | 
| gen | <code>Generator</code> | 

<a name="dropRepeats"></a>

## dropRepeats(gen)
Drops repeating elements from `gen`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 

<a name="dropWhile"></a>

## dropWhile(predicate, gen)
Drop elements from the beginning of `gen` as long as `predicate` matches these elements.

**Kind**: global function  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="filter"></a>

## filter(predicate, gen)
Filters `gen` to contain only elements matching `predicate`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="head"></a>

## head(gen) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first element from `gen` or undefined, if `gen` does not generate anything.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 

<a name="tail"></a>

## tail(gen)
Returns `gen` without its first element.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen | <code>Generator</code> | 

<a name="take"></a>

## take(count, gen)
Take the first `count` elements of `gen`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| count | <code>number</code> | 
| gen | <code>Generator</code> | 

<a name="takeWhile"></a>

## takeWhile(predicate, gen)
Take elements from `gen` as long as they match `predicate`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="find"></a>

## find(predicate, gen) ⇒ <code>any</code> \| <code>undefined</code>
Returns the first element in `gen` that matches `predicate`. Returns undefined, if no element matches and `gen` is
finite.

**Kind**: global function  

| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="some"></a>

## some(predicate, gen) ⇒ <code>boolean</code>
Returns true, if any of the elements from `gen` matches `predicate`. Returns false, if none do and `gen` is finite.

**Kind**: global function  

| Param |
| --- |
| predicate | 
| gen | 

<a name="chain"></a>

## chain(f, gen)
Applies `f` to the elements of `gen` and concatenates resulting generators.

**Kind**: global function  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="map"></a>

## map(f, gen)
Map the values from `gen` by applying `f`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 
| gen | <code>Generator</code> | 

<a name="zip"></a>

## zip(gen1, gen2)
Zips the elements from `gen1` and `gen2` together.

**Kind**: global function  

| Param | Type |
| --- | --- |
| gen1 | <code>Generator</code> | 
| gen2 | <code>Generator</code> | 
