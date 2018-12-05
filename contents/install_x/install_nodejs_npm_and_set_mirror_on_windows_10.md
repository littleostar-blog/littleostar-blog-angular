#### on windows install nodejs yarn and set mirror

##### nodejs yarn, downlaod and install
- download
  - [node.js](https://nodejs.org/)
  - [yarn#windows-stable](https://yarnpkg.com/zh-Hans/docs/install#windows-stable)

##### set mirror
- Manage the npm configuration files

    https://docs.npmjs.com/cli/config
    
- npm
  - ```cmd
    npm config set registry https://registry.npm.taobao.org --global 
    ```

- yarn
  - ```cmd
    yarn config set registry https://registry.npm.taobao.org --global
    ```

##### test config

- ```cmd
  npm config list
  yarn config list
  ```

- ```cmd
  Microsoft Windows [版本 10.0.17763.134]
  (c) 2018 Microsoft Corporation。保留所有权利。
  
  C:\Windows\system32>npm config list
  ; cli configs
  metrics-registry = "https://registry.npm.taobao.org/"
  scope = ""
  user-agent = "npm/6.4.1 node/v10.14.1 win32 x64"
  
  ; globalconfig C:\Users\littleOStar\AppData\Roaming\npm\etc\npmrc
  ELECTRON_MIRROR = "https://npm.taobao.org/mirrors/electron/"
  registry = "https://registry.npm.taobao.org/"
  
  ; builtin config undefined
  prefix = "C:\\Users\\littleOStar\\AppData\\Roaming\\npm"
  
  ; node bin location = C:\Program Files\nodejs\node.exe
  ; cwd = C:\Windows\system32
  ; HOME = C:\Users\littleOStar
  ; "npm config ls -l" to show all defaults.
  
  C:\Windows\system32>
  ```

##### mirror website url

> [mirror](https://npm.taobao.org/)

----------

end
