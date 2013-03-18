var blob = require('git-object-blob')
  , commit = require('git-object-commit')
  , tag = require('git-object-tag')
  , tree = require('git-object-tree')

module.exports = to_js

to_js.blob = blob.create
to_js.tree = tree.create
to_js.tag = tag.create
to_js.commit = commit.create

function to_js(type, buf) {
  switch(type) {
    case 1: return commit.read(buf)
    case 2: return tree.read(buf)
    case 3: return blob.read(buf)
    case 4: return tag.read(buf)
  }
  throw new Error('unknown type: '+type)
}
