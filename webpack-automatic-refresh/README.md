# Webpack: Automatic Refresh

Automatic refresh is supported out of the box for iframe mode. To enable with inline, need to add `--inline` for cli, and for node api add to the entry config:  `config.entry.app.unshift('webpack-dev-server/client?http://localhost:3000');`

Tested and working:  

**cli**  
✅inline  
✅iframe (hot)  

**nodejs**  
✅inline  
✅iframe (hot)  


## commands

**bundle modules**  
`webpack`

**cli**  
`npm run serve`

**nodejs api**  
`node run start`
