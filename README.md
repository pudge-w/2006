## 学习目标
  - vue基础
  - vue进阶
  - vue项目
  - typescript
  - 服务端渲染
  - vue3.0
  - 项目上线

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


#### 评价一个框架的好坏
  - 生态
  - 易用
  - 能力
  - 复用性，拓展性
  - 可维护性
  - 性能
  - 。。。

#### 指令
  - v-if
  - v-show
  - v-for
  - v-on:      ->   @
  - v-bind:    ->   :
  - v-model
  - v-once
  - v-html  innerHTML
  - v-text 
  - v-else
  - v-else-if
  - v-slot:    ->   #

#### 选项
  - el
  - data
  - methods
  - computed
  - watch
  - components
  - template
  - props
  - mixins
  - directives
  - filters




#### 组件
  - 全局注册组件
    ```
      Vue.component('组件名', {
        template: '模板'
      })

      组件名： 不能和标签名重复， 
        连字符：header-left
        大驼峰：HeaderLeft
    ```
  - 局部创建组件
    ```
      const 组件名 = {
        template: '模板'
      }

      注册
      components: {
        组件名
      }
    ```

#### MVC和MVVM的区别（面试）
  http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
  - MVC和MVVM都是软件的架构思想, 从后端发展过来的
    - MVC
      视图（View）：用户界面。
      控制器（Controller）：业务逻辑
      模型（Model）：数据保存

      通信是单项的  view -> controller -> model -> view
    - MVVM
      模型（Model）
      视图（View）
      视图模型（ViewModel）
      
      通信  view <-> ViewModel -><- model


#### 生命周期
    - 初始化事件和生命周期
  - beforeCreate
    - 初始化数据
  - created
    - 检测el和template
  - beforeMount
    - 挂载，将虚拟DOM变成真实DOM
  - mounted
    - 数据有更新的时候触发
  - beforeUpdate
    - 重新渲染
  - updated
    - 组件销毁时触发
  - beforeDestroy
  - destroyed

  - activated  当缓存组件被激活时调用
  - deactivated  当缓存组件被停用时调用


#### 计算属性computed
  - 当模板里面要多次使用相同的逻辑的时候，使用计算属性
  - 对于任何复杂的逻辑，都应当去使用计算属性
  - computed是一个option，是一个对象
  - 本质是一个函数，必须有return
  - 要依赖响应式数据
  - 只读的，要改变它只能通过改变它的响应式数据

#### 计算属性 vs 方法
  - 写法：方法需要加括号
  - 计算属性有缓存，多次用到页只执行一次
  - 如果都能用，计算属性更好

#### 侦听器watch
  - 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
  - watch是一个option，是一个对象

#### 计算属性 vs 侦听器
  - 计算属性是它所依赖的响应式数据改变而改变，可以依赖多个响应式数据（通过别人改变来改变自己）
  - 侦听器通过监听自己的改变，去改变其他的数据（通过改变自己去改变别人）
  - 一般来说都是计算属性更方便
  - 如果执行异步或者开销很大的时候，使用侦听器


#### class绑定
  1. 可以使用对象
    - v-bind:class="{ 类名: 变量或者表达式 }"
    - 整一个对象可以放在data或者computed里面
  2. 可以使用数组
    - v-bind:class="[isActive ? activeClass : '', errorClass]"

#### style绑定
  1. 可以使用对象
    - v-bind:style="{ css的属性: 变量 + 单位 }"
    css的属性如果有连字符，加引号，或者小驼峰
  2. 可以使用数组
    - 数组里面是多个对象

#### v-if和v-show的区别
  - v-if是控制元素的渲染或者不渲染，具有更低的初始开销
  - v-show是控制元素的display的显示和不显示， 具有更低的切换开销
  - 如果频繁切换的，用v-show更好，如果一开始隐藏的，用v-if更好

#### v-for
  - v-for还可以去循环对象
  - 循环对象有三个参数v-for="(value, name, index) in obj"

#### 数组更新检测
  - 可以直接使用(改变原数组)
    - push
    - pop
    - splice
    - shift
    - unshift
    - reverse
    - sort
    - ...
  - 不能直接使用
    - cancat
    - slice
    - map
    - reduce
    - ...

#### 事件修饰符
  ```
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>

    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>

    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
  ```


#### v-model
  是v-on和v-bind的语法糖
  ```
    <input type="text" :value="msg" @input="handerInput">
    data() {
      return {
        msg: 'haha'
      }
    },
    methods: {
      handerInput(e) {
        this.msg = e.target.value
      }
    }
  ```

#### 组件之间的传参
  1. 父子组件传参
    - 父传子
      在父组件自定义属性<child :msg="msg"></child>
      在子组件里面用props接受  props: ['msg']

    - 子传父
      在父组件自定义事件<child @msg1="msg2"></child>
      在子组件里面使用$emit触发  this.$emit('msg1', 传递参数)


#### 插槽
  - 用于内容分发
  - 可以分发文本/标签/组件
  - 使用<slot> 元素作为承载分发内容的出口。
  - 具名插槽的使用
    - 子组件里面 <slot name="插槽名"></slot>
    - 父组件里面 <template v-slot:插槽名></template>
    - 如果没有加v-slot,都会放入默认插槽里面


#### 动态组件
  - 可以通过 Vue 的 <component> 元素加一个特殊的 is attribute 来实现

#### keep-alive
  - 用于缓存组件的，缓存的组件就不会进行销毁和重新挂载

#### 混入
  - 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
  - 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
  - 如果生命周期发生冲突的时候，是合并的

#### 自定义指令
  - 除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令
  - 有5个钩子函数 bind inserted update componentUpdated unbind
  - 函数的简写
    指令名 () {
      // 相当于bind和update
    }    


#### 过滤器
  - Vue.js 允许你自定义过滤器，可被用于一些常见的  文本格式化
  - 过滤器可以串联




#### vue脚手架
  - vue-cli
  - 安装 npm install @vue/cli -g
  - 创建项目 vue create 项目名( 不要用git bash去装， 用cmd或者vscode )
  - Please pick a preset    ->    Manually select features
  - Check the features needed for your project
      (*) Choose Vue version
      (*) Babel
      ( ) TypeScript
      ( ) Progressive Web App (PWA) Support
      (*) Router
      (*) Vuex
      (*) CSS Pre-processors
      (*) Linter / Formatter
      ( ) Unit Testing
      ( ) E2E Testing
  - Use history mode for router       ->   no
  - Pick a CSS pre-processor     ->    sass
  - Pick a linter / formatter config   

#### 目录结构
  - node_modules       项目的依赖
  - public             静态资源文件（不会被打包进去的）
  - src                源目录，开发目录
    - assets              静态资源文件（会被打包的）
    - components          存放组件的文件夹
    - router              存放路由的文件夹
    - store               存放vuex的文件夹
    - views               存放页面的文件夹
    - app.vue             项目的根组件
    - main.js             项目的入口的js文件
  - .browserslistrc    浏览器支持
  - .eslintrc.js       做eslint的代码风格检查
  - babel.config.js    用于编译babel
  - package-lock.json  锁定版本
  - package.json       项目依赖的记录文件
  - README.md          说明文档


#### 单页面组件
  - 一个文件就是一个组件
  - 有三部分组成  html/js/css

#### Vue.config.js
  - 用于webpack的配置，手动创建在项目的根目录
  - 因为webpack配置放在了node_modules里面
  - 修改完需要重启，除了src文件夹以外，修改了都要重启

#### 移动端适配
  - 使用postcss的postcss-pxtorem，lib-flexible插件
  - npm i amfe-flexible -S  安装amfe-flexible,用来设置根元素字体大小的
  - 在main.js里面引入 import "amfe-flexible"
  - npm i postcss-pxtorem -D  安装postcss-pxtorem
  - 在根目录创建文件 .postcssrc.js
    ```
      module.exports = {
        plugins: {
          autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 8'],
          },
          'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
          },
        },
      };
    ```


#### 项目开发
  - 路径中@表示src目录(只能在js里面用)
  - scoped 表示单文件组件的css单独作用域


#### better-scroll插件
  - https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E5%B1%9E%E6%80%A7
  - 不是依赖滚动条实现的，是依赖transform实现的
  - 要求
    - 父元素要有固定的宽高
    - 所有的子元素都需要一个容器包起来
  - 安装 npm install better-scroll --save


#### 路由
  - 什么是前端路由
    - 不同的url和内容之间的映射关系
    - 根据不同的url，返回不同的内容或者页面
  - 原生路由的实现
    - hashchange事件
  - vue是单页面应用（spa， single page web application）

#### vue路由  --  vue-router
  - 特点
    - 嵌套的路由/视图表
    - 模块化的、基于组件的路由配置
    - 路由参数、查询、通配符
    - 基于 Vue.js 过渡系统的视图过渡效果
    - 细粒度的导航控制
    - 带有自动激活的 CSS class 的链接
    - HTML5 历史模式或 hash 模式，在 IE9 中自动降级
    - 自定义的滚动条行为

  - router和route
    - 我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由


  - router-link
    - to  相当于href
    - active-class  设置链接激活时使用的 CSS 类名,默认值: "router-link-active"
    - exact     表示精准匹配
    - exact-active-class   前两个结合,默认值: "router-link-exact-active"

  - router-view
    - 路由的出口

  - 编程式导航
    - 用js来做跳转
    - 有复杂逻辑的时候（除了跳转还要做其他的事情）， 在布局里不方便使用router-link的时候
    - this.$router.push(url)      跳转到新页面，有跳转记录
    - this.$router.replace(url)   跳转到新页面，替换当前页面，没有记录，不能后退
    - this.$router.router.go(n)   前进或者后退几步

  - 命名路由
    - 给route添加name属性
    - <router-link to="/detail/456"></router-link>
    - <router-link :to="{name: 'detail', params: {id: 456}}"></router-link>
    - this.$router.push('/detail/456')
    - this.$router.push({name: 'detail', params: {id: 456}})

  - 重定向和别名
    - 重定向： 当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
    - { path: '/a', redirect: '/b' }
    - 别名： /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
    - { path: '/a', component: A, alias: '/b' }


  - vue-router有几种模式
    - hash        
      - /#       
      - 比较难看
      - 比较好操作
    - history
      - 不带#
    - abstract


#### 路由守卫
  - 全局路由守卫
    ```
      router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth) {
          if (localStorage.getItem('token')) {
              如果有token，说明登录过了
            next()
          } else {
              如果没有token，那么跳到登录页
            next('/login')
          }
        }
        next()
      })
    ```
  - 路由独享守卫
    ```
      {
        path: '/mini-video',
        component: () => import('../views/MiniVideo.vue'),
        // meta: { requiresAuth: true }
        // 路由独享的守卫
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('token')) {
            next()
          } else {
            next('/login')
          }
        }
      },
    ```

  - 组件内守卫
    - beforeRouteEnter
      - 取不到this
    - beforeRouteUpdate
    - beforeRouteLeave



#### Vuex
  - 是一个状态管理模式（全局状态管理工具）
  - Vue components  ----dispatch---->   actions    ----commit----->  mutations  ------->  state
  - 由5部分组成
    - state
      - 用于存放全局的状态的
      - mapState   放在computed里面
    - getters
      - 相当于vuex里面的计算属性
      - mapGetters  放在computed里面
    - mutations
      - 用于放改变state的同步函数
      - 有两个参数，第一个参数是state，第二个参数是payload，payload最好是对象
      - mapMutations   放在methods里面
    - actions
      - 用于放异步方法
      - 有两个参数，第一个参数是一个对象，一般只需要从里面结构出commit，第二个参数是payload
      - mapActions   放在methods里面
    - modules
      - 用来做vuex的模块化
      - 如果没有设置命名空间
        - state   ->     this.$store.state.a.msg
        - getters  ->    this.$store.getters.msg
        - mutations  ->  this.$store.commit('msg')
        - actions  ->  this.$store.dispatch('msg')
      - 如果有命名空间
        - state   ->     this.$store.state.a.msg
        - getters  ->    this.$store.getters['a/msg']
        - mutations  ->  this.$store.commit('a/msg')
        - actions  ->  this.$store.dispatch('a/msg')


#### 商城项目
  - vue全家桶
    - vue core + vue-router  + vuex  + vant-ui  +  axios


#### git
  - git是一个目前世界上最先进的分布式的版本控制系统
  - Linux

  - 配置
    - git config --global user.name "pudge-w"
    - git config --global user.email "pudge_wj@163.com"
    - 让远程仓库知道这次的提交是谁做的

  - 上传本地仓库
    - git init   初始化本地仓库
    - git add [文件名] 或者  git add .   或者  git add [文件1] [文件2]  上传到暂存区
    - git commit -m '注释'   上传到本地仓库 
    - git status    查看仓库的状态
    - git diff      查看当前仓库的改动
    - git log   查看历史版本
    - git log --pretty=oneline
    - git reset --hard HEAD^ 回退到上一个版本  
    - git reset --hard 78455346  回退到指定版本
    - git reflog   查看版本的操作记录

  - 分支
    <!-- 不会在master分支上开发，master应该是非常稳定的，仅仅用来发布新版本 -->
    - git branch   查看分支
    - git branch dev   创建分支
    - git checkout dev   或者   git switch dev    切换分支
    - git checkout -b dev   创建并切换
    - git merge dev    将dev分支的内容进行合并

  - 关联远程仓库
    <!-- 生成密钥对 -->
    - ssh-keygen -t rsa -C "pudge_wj@163.com" 
      - setting -> ssh and GPG keys -> new ssh

    - 创建项目
      echo "# product" >> README.md
      git init
      git add README.md
      git commit -m "first commit"
      git branch -M master
      git remote add origin git@github.com:pudge-w/product.git
      git push -u origin master

  - 项目流程
    - 邀请组员
      setting -> manage access
    
    - 成员
      git clone '项目地址'
      git checkout -b '分支名'
      add -> commit -> push

    - 组长
      git fetch --all
      git checkout '分支名'


#### TypeScript
  typeScript不是一门新的语言，它是一门用来规范js的一门语言
  js依旧是一门弱类型语言
  ts是js的一个超集，广义的js由es，dom，bom，而是es的超集
  比方说有强类型，面向对象的开发体系
  ts常用在大型的项目里面，使得代码更加的规范，协作更加友好，维护更加的方便

  特点：
    增加了静态类型检查，增加了代码的健壮性
    是编写时报错，js是编译时报错
    使得重构变得安全与便捷
    多人协作的时候，提高生产力，降低维护成本

  编译：
    npm i typescript -g  全局安装ts
    tsc ./src/app.ts --outFile ./dist/app.js   编译
    tsc --init      生成ts配置文件
    tsc --watch     监听

  vue + ts
    在ts的项目里面，组件分成三种
      类组件
        用类的方式写组件
        ```
          import Vue from 'vue';
          // 需要引入修饰器，将类转换成真正的组件
          import { Component } from 'vue-property-decorator';
          @Component({})
          export default class ClassComponent extends Vue {}
        ```
      扩展组件
        用Vue.extend()
        ```
          import Vue from 'vue';
          export default Vue.extend({})
        ```
      函数式组件
        只用于渲染的组件（ui组件，傻瓜组件）
        没有自己的状态(props除外)，性能是最好的
        ```
          <template functional>
            <div>
              <h3>函数式组件</h3>
            </div>
          </template>
        ```