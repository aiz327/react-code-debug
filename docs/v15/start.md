## 熟悉React 15源码

### 熟悉源码结构

React 15 ES5写法

#### 策略
先通过暴露的API研读
解决了哪些问题

#### ReactElement.js研读
ReactElement作为一个工厂来创建新的React对象

React 15 通过 ReactElement.js提供了全局API
- React.createElement(type, config, children)
  config作为props对象传入，其中：
  key,ref,__self,__source作为保留参数
  **key和ref为什么不允许访问？**
  创建流程：
  1. 将传入的config参数，转化为props，去除react定义的保留参数
  2. 将children(可能多个,多个的转为数组)赋值为prop.children
  3. 将type的defaultPorps赋值到props中，构造完成props对象
   **defaultProps是什么**
  4. 调用ReactElement方法
  ```
    ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
  ```
  > 注意点：ReactCurrentOwner.current记录组件的当前拥有者，默认为null
  5. 创建ReactElement对象，有以下默认值
  ```
    var element = {
      // This tag allow us to uniquely identify this as a React Element
      >$$typeof: REACT_ELEMENT_TYPE,

      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,

      // Record the component responsible for creating this element.
      _owner: owner
    }
  ```
  6. 在开发环境多了一步创建_store，_self,_source
   **进一步了解原因**
- React.cloneElement
  先通过copy element的props，然后在新生成一个element，浅拷贝
- React.createFactory
  通过createElement调用bind方法,返回一个预置类型的工厂生成方法
- React.isValidElement
  判断传进来的参数是否为对象且是REACT_ELEMENT类型的（Symbol['for']('react.element') || 0xeac7）

#### ReactBaseClasses.js研读
React.Component
React.PureComponent

#### ReactMount.js研读

- render
  1. 首先调用`_renderSubtreeIntoContainer(parentComponent, nextElement, container, callback)`

  源码如下：
  `ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);`
  2. 
- _renderSubtreeIntoContainer
  1. 校验callback,必须为function
  2. 从nextElement元素开始(即render传入的)，构建（mount）react内部对象，类型是function的构造为ReactCompositeComponent,string的构造为ReactDomComponent.
  3. 所有的执行都包裹在ReactConcilerTransaction中执行（事务的意义是什么？）
  4. 递归的执行，不能被打断，这是mount的过程，还有update的过程

  Update （setState):

  更新的判断流程是怎样的
  ReactDomComponent再看一下
  组件props的构成再看下（点击次数成了内部的props，为什么）
  理清React.Components和ReactElement的关系.
  
#### 源码中常见到的方法含义

##### lowPriorityWarning(condition, format)
> 开发环境下报告warning，condition为false会执行，如果没有format会直接抛出错误。
> 会抛出错误堆栈

##### invariant(condition, format, a, b, c, d, e, f)
> 编译环境抛出错误

#### 梳理执行流程
