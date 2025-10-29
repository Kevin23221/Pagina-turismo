
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Kevin23221/Pagina-turismo.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Kevin23221/Pagina-turismo.git"
  },
  {
    "renderMode": 2,
    "route": "/Kevin23221/Pagina-turismo.git/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/Kevin23221/Pagina-turismo.git/producto"
  },
  {
    "renderMode": 2,
    "route": "/Kevin23221/Pagina-turismo.git/contacto"
  },
  {
    "renderMode": 2,
    "route": "/Kevin23221/Pagina-turismo.git/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 968, hash: '31335c0201ff266b147c0e12ce142d8185262a76994db37ccefc524ab6bf08e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1481, hash: 'a8df6e6f90001d9e395acd114e14c7bf2d2e5588e84b2b58858f554a4031e408', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'producto/index.html': {size: 4366, hash: '6a1c7ab38001b68ee874ea49da755ac6e447bc905ec8845a03a52c63d8761937', text: () => import('./assets-chunks/producto_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 8431, hash: '9d83dfea2c929c7d0de1d727c12d6f9d8011d0db14e2b75d9e96afd663a3ffa6', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11548, hash: 'b462293cc415b5c013c09aa6c5b2d7ea4ef49466c0dc994b38ca2dbfad01c4ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 7964, hash: '0e827cf44f624d3a31d8e24c431edbe827750009ca3c5377b01a3efcb61c3430', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
