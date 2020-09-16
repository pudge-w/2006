## 学习目标
  - vue基础
  - vue进阶
  - vue项目
  - typescript
  - 服务端渲染
  - vue3.0
  - 项目上线

### 9-16

#### 为什么要学习框架
  - 提高工作效率，减少成本
  - 提高性能
  - 当项目有大量文件的时候，帮助我们有一个正规的组织形式


#### 什么是Vue.js?
  - 官网： https://cn.vuejs.org/
  - 作者： 尤雨溪
  - 特点：
    - 易用：已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
    - 灵活：不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
    - 高效：20kB min+gzip 运行大小，超快虚拟 DOM，最省心的优化
  - Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
  - Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
  - core -> 引入自身的周边库（vue-router/vuex） -> 第三方的库（axios） -> 测试工具/typescript/服务端渲染

#### 声明式渲染
  - 如果对文本节点声明式渲染，用{{}}的插值语法
  - 如果对属性进行声明式渲染，使用v-bind:title="xxx"

#### 条件渲染
  - 使用v-if指令，里面可以直接使用响应式数据,也可以写语句

#### 循环渲染
  - 使用v-for指令， <p v-for="item in arr">{{item}}</p>

#### 绑定事件
  - 使用v-on指定， <p v-on:click="handleClick">hello</p>
  - 事件处理函数要写在methods的option里面

#### 数据双向绑定
  - v-model 指令，它能轻松实现表单输入和应用状态之间的双向绑定。