const path = require('path');

module.exports = {
  entry: {
    swap: './Cadeau/js/swap.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie principal
    filename: '[name]/js/[name].bundle.js', // Chemin de sortie pour les fichiers JavaScript
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};