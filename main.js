$(function () {
    var sdMap = new SDMap('container');
});

var SDMap = function (mdiv) {
    var olmap = null;

    OpenLayers.INCHES_PER_UNIT["千米"] = OpenLayers.INCHES_PER_UNIT["km"];
    OpenLayers.INCHES_PER_UNIT["米"] = OpenLayers.INCHES_PER_UNIT["m"];
    OpenLayers.INCHES_PER_UNIT["英里"] = OpenLayers.INCHES_PER_UNIT["mi"];
    OpenLayers.INCHES_PER_UNIT["英尺"] = OpenLayers.INCHES_PER_UNIT["ft"];

    //更改默认图片dpi，准确计算比例尺
    OpenLayers.DOTS_PER_INCH = 96;

    olmap = new OpenLayers.Map(mdiv, {
        allOverlays: true,
        numZoomLevels: 20,
        displayProjection: "EPSG:4490",
        controls: [
            new OpenLayers.Control.Navigation({
                zoomWheelEnabled: true,//启用滚轮事件
                // dragPanOptions:{
                //     enableKinetic:true,
                //     kineticInterval:0
                // }
            }),
            new OpenLayers.Control.PanZoomBar(),
            new OpenLayers.Control.ArgParser(),
            new OpenLayers.Control.Attribution(),
        ]
    });
    //加载山东天地图瓦片
    var sdtileUrl='http://www.sdmap.gov.cn/tileservice/SDPubMap';
    var sdTileLayer = new OpenLayers.Layer.EX_WMTSLayer("天地图山东矢量", sdtileUrl, {
        isBaseLayer: false,
        visibility: true
    });
    olmap.addLayer(sdTileLayer);
    olmap.setCenter(new OpenLayers.LonLat(119.00, 36.40), 7);
};
