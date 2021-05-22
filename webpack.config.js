module.exports = {
  entry: './app/app.ts', //app entry point
  devtool: 'inline-source-map', //tell webpack that source map should be created inline
  mode: 'development',
  module: { //configure tsloader than will run compiler
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: { //which files should be used for mudule resolution
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: { //file webpack will produce
    filename: 'bundle.js'
  },
  devServer: { //keeps browser from automatically refreshing when new bundles are produced, nice for dev and demonstrations
    inline: false
  }
};
