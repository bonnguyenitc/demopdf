// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBLHKXCo6DVEmSayKpot_CUJMWx3VmAKhM',
    authDomain: 'pdfstore-e096a.firebaseapp.com',
    databaseURL: 'https://pdfstore-e096a.firebaseio.com',
    projectId: 'pdfstore-e096a',
    storageBucket: 'pdfstore-e096a.appspot.com',
    messagingSenderId: '376228202285'
  }
};
