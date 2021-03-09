//Ya esta disponible en node
const path = require('path');

module.exports = {
  //Elemento inicial de nuestra aplicacion
  entry: './src/index.js',

  // a donde enviamos lo que va preparar webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js']
  }
}
