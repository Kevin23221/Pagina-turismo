
export default {
  basePath: 'https://github.com/Kevin23221/Pagina-turismo.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
