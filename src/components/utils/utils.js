import Cookies from 'universal-cookie';
export const createPages = (pages, pagesCount, currentPage) => {
    if(pagesCount > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-4; i <= currentPage+4; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}
export const filtersName = [
    {
        id: 0,
        name: 'Жанр',
        options: [
            {
                id: 0,
                value: 'adventures',
                name: 'Приключения'
            },
            {
                id: 1,
                value: 'fiction',
                name: 'Фантастикa'
            },
            {
                id: 2,
                value: 'novel',
                name: 'Роман'
            },
            {
                id: 3,
                value: 'detective',
                name: 'Детектив'
            },
            {
                id: 4,
                value: 'scientific',
                name: 'Научный'
            }
            
        ]
    },
    {
        id: 1,
        name: 'Авторы',
        options: [
            {
                id: 0,
                value: 'russian',
                name: 'Российские'
            },
            {
                id: 1,
                value: 'foreign',
                name: 'Зарубежные'
            },
        ]
    },
    {
        id: 2,
        name: 'Город',
        options: [
            {
                id: 0,
                value: 'tula',
                name: 'Тула'
            },
            {
                id: 1,
                value: 'orel',
                name: 'Орел'
            },
            {
                id: 2,
                value: 'moscow',
                name: 'Москва'
            }
        ]
    }

    
]

export const cookies = new Cookies();
