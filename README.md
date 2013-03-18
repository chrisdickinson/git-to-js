# git-to-js

given a numerical git object type and a buffer,
produce a (humane!) javascript object.

```javascript

var toJS = require('git-to-js')

toJS(1, new Buffer(...)) -> Commit object
toJS(2, new Buffer(...)) -> Tree object
toJS(3, new Buffer(...)) -> Blob object
toJS(4, new Buffer(...)) -> Tag object

```

## API

#### toJS(type number, buffer) -> Commit | Tree | Blob | Tag

given type and buffer, produce a JS object.

#### toJS.blob(...) -> Blob

blob constructor. see [git-object-blob](http://npm.im/git-object-blob).

#### toJS.commit(...) -> Commit

commit constructor. see [git-object-commit](http://npm.im/git-object-commit).

#### toJS.tree(...) -> Tree

tree constructor. see [git-object-tree](http://npm.im/git-object-tree).

#### toJS.tag(...) -> Tag

tag constructor. see [git-object-tag](http://npm.im/git-object-tag).

## License

MIT
