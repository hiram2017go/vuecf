# personalbill

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


4.1 安装element-ui
  $ cnpm i element-ui@1.0.9
建议固定vue和element-ui的版本，避免将来版本升级后产生冲突

4.2 引入element-ui
在app.vue引入element-ui，然后就可以在其他任何页面中使用了

    import Element from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'
    Vue.use(Element)
