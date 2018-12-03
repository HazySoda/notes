# HTML & CSS

## BFC

### BFC是什么

首先说说什么是 FC ：

FC（Formatting Context）是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

那么什么是 BFC 呢：

BFC（Block Formatting Context），直译为「块级格式化上下文」，它属于上述定位方案的普通流。具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

### 如何触发BFC

元素满足下列任一条件即可触发 BFC：

- 元素为 `body`。
- `float` 的值不为 `none`。
- `position` 的值不为 `static` 和 `relative`。
- `display` 的值为 `inline-block`、`table-cell` 或 `inline-flex`。
- `overflow` 的值不为 `visible`。

### BFC的应用

1. 同一个 BFC 下的元素外边距会重叠，如果想避免外边距重叠，可以将元素放在不同的 BFC 容器中。
2. BFC 可以包含浮动的元素，因此可以使用 BFC 来解决元素浮动时其父元素高度为 0 的问题。
3. BFC 可以阻止元素被浮动元素覆盖，我们可以用这个特性来实现一些自适应布局。
