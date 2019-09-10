## 字体
优先使用系统内置字体（安全+免费），网络上也有很多付费字体可以购买，使用第三方字体需要注意版权问题。    字号跟网页设计一样不小于12号字，可以用于图表的标注，数据信息建议14号字以上，大屏观者远距离才能看全内容，所以字号可以稍大一点。
![可视化大屏字体](~@/images/font.png)
图片来源：<http://m.ui.cn/details/428629>

## 配色
1. 深色调：浅色调投屏后对人的视觉刺激较强，不利于长时间观看，且深色系更具“科技感”；深色调紧张感强，让视觉更好的聚焦，大屏暗色调看上去更柔和舒服不刺眼，也会较省电。整体背景深色系，可选的余地还是很多的，但是配起来能让多数人都觉得好看的还是以深蓝色系为主。
2. 一致性：模块间配色尽量统一，模块内部可根据需求选择对比度差异大的颜色凸显内容；
3. 考虑屏幕素质：设计与开发前，可先了解目标屏幕的屏幕素质，如果素质较差，实际效果会比高保真差许多，需要进行一定的预防与调整。
4. 背景：组件位于主区域内时，可根据情况给予组件不透明度0.1-0.3的黑色背景（也可由内而外，由深变浅），可使组件内容不和主区域内容重叠，又能显得协调一致。当然，背景不一定要用颜色的，也可以用图片。图片的使用依旧遵从整体深色的原则，同时搭配其他一些现实特性可以让整体看着更有科技感。推荐使用一些带有星空、条纹、渐变线、点缀效果之类的图片。
![可视化大屏配色](~@/images/color.png)

## 布局
1. 主次分明：主要信息放在用户第一眼就能关注到的区域（通常在中心），且占据较大范围空间，次要信息环绕周围或放置其上；
2. 关系与距离：在次要信息组件的分布上，尽可能将表现形式/表达目的/数据性质接近的靠在一起，可以使用户更好的获取有关信息；
3. 整体感：尽可能同行组件等高、同列组件等宽，不要让组件显得突兀或过于独立。相关的数据项组织在一起，视觉上呈现出一体化。
![大屏布局1](~@/images/layout.png)

## 动画
合适的动画可提高大屏观赏度，也能更生动的表述信息。动画的设计也遵循“主次分明”，避免动画过多或动画间相互影响带来的错乱感。

动效设计注意点：
1. 避免喧宾夺主：将数据可视化，页面本身会有很多图标图形，如果动效用的过多，会产生视觉干扰，无主次之分。
2. 动效结合数据：将动效和数据趋势相结合，不仅能吸引眼球，还能帮助理解数据。

## 交互
少+简单。大屏通常以看为主，不宜增加过多或较为繁杂的操作，能用鼠标点击的尽量不靠键盘，能一颗键完成的不用组合，越常用的交互功能其交互形式应越为简单。
数据可视化大屏可以分为两种，一种是“纯展示型”，另一种是“展示＋功能型”，纯展示型几乎没有交互，后台录入数据，在大屏上展示就行了。展示＋功能型，例如实时监控数据、采集数据、数据对比功能、云计算数据、分析与预警等等。
但是，一切功能结构都要围绕核心数据主页面来架构，因为大屏展示的核心就是将一些业务的关键指标数据以数据可视化的方式展示出来。
![交互设计原则](~@/images/mutual.jpg)

## 图表选择
图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『我有什么数据，需要用图表做什么』，而不是 『图表长成什么样』。
选定图表注意事项：易理解、可实现。
易理解：可视化设计要考虑大屏最终用户，可视化结果应该是一看就懂，不需要思考和过度理解，因而选定图表时要理性，避免为了视觉上的效果而选择一些对用户不太友好的图形。
可实现：我们需要了解现有数据的信息、规模、特征、联系等，然后评估数据是否能够支撑相应的可视化表现。
以下是一些常见的数据关系与其适用的图表类型：

| 数据关系 | 适用图表类型                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 比较类   | <div style="margin-right:15px;font-size:12px;float:left"> ![柱状图](~@/images/icons/columnar.png)<br>柱状图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![气泡图](~@/images/icons/bubble.png)<br>气泡图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![雷达图](~@/images/icons/radar.png)<br>雷达图</div><div style="margin-right:15px;font-size:12px;float:left"> ![词云](~@/images/icons/word-cloud.png)<br>词云</div> |
| 分布类   | <div style="margin-right:15px;font-size:12px;float:left"> ![散点图](~@/images/icons/splashes.png)<br>散点图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![气泡图](~@/images/icons/bubble.png)<br>气泡图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![分布曲线图](~@/images/icons/curve.png)<br>分布曲线图</div>                                                                                                        |
| 占比类   | <div style="margin-right:15px;font-size:12px;float:left"> ![饼图](~@/images/icons/pie.png)<br>饼图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![矩形树图](~@/images/icons/rectangle.png)<br>矩形树图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![堆叠柱状图](~@/images/icons/pile.png)<br>堆叠柱状图</div>                                                                                                           |
| 区间类   | <div style="margin-right:15px;font-size:12px;float:left"> ![仪表盘](~@/images/icons/dash-board.png)<br>仪表盘</div> <div style="margin-right:15px;font-size:12px;float:left"> ![堆叠面积图](~@/images/icons/stacked-area.png)<br>堆叠面积图</div>                                                                                                                                                                                                               |
| 趋势类   | <div style="margin-right:15px;font-size:12px;float:left"> ![折线图](~@/images/icons/line.png)<br>折线图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![卡吉图](~@/images/icons/card.png)<br>卡吉图</div> <div style="margin-right:15px;font-size:12px;float:left"> ![堆叠面积图](~@/images/icons/stacked-area.png)<br>堆叠面积图</div>                                                                                                       |

更多分类参考 AntV [图表用法](https://antv.alipay.com/zh-cn/vis/chart/index.html)

