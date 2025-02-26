// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

// /** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'public': '/',
    'src': '/dist'
  },
  buildOptions: {
    out: 'docs'  // Build directly to docs/
  }
}