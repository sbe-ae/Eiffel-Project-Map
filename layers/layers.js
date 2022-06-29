var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Arrays_1 = new ol.format.GeoJSON();
var features_Arrays_1 = format_Arrays_1.readFeatures(json_Arrays_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrays_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrays_1.addFeatures(features_Arrays_1);
var lyr_Arrays_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arrays_1, 
                style: style_Arrays_1,
                interactive: true,
                title: '<img src="styles/legend/Arrays_1.png" /> Arrays'
            });
var format_20220426_FenceCAD_2 = new ol.format.GeoJSON();
var features_20220426_FenceCAD_2 = format_20220426_FenceCAD_2.readFeatures(json_20220426_FenceCAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220426_FenceCAD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220426_FenceCAD_2.addFeatures(features_20220426_FenceCAD_2);
var lyr_20220426_FenceCAD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220426_FenceCAD_2, 
                style: style_20220426_FenceCAD_2,
                interactive: true,
                title: '<img src="styles/legend/20220426_FenceCAD_2.png" /> 20220426_Fence CAD'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_Arrays_1.setVisible(true);lyr_20220426_FenceCAD_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Arrays_1,lyr_20220426_FenceCAD_2];
lyr_Arrays_1.set('fieldAliases', {'AREA': 'AREA', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', });
lyr_20220426_FenceCAD_2.set('fieldAliases', {'AREA': 'AREA', 'LAYER': 'LAYER', 'LINETYPE': 'LINETYPE', });
lyr_Arrays_1.set('fieldImages', {'AREA': '', 'LAYER': '', 'LENGTH': '', });
lyr_20220426_FenceCAD_2.set('fieldImages', {'AREA': '', 'LAYER': '', 'LINETYPE': '', });
lyr_Arrays_1.set('fieldLabels', {'AREA': 'no label', 'LAYER': 'inline label', 'LENGTH': 'no label', });
lyr_20220426_FenceCAD_2.set('fieldLabels', {'AREA': 'no label', 'LAYER': 'inline label', 'LINETYPE': 'no label', });
lyr_20220426_FenceCAD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});