type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true
    }
    return returnObject
}

// função sobre o preenchimento do menu na cor preta quando for clicada
