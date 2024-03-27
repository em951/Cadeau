const path = require('path');

module.exports = {
  entry: {
    accueil: './accueil.html', // Page principale
    swap: './swap.html', // Autre page
    main: './js/swap.js', // Fichier JavaScript principal
    styles: './assets/css/swap.css', // Fichier CSS principal
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Répertoire de sortie principal
    filename: '[name]/js/[name].bundle.js', // Chemin de sortie pour les fichiers JavaScript
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loader pour les fichiers CSS
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
