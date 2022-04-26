const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = name => cats.push(name)

const destructivelyPrependCat = name => cats.unshift(name)

const destructivelyRemoveFirstCat = () => cats.shift()

const destructivelyRemoveLastCat = () => cats.pop()

function appendCat(name) {
    let moreCats = [...cats, name]
    return moreCats
}

function prependCat(name) {
    let addACat = [name, ...cats]
    return addACat
}

const removeLastCat = () => cats.slice(0, -1)

const removeFirstCat = () => cats.slice(1)