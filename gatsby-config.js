/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Archivo`,
             variants: [`400`, `700`]
           },
           {
             family: `Roboto`,
             subsets: [`latin`]
           },
         ],
       },
     }
   ]
 }