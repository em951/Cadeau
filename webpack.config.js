const path = require('path');

module.exports = {
  entry: {
    accueil: './Cadeau/accueil.html', // Page principale
    swap: './Cadeau/swap.html', // Autre page
    main: './Cadeau/js/swap.js', // Fichier JavaScript principal
    styles: './Cadeau/assets/css/swap.css', // Fichier CSS principal
  },
  output: {
    path: path.resolve(__dirname, 'Cadeau/dist'), // Répertoire de sortie principal
    filename: '[name]/js/[name].bundle.js', // Chemin de sortie pour les fichiers JavaScript
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loader pour les fichiers CSS
      },
    ],
  },
};
