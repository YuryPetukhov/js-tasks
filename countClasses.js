
//  task is return top 10 classes have faced in DOM
const countClasses = () => {
    let cacheClasses = {}

    return (element) => {

        const classPropArr = element?.classList
        classPropArr?.forEach(className => {
            cacheClasses[className] ? cacheClasses[className] += 1 : cacheClasses[className] = 1
        })

        if(!element) return cacheClasses
    }

}

const counter = countClasses()

const getElementChild = (element) => {

    const children = [...element.children]
    counter(element)
    if(children.length) {
        children.forEach(child => {
            counter(child)

            if(child.children) {
                getElementChild(child)
            }
            
        })
    }
}


const counterDomClasses = () => {
    const domElements =  [...document.body.children];
    domElements.forEach(el => {
        getElementChild(el)
    })

    return Object.entries(count()).sort(([key, value], [nextKey, nextValue]) =>  nextValue - value).splice(0,10)
}



console.log(counterDomClasses())