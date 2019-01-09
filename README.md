## cls-str [![cls-str](https://img.shields.io/npm/v/cls-str.svg)](https://npmjs.org/cls-str)

> A super tiny class serializer

### Installation

```bash
$ npm install cls-str
```

### Example

```js
import cls from 'cls-str';

cls({ foo:true, bar:false, baz: isTrue() });
//=> 'foo baz'

cls('form-field', { success:  1 > 0 }, [ 'color-whilte', 'bg-black' ], 'dup', 'dup', null);

//=> 'form-field success color-whilte bg-black dup'
```

```js
import React from 'react';
import cls from 'cls-str';

const TodoItem = ({ text, isDone, disabled }) => (
  <li className={ cls({ item:true, completed:isDone, disabled }) }> 
    <input type="checkbox" disabled={ disabled } checked={ isDone } />
    <label>{ text }</label>
  </li>
);
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---