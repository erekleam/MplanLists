// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'https://localhost:7127/api',
    url: 'localhost:7127',

    //local
   // cargoUrl: 'http://localhost:3080', 
   
    //test

    //https://172.28.28.22:2003',
    cargoUrl: () => {
        // const host = sessionStorage.getItem('host');
        // if (!!host) {
        //     if (host === '172.16.0.44' || host === '172.28.28.22') {
        //         return 'https://' + host + ':2003';
        //     }
        //     if (host === 'shipping') {
        //         return 'http://' + host + ':2003';
        //     }
        //     if (host === 'shipping.railway.ge') {
        //         return 'https://' + host;
        //     }
        //     if (host === 'localhost') {
        //         return 'http://' + host + ':3080';
        //     }
        // }
        // local
        return 'http://localhost:3080';
    }



};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
