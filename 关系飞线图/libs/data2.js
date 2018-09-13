var colors = ['#ff6801', '#42ca83'];
var centerSymbol = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABeCAYAAABB5RhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNGOTUxRjI4QjBCQjExRTg5MDM5OTVBNTRBNTFCNDU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNGOTUxRjI5QjBCQjExRTg5MDM5OTVBNTRBNTFCNDU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0Y5NTFGMjZCMEJCMTFFODkwMzk5NUE1NEE1MUI0NTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y5NTFGMjdCMEJCMTFFODkwMzk5NUE1NEE1MUI0NTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4g9G6tAAAc6ElEQVR42uRd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';
var itemSymbol = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNjkyMUMyQjBCQTExRTg4QzEyQTk1NzVFMTBBM0YwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNjkyMUMzQjBCQTExRTg4QzEyQTk1NzVFMTBBM0YwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM2OTIxQzBCMEJBMTFFODhDMTJBOTU3NUUxMEEzRjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM2OTIxQzFCMEJBMTFFODhDMTJBOTU3NUUxMEEzRjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qB9KxAAARBUlEQVR42tSc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';


var point = [];
/*
* 求圆周上等分点的坐标
* ox,oy为圆心坐标
* r为半径
* count为等分个数
*/
function getPoint(r, ox, oy, count) {
    var radians = (Math.PI / 180) * Math.round(360 / count), //弧度
        i = 0;
    for (; i < count; i++) {
        var x = ox + r * Math.sin(radians * i),
            y = oy + r * Math.cos(radians * i);

        point.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) }); //为保持数据顺时针
    }
}

var targetCoord = [0, 0];
var curveness = 0.1;

//数据中心
var item;
item = {
    name: "数据中心",
    value: targetCoord,
    symbol: centerSymbol,
    symbolSize: 94,
    label: {
        normal: {
            color: '#fff',
            fontSize: '14'
        }
    }
}

var r = 0.5,
    ox = targetCoord[0],
    oy = targetCoord[1];

// lengend
var categories = [{
    name: '发送数据量(条)',
    icon: centerSymbol,
    textStyle: {
        fontSize: '14'
    }
}, {
    name: '接收数据量(条)',
    icon: itemSymbol,
    textStyle: {
        fontSize: '14'
    }
},
{
    name: '交换数据量(条)',
    icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABBCAYAAABYUhMgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE2NEI4RjI1QjBCQTExRTg4MTZBRjE0RTUxQjA2QTY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE2NEI4RjI2QjBCQTExRTg4MTZBRjE0RTUxQjA2QTY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTY0QjhGMjNCMEJBMTFFODgxNkFGMTRFNTFCMDZBNjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTY0QjhGMjRCMEJBMTFFODgxNkFGMTRFNTFCMDZBNjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ulUk3AAABDklEQVR42uzczwmCYBjAYY0OztAeLVBnZ3CRbrZIM3RuAd3DGTqmpPAh/fvIMOH5QYRGl4fPF09vuqvK5EHnRD9t/eK3HM/7LttD9H/29fG8QvcfJ34YMVvj5uPTG/N05K9GTd6jGzUTjppuvITXRs2Mo2YTXGf9dTa6ry9GTftUNON7TvxMgQcPXuDBCzx4gQcv8OAFHjx4BODBCzx4gQcv8OAFHrzAgwcv8OAFHrzAgxd48AIPXuDBgxd48AIPXuDBC/zCSndVGS4EOrWfov/WdF2T+563erjxbP1hwWq6ug1N3U6ycBmcUWPGgxd48Jq47q2mGb32NFii3lic+KWd+HGWOUcUs9Q57CbAAOtRJ2ksaJrTAAAAAElFTkSuQmCC',
    textStyle: {
        fontSize: '14'
    }
}]

//原始数据
var orignData;

//获取平台原始数据
function getOrignData() {
    orignData = {
        items: [
            {
                name: "子平台1",
                input: Math.round(Math.random()*1000),
                output: Math.round(Math.random()*1000),
                inputIncrement: true,
                onputIncrement: true,
                speed: '50kb/s'
            },
            {
                name: "子平台2",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            },
            {
                name: "子平台3",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            },
            {
                name: "子平台4",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            },
            {
                name: "子平台5",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            }, {
                name: "子平台6",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            }, {
                name: "子平台7",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            }, {
                name: "子平台8",
                input: 100,
                output: 100,
                inputIncrement: Boolean(Math.round(Math.random())),
                onputIncrement: Boolean(Math.round(Math.random())),
                speed: '50kb/s'
            }]
    }
}


// 初始化各个平台
var items;
var data;
function initItems() {
    items = orignData.items.map(function (el, index) {
        return {
            name: el.name,
            value: [point[index].x, point[index].y],
            symbol: itemSymbol,
            symbolSize: 68,
            input:el.input,
            output:el.output,
            inputIncrement: el.inputIncrement,
            onputIncrement: el.onputIncrement,
            speed: el.speed
        }
    })
    data = items.concat([item]);
}

//关系数据
var links = [];
function initLinks(){
    items.forEach(function (el, index) {
        links.push({
            source: item.name,
            target: el.name,
            speed: el.speed,
            lineStyle: {
                normal: {
                    color: colors[0],
                    curveness: curveness,
                }
            }
        });
        links.push({
            source: el.name,
            target: item.name,
            speed: el.speed,
            lineStyle: {
                normal: {
                    color: colors[1],
                    curveness: curveness,
                }
            }
        });
    })
}

var linesData = [];
//流动数据绘制
function linesUpdate(){
    linesData = [];
    items.forEach(function (el) {
        if (el.inputIncrement && el.onputIncrement) {
            linesData.push({
                lineStyle: {
                    normal: {
                        color: colors[0]
                    }
                },
                coords: [
                    targetCoord,
                    el.value
                ]
            })
            linesData.push({
                lineStyle: {
                    normal: {
                        color: colors[1]
                    }
                },
                coords: [
                    el.value,
                    targetCoord
                ]
            })
        }
        else if (el.inputIncrement && !el.onputIncrement) {
            linesData.push({
                lineStyle: {
                    normal: {
                        color: colors[0]
                    }
                },
                coords: [
                    targetCoord,
                    el.value
                ]
            })
        }
        else if (!el.inputIncrement && el.onputIncrement) {
            linesData.push({
                lineStyle: {
                    normal: {
                        color: colors[1]
                    }
                },
                coords: [
                    el.value,
                    targetCoord
                ]
            })
        }
    })
}





//数据显示框
var scatterData = [];
function initScatter() {
    scatterData = orignData.items.map(function (item, index) {
        var x = point[index].x,
            y = point[index].y;
        return [x, y].concat([item.input, item.output]);
    })
}
