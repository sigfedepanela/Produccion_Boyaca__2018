var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Boyaca_1 = new ol.format.GeoJSON();
var features_Boyaca_1 = format_Boyaca_1.readFeatures(json_Boyaca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boyaca_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Boyaca_1.addFeatures(features_Boyaca_1);var lyr_Boyaca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boyaca_1, 
                style: style_Boyaca_1,
                title: '<img src="styles/legend/Boyaca_1.png" /> Boyaca'
            });var format_ProduccindePanelaTon_2 = new ol.format.GeoJSON();
var features_ProduccindePanelaTon_2 = format_ProduccindePanelaTon_2.readFeatures(json_ProduccindePanelaTon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduccindePanelaTon_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ProduccindePanelaTon_2.addFeatures(features_ProduccindePanelaTon_2);var lyr_ProduccindePanelaTon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduccindePanelaTon_2, 
                style: style_ProduccindePanelaTon_2,
    title: 'Producción de Panela (Ton)<br />\
    <img src="styles/legend/ProduccindePanelaTon_2_0.png" />  70 - 270 <br />\
    <img src="styles/legend/ProduccindePanelaTon_2_1.png" />  270 - 1590 <br />\
    <img src="styles/legend/ProduccindePanelaTon_2_2.png" />  1590 - 28520 <br />\
    <img src="styles/legend/ProduccindePanelaTon_2_3.png" />  28520 - 35520 <br />\
    <img src="styles/legend/ProduccindePanelaTon_2_4.png" />  35520 - 39980 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Boyaca_1.setVisible(true);lyr_ProduccindePanelaTon_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Boyaca_1,lyr_ProduccindePanelaTon_2];
lyr_Boyaca_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', 'No': 'No', });
lyr_ProduccindePanelaTon_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/Ha)': 'REND.(Ton/Ha)', });
lyr_Boyaca_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', 'No': 'Range', });
lyr_ProduccindePanelaTon_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/Ha)': 'TextEdit', });
lyr_Boyaca_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', 'No': 'inline label', });
lyr_ProduccindePanelaTon_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/Ha)': 'inline label', });
lyr_ProduccindePanelaTon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});