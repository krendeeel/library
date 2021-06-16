const baseUrl = 'http://localhost:5000/';

export const api = (url, method, data) => {
    return new Promise ((resolve, reject) => {
        fetch(`${baseUrl}${url}`, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status < 400){
                return response.json();
            }else{
                throw response;
            }
        })
        .then(data => {
            resolve(data);
        })
        .catch(response => {
            try {
                response.json().then(error => {
                    reject(error);
                });
            } catch (error) {
                alert('Нет доступа к серверу!!!')
            }
           
        });
    });
}