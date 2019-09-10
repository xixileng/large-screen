## 底层技术
大屏需求多数可借助高度封装的组件库/工具库较快完成，部分需求需要使用偏底层的技术进行开发，Web 端常用的底层技术如下：
* **[CSS3](https://developer.mozilla.org/zh-CN/docs/Archive/CSS3)：** CSS 的最新标准，提供令人兴奋的 animation、transition、transform、gradients、filter 等属性。
* **[SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)：** 可缩放矢量图形（Scalable Vector Graphics），是基于可扩展标记语言（标准通用标记语言的子集）的用于描述二维矢量图形的一种图形格式。
* **[Canvas 2D](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)：** Canvas 通过 JavaScript 来绘制 2D 图形，通过逐像素来进行渲染，可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
* **[Canvas 3D WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)：** WebGL（Web Graphic Library）是一个 JavaScript API，用于在任何兼容的 Web 浏览器中渲染 3D 图形。WebGL 程序由用 JavaScript 编写的控制代码和用 OpenGL 着色语言（GLSL）编写的着色器代码构成，这种语言类似于 C 或 C++，可在 GPU 上执行。

直接使用这些底层技术的 API 略显繁琐，社区有一些流行的基础绘图库，对这些底层技术进行轻量对封装。SVG 的有 [SVG](https://svgjs.com/)、[Snap](http://snapsvg.io)、[Raphaël](https://github.com/DmitryBaranovskiy/raphael) 等，Canvas 2D 的有 [zrender](https://ecomfe.github.io/zrender-doc/public/)、[ocanvas](http://ocanvas.org/)、[EaselJS](https://www.createjs.com/docs/easeljs/modules/EaselJS.html)、[PixiJS](https://www.pixijs.com/) 等。

## WebGIS
### 基础名词
* [地图](https://zh.wikipedia.org/wiki/%E5%9C%B0%E5%9B%BE)
* [珊格瓦片/矢量瓦片](https://www.jianshu.com/p/59d4ab010ee9)
* [投影与坐标系](https://blog.csdn.net/liuxu841911548/article/details/78569519#31%E7%8F%8A%E6%A0%BC%E7%93%A6%E7%89%87%E5%92%8C%E7%9F%A2%E9%87%8F%E7%93%A6%E7%89%87%E7%9A%84%E6%A6%82%E5%BF%B5)
* [GeoJSON](https://www.oschina.net/translate/geojson-spec#geometrycollection)

### 地图库
* [OpenLayers](https://openlayers.org/)
* [Leaflet](https://leafletjs.com/)
* [Sinomap](http://sinomap.ewind.us/)
* [mapbox](https://docs.mapbox.com/mapbox-gl-js/overview/)
* [ArcGIS For JavaScript](https://developers.arcgis.com/javascript/)
* [QGIS](https://www.qgis.org/en/site/)

### 地图开放平台
* [高德地图](https://lbs.amap.com/api/javascript-api/summary)
* [百度地图](https://lbsyun.baidu.com/index.php?title=jspopular3.0)
* [腾讯地图](https://lbs.qq.com/javascript_v2/index.html)
* [天地图](http://lbs.tianditu.gov.cn/api/js4.0/guide.html)
* [谷歌地图](https://developers.google.com/maps/documentation/javascript/tutorial?hl=zh-cn)

### 空间数据库
* [PostGIS](https://postgis.net/)
* [PostgreSQL](https://www.postgresql.org/)
* [Oracle Spatial](https://www.oracle.com/database/technologies/spatialandgraph.html)

### 地理可视化
* [supercluster](https://github.com/mapbox/supercluster)
* [turf](http://turfjs.org/)
* [geojs](https://github.com/OpenGeoscience/geojs)
* [cesiumjs](https://cesiumjs.org/)
* [geohey](https://geohey.com/home/?go)


## 工具库
| 图表库                                                          | 绘图库                                                                               | 动画库                                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [ECharts](https://www.echartsjs.com)                            | [three](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) | [anime](https://animejs.com/)                                             |
| [HightCharts](https://www.highcharts.com)                       | [D3](https://d3js.org/)                                                              | [mo](https://github.com/mojs/mojs)                                        |
| [Chart](https://www.chartjs.org/)                               | [SVG](https://svgjs.com/)                                                            | [Popmotion](https://popmotion.io/)                                        |
| [Chartist](https://gionkunz.github.io/chartist-JS/)             | [Snap](http://snapsvg.io)                                                            | [Bounce](http://bouncejs.com/)                                            |
| [AntV系列](https://antv.alipay.com/zh-cn/index.html#__products) | [Raphaël](https://github.com/DmitryBaranovskiy/raphael)                              | [Tween(补间动画)](https://createjs.com/docs/tweenjs/modules/TweenJS.html) |

>**表格分类注解：**
>
>图表库：主要指通过配置与数据绘制柱状图、饼图等图表的类库，使用相对简单
>
>绘图库：主要指通过 JS 操作实例以达到制图目的的类库，开发者需要操作更多细节
>
>地图库：主要指以地图为主体，进行空间展示、分析的类库，开发者需要有一定的地理知识储备

<!-- ## 算法
借助三角函数、矩阵运算等完成物体位置坐标、物体形状大小、物体位移距离、坐标转换等计算。

## 图形学（进阶）
GLSL、shader、分形、相变、光的衍射 -->

## 常见问题

#### 定时器

在开始写一个定时器的时候，就要把定时器清除函数写出来，并在组件销毁或页面不可见时销毁，常见的定时器如下：
* [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)
* [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
* [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

#### 事件

避免对象被重复添加事件监听，尤其对 window、document、body 等添加的监听，当在组件销毁时进行移除。

#### 性能

如果使用 vue，则数据应避免都放在data中，模版中不使用的可在 beforeCreate/created/Mounted 等时机进行声明或赋值，减少 vue 的 Observer 带来的性能损耗。

#### 分辨率适配

使用媒体查询或 JS 计算设置 html font-size，代码中单位使用 rem。设计师通常以 16px 为基准出设计图，图的单位大概率为 px，如果每个值都自己计算转换为 rem 会比较麻烦（虽然除以都能除尽且不复杂），推荐使用   [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)，籍此便可在代码中都直接使用 px，编译过程中该插件会根据配置的基准值将px换算为 rem。

**媒体查询：**
| 分辨率           | html font-size |
| ---------------- | -------------- |
| 1366*768         | 12px           |
| 1920*1080(1080p) | 16px           |
| 2560*1440(2k)    | 22px           |
| 3840*2160(4k)    | 32px           |

**js计算：**
```js
function initRem() {
  const radio = document.documentElement.clientWidth / 1920;
  document.documentElement.style.fontSize = `${Math.round(16 * radio)}px`;
}
initRem()
window.addEventListener('resize', initRem);
```
为什么要用 width/1920 而非 height/1080 呢？因为在常规操作习惯下，高度发生变化时可以很方便的使用滚动条进行操作，但横向的滚动条则没那么好用，因此最好选择通过宽度进行计算。

#### 数字单位

中文常用万进制，即万、亿、万亿···，符号常用千进制，即 K、M、G、T、P···，参考见[国际单位制词头](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E5%8D%95%E4%BD%8D%E5%88%B6%E8%AF%8D%E5%A4%B4)或[Metric_prefix](https://en.wikipedia.org/wiki/Metric_prefix)。

| 数值           | 中文单位 | 中文字母 | 符号单位 |
| -------------- | -------- | -------- | -------- |
| 100            | 100      | 100      | 100      |
| 1000           | 1000     | 1000     | 1K       |
| 10000          | 1万      | 1W       | 10K      |
| 1000000        | 100万    | 100W     | 1M       |
| 1000000000     | 10亿     | 10Y      | 1G       |
| 10000000000000 | 1万亿    | 1WY      | 10T      |

#### 时间参数

大屏一般都会有1天，7天，14天，30天的全局时间搜索框，需要注意定接口的时候不要前端去算开始时间和结束时间，然后把这个时间传给后端，因为客户端的时间和服务器的时间基本上是不一样的，而且客户端的时间可以随意更改

#### 控制台

开发完成的大屏控制台不应该有日志输出和错误信息

#### resize事件

大屏通常不会拖动窗口，但会有全屏与非全屏的切换，因此也需要监听 window resize 事件进行处理，处理函数中需要注意操作对象是否存在或已实例化完成。

#### 数据问题

注意进行防御式编程，对服务端接口的稳定性与可靠性持怀疑态度，深层取值用 lodash 的 get，同时注意设置默认值。

#### 内存泄漏

在使用 three 时，如果有路由跳转或 v-if 切换组件的情况，需要在组件销毁时调用相应实例(scene、render、material、texture等)的 dispose 方法销毁实例，如果使用了 three 的 group，可通过 group.remove(item) 移除对 item 的引用。更多 dispose 信息见[How to dispose of objects](https://threejs.org/docs/index.html#manual/en/introduction/How-to-dispose-of-objects)

#### echarts 的 size 适配

echarts 的很多 size 设置，单位只支持 px，如果屏幕要适配大小屏幕的时候，就会出现尺寸要么太小要么太大，这时可以提供一个 getSize 函数，传入基于 1080p 下的 size 得到相应尺寸的 size，如有需要监听 resize，还需在 resize 的时候重新计算与设置 option：
```js
function getSize (size = 0) {
  const width = document.documentElement.clientWidth
  return size * width / 1920
}
```
