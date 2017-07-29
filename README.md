# Openlayers2-WMTS-extension
optimize WMTS load
目前仅仅对实际使用中的需求进行了针对性优化，改进方式为在ol源码中扩展`OpenLayers.Layer.EX_WMTSLayer`类，使用方式在 `main.js`中，如果有这方面优化的需要，可以借鉴该思路，自行扩展。后续工作中如果有必要，会对该项目进行补充。

# 优化方面

* 改进了Openlayers2 WMTS加载方式的交互逻辑，鼠标进行交互时不会有加载瓦片的延迟，使得整个瓦片加载更加流畅

* 改进了Openlayers2 加载瓦片时的动画渲染机制，减少不必要的动画渲染，提高瓦片加载的执行效率。
