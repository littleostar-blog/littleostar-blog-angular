
---

##### lib

- bootstrap4
  - install
    ```
    npm i --save bootstrap jquery popper.js
    ```
  - update angular.json
    ```json
     "styles": [
       "./node_modules/bootstrap/dist/css/bootstrap.min.css",
     ],
     "scripts": [
       "./node_modules/jquery/dist/jquery.min.js",
       "./node_modules/popper.js/dist/umd/popper.min.js",
       "./node_modules/bootstrap/dist/js/bootstrap.min.js"
     ]
    ```
    
- ngx-markdown
  - install
    ```cmd
    npm install ngx-markdown --save
    ```
  - update angular.json
    - ```json
      "styles": [
        "node_modules/prismjs/themes/prism-okaidia.css"
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

---

    
- angular-cli-ghpages
  - 
    ```cmd
    npm i angular-cli-ghpages --save-dev
    ```

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

---

end
