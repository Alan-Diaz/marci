
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21029, hash: '66a54f4565d04b4c8e622be850c9021ec3f6e8a509ca45ebd301f496c0d268cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10073, hash: '9b015d798c4a8b3ac8c90544098f41e009181eb2bfbaef3b3d303bd3e30849c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46802, hash: '44b33ebf10bfa8d5be00b1dfd4ef1fe29dca9bebfde4c6abffe9445d8c448142', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JE25WXDN.css': {size: 239026, hash: 'zTA75q9tgYQ', text: () => import('./assets-chunks/styles-JE25WXDN_css.mjs').then(m => m.default)}
  },
};
