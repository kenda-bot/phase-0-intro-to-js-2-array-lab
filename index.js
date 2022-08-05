const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (cat)=>{
    return cats.push(cat)
}
const destructivelyPrependCat = (cat)=>{
    return cats.unshift(cat)
}
const destructivelyRemoveFirstCat = (cat)=>{
    return cats.shift(cat)
}
const destructivelyRemoveLastCat = (cat)=>{
    return cats.pop(cat)
}
const appendCat = (cat)=>{
    return [...cats, cat]
}
const prependCat = (cat)=>{
    return [cat, ...cats]
}
const  removeLastCat = (cat)=>{
    return cats.slice(0,-1)
}
const removeFirstCat = (cat)=>{
return cats.slice(1)
}