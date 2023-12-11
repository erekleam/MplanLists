export const environment = {
    production: true,
    apiUrl: 'https://cargo.railway.ge/spaapi/api',
    url: 'cargo.railway.ge/spaapi',

    //local

   //cargoUrl: 'http://localhost:3080',

    //test

     //cargoUrl: 'https://cargo.railway.ge/', 

     cargoUrl: () => {
        const host = sessionStorage.getItem('host');
        if (!!host) {
            if (host === '172.16.0.44' || host === '172.28.28.22') {
                return 'https://' + host + ':2003';
            }
            if (host === 'shipping') {
                return 'http://' + host + ':2003';
            }
            if (host === 'shipping.railway.ge') {
                return 'https://' + host;
            }
        }
        // real
        return 'https://cargo.railway.ge';
    }
};
