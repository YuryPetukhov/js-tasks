
//  task is return top 10 classes have faced in DOM
const getClasses = (nodes) => {
    let cacheClasses = {}

     nodes.forEach(node => {
         const classPropArr = node?.classList
         classPropArr?.forEach(className => {
             cacheClasses[className] ? cacheClasses[className] += 1 : cacheClasses[className] = 1
         })
     })
    return cacheClasses
}

const findAllNodes = () => {
    let nodes = [];
    const domElements =  [...document.body.children];

    const goThrowDOM = (element) => {
        const children = [...element.children]
        nodes.push(element)
        if(children.length) {
            children.forEach(child => {
                nodes.push(child)
                if(child.children) {
                    goThrowDOM(child)
                }

            })
        }
    }

    domElements.forEach(el => {
        goThrowDOM(el)
    })

    return nodes
}



const convertClassesObj = (obj) => Object.fromEntries(Object.entries(obj).sort(([key, value], [nextKey, nextValue]) =>  nextValue - value).splice(0,10))

const counterDomClasses = () => {
  const nodes = findAllNodes()
  const classes = getClasses(nodes)

  return convertClassesObj(classes)
}



 for (let k in counterDomClasses()) {
     console.log(k,counterDomClasses()[k])
 }