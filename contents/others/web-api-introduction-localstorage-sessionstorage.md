
#### Reference: https://alligator.io/js/introduction-localstorage-sessionstorage/

---

localStorage和sessionStorage简介
 localStorage和sessionStorage是Web存储API的一部分，是本地保存键/值对的两个很好的工具。如果单击此帖子顶部的“保存”按钮，则localStorage将用于存储已保存的帖子。

与使用cookie相比，localStorage和sessionStorage都具有以下优势：

数据仅在本地保存，服务器无法读取，这消除了cookie存在的安全问题。
它允许保存更多数据（大多数浏览器为10Mb）。
它使用起来更简单，语法非常简单。
所有现代浏览器都支持它，因此您可以在今天使用它而不会出现问题。显然，由于无法在服务器上读取数据，因此cookie仍然有用，特别是在身份验证方面。

localStorage vs sessionStorage
localStorage和sessionStorage完成完全相同的事情，并且具有相同的API，但是使用sessionStorage，数据仅在窗口或选项卡关闭时保留，而使用localStorage时，数据将持久存在，直到用户手动清除浏览器缓存或直到您的Web应用程序为止清除数据。本文中的示例适用于localStorage，但相同的语法适用于sessionStorage。

创建条目
使用localStorage.setItem创建键/值对条目，提供键和值：

```typescript
let key = 'Item 1';
localStorage.setItem(key, 'Value');
```

阅读作品
使用localStorage.getItem读取条目：
```typescript
let myItem = localStorage.getItem(key);
```

更新条目
更新条目就像使用setItem创建一个条目一样，但是已经存在一个密钥：
```typescript
localStorage.setItem(key, 'New Value');
```

删除条目
使用removeItem方法删除条目：
```typescript
localStorage.removeItem(key);
```

清除一切
以下是清除localStorage中存储的所有内容的方法：
```typescript
localStorage.clear();
```

存储Json对象
只能使用localStorage或sessionStorage存储字符串，但您可以使用JSON.stringify存储更复杂的对象，并使用JSON.parse读取它们：
```typescript
// Create item:
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));

// Read item:
let item = JSON.parse(localStorage.getItem(key));
```

检查物品
以下是测试loclaStorage中项目是否存在的方法：
```typescript
if (localStorage.length > 0) {
  // We have items
} else {
  // No items
}
```

检查支持
通过检查windowStorage是否在window对象上可用来测试localStorage支持：
```typescript
if (window.localStorage) {
  // localStorage supported
}
```

迭代项目
localStorage或sessionStorage没有forEach方法，但您可以使用旧的for循环遍历项目：
```typescript
for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(key, value);
}
```
---

end
