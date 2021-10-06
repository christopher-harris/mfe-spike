import {loadRemoteEntry} from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'dashboard')
])
    .catch(err => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch(err => console.error(err));