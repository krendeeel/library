const initialState = {
    bookInfo: {
        name: 'Звезд не хватит на всех. День горящей брони',
        author: 'Макс Глебов',
        city: 'Тула',
        genre: 'Приключения',
        description:'Генерал-майор Вершинин продолжает свой путь через Серый Периметр, пытаясь найти способ вернуться на Землю, причем вернуться не с пустыми руками. Сам того не желая, он всё больше нарушает баланс сил, сложившийся на окраине галактики, и обращает на себя пристальное внимание людей и чужих, считающих себя хозяевами этого сумеречного пространства, где жестокость и цинизм являются нормой жизни. Необычные способности Вершинина не остались незамеченными, и, естественно, немедленно появились желающие поставить их себе на службу.',
        image: 'https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_415/64405246-maks-alekseevich-glebov-zvezd-ne-hvatit-na-vseh-den-goryaschey-broni.jpg',
        reservation: false
    }
}


export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_ERRORS': 
            return {...state, errors: action.errors}
        case 'SET_USER_INFO': 
            return {...state, user: {...state.user, firstName: action.firstName, lastName: action.lastName}}
        case 'SET_AUTH': 
            return {...state, auth: action.auth}
        case 'SET_PRELOADER': 
            return {...state, preloader: action.preloader}
        default:
            return state;
    }
}