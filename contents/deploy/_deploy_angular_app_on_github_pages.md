
---

#### _deploy_angular_app_on_github_pages
  - [https://github.com/angular-schule/angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)
      
###### install build and publish

 <!-- - > 使用当前lib, angular项目默认部署至, git Remotes中 Name="origin" 的远程仓库地址 -->

 - 0.0 must use terminal execute above command...

 - 0 install lib
   - ```cmd
     npm i angular-cli-ghpages --save-dev
     ```

 - 1 add this to "package.json" -> "scripts"

   - ```cmd 
     "gh-bd": "ng b --aot --prod --base-href=https://org_name.github.io/repo_name/", 
     ```
   - ```cmd 
     "gh-pb": "npx ngh --dir=dist/local_project_name", 
     ```

 - 2 check
 
   - Settings --> Github Pages
      
---

---

end
