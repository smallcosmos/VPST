# VPST
Vue+Parcel Scaffold Template

### 使用

1. `npm install nek -g`
2. `nek scaffold -i vue+parcel`
3. `cd webapp`
4. `npm install`
5. `npm run dev`
6. open `localhost:1234` in chrome

### nek scaffold

**options：**

  --help      显示帮助信息               [布尔]  
  --version   显示版本号                 [布尔]  
  -i, --init  选择要创建的工程类型并创建   [字符串]  
  -a, --add   添加映射                [字符串]  
  -d, --del   删除映射                [字符串]  
  -l, --list  映射列表                  [布尔]  

1. `nek scaffold -a [keyword] [url]`添加一条映射,  
映射关系通过nek-server api保存在数据库中，比如:
`nek scaffold -a regular+nekui https://github.com/smallcosmos/RNST/archive/master.zip`
2. `nek scaffold -d [keyword]`删除一条已有的映射
3. `nek scaffold -l`查看已有的所有映射
4. `nek scaffold -i [keyword]`拉取一份前端框架模板

通过nek scaffold命令行管理的各类框架模板包含了  
Nej+Regular+Nekui，  
Webpack+Regular+Nekui,  
Webpack+Vue+Elementui,
以及Vue+Parcel等等，  
还可以自定义配置各种框架模板，通过nek scaffold -a加入映射关系。

# parcel问题记录

### 关于babel-preset-env

babel默认值转换新的js语法，而不转换新的API，例如Iterator、Generator等；  

如果想使用这些新的对象和方法，就需要引入babel-polyfill垫片，而这些垫片为了使转换后代码功能和源代码相同，就需要借助很多帮助函数，这些帮助函数可能会散布在各个模块中，导致打包后文件过大。  

所以还需要借助transform-runtime，该插件提供了单独的babel-runtime包，来提供编译所需的这些辅助函数。  
	
然而现实是，现在的浏览器很大情况下已经支持了es6的大部分语法，并且后台系统对浏览器要求并不严格，也就是说我们的源代码很大程度上并不需要完全转化到es5或更低就可以运行起来。  

babel-preset-env提供了这样的功能，用户可以指定浏览器，然后编译过程只转换这些浏览器无法解析的那部分API接口

#### 2. 问题
 
当parcel单独使用babel-preset-env时，很多es6 API确实不会被转换，但是对于当前浏览器不支持的API，辅助函数会重复出现在各个模块内部。

为了解决辅助函数重复出现的问题，引入了transform-runtime，发现babel-preset-env失效。

### 关于vue解析

webpack通过vue-loader解决了vue，parcel中使用parcel-plugin-vue来解析vue，parcel会自动加载parcel-plugin开头的插件，所以不需要配置。

parcel-plugin-vue通过vueify来生成代码，另外，它需要vue-hot-reload-api和vue-template-compiler来解决相应的问题。同vue-loader。

[传送门](https://www.npmjs.com/package/parcel-plugin-vue)

### 关于vue运行时构建

默认npm导出的vue包属于运行时构建，不包含模板编译器，因此不支持template选项，而只能用render选项，在parcel-plugin-vue中，作者已经给了明确的建议(参见传送门)，如果希望使用template，则通过以下方式引入vue

`import Vue from 'vue/dist/vue.esm.js';`

类似webpack中通过resolve别名的方式解决

```
resolve: {  
	extensions: ['.vue'],
	alias: {
		'vue$': 'vue/dist/vue.esm.js'
	}
}
```