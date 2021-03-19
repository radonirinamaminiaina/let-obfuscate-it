import incstr from 'incstr'

// region CSS Scope Minify
const createUniqueIdGenerator = () => {
  const index = {}

  const generateNextId = incstr.idGenerator({
    alphabet: 'abcdefghijklmnopqrstuvwxyz0123456789_-',
  })

  return (name) => {
    if (index[name]) {
      return index[name]
    }

    let nextId

    do {
      // Class name cannot start with a number.
      nextId = generateNextId()
    } while (/^[0-9_-]/.test(nextId))

    index[name] = generateNextId()
    // console.log(`${name} has id = ${index[name]}`);

    return index[name]
  }
}

const idLocal = createUniqueIdGenerator()
const idComponent = createUniqueIdGenerator()
const generateScopedName = (localName, resourcePath) => {
  const componentName = resourcePath.split('/').slice(-2).join('/')
  return idComponent(componentName) + idLocal(localName)
}

const getLocalIdent = (context, _localIdentName, localName) =>
  generateScopedName(localName, context.resourcePath)

export default getLocalIdent
