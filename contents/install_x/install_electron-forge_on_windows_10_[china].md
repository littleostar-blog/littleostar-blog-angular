
---

- Manage the npm configuration files
  - https://docs.npmjs.com/cli/config

```cmd
npm config set registry https://registry.npm.taobao.org --global 
```
      
---

```cmd
npm config set ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/" --global
```

```cmd
npm install -g @electron-forge/cli@beta
electron-forge init my-new-app
cd my-new-app
npm start
```

---

end