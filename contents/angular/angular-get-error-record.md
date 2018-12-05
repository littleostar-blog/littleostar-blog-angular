
---

- Can't bind to 'ngIf' since it isn't a known property of 'p'.
  - https://stackoverflow.com/questions/39058075/cant-bind-to-ngif-since-it-isnt-a-known-property-of-div
  - 添加下列代码到你的子项Module
    ```typescript
    imports: [
      CommonModule
    ],
    ```

---

end