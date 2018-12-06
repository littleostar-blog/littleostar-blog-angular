
---

##### lib

- @ng-bootstrap/schematics
  - ```ng add @ng-bootstrap/schematics```
    - update ^2.0.0-alpha0 -> ^4.0.0
    - ```"@ng-bootstrap/ng-bootstrap": "^4.0.0",```
  
- ngx-markdown
  - ```npm install ngx-markdown --save```
    - update angular.json
    - ```
      "styles": [
        "src/styles.css",
        "node_modules/prismjs/themes/prism-okaidia.css",
        "./node_modules/bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "node_modules/marked/marked.min.js",
        "node_modules/prismjs/prism.js",
        "node_modules/prismjs/components/prism-javascript.min.js",
        "node_modules/prismjs/components/prism-css.min.js",
        "node_modules/prismjs/components/prism-markdown.min.js",
        "node_modules/prismjs/components/prism-typescript.min.js"
      ]
      ```
    
- angular-cli-ghpages
  - ```npm i angular-cli-ghpages --save-dev```

<!-- ##### git

<!-- - origin
<!--   - ```cmd
<!--     https://github.com/littleostar-blog/littleostar-blog.github.io.git
<!--     ```
<!-- - origin-blog-angular
<!--   - ```cmd
<!--     https://github.com/littleostar-blog/littleostar-blog-angular.git
<!--     ```

---

end
