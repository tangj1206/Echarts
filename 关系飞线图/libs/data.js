var colors = ['#ff6801', '#42ca83'];

function getColorPalette(i) {
    return colors[i];
}

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


/************** 关系图数据处理部分 *************** */

// 关系图原始数据
var total = 8;
var center = [0, 0];


var nodes = [
    {
        name: "市发改委",
        active: true,
        value: [100, 200]
    },
    {
        name: "经信委",
        value: [200, 300]
    },
    {
        name: "市教委",
        value: [300, 400]
    },
    {
        name: "市民政局",
        value: [500, 600]
    },
    {
        name: "市交通委",
        value: [700, 800]
    },
    {
        name: "市司法局",
        value: [700, 800]
    },
    {
        name: "市人保局",
        value: [700, 800]
    },
    {
        name: "市水务局",
        value: [700, 800]
    }
]



var r = 0.5,
    ox = center[0],
    oy = center[1],
    count = total;

//等分圆
getPoint(r, ox, oy, total);

//关系图数据格式化
var graphData = [];
function initGraph() {
    graphData = [];
    graphData = nodes.map(function (item, index) {
        var x = point[index].x,
            y = point[index].y;
        return {
            name: item.name,
            value: [x, y].concat([item.value[0], item.value[1]]),
            symbol: 'image://../imgs/main2.png',
            symbolSize: 68
        }
    })
}


/*************************** scatter数据处理 *********************************/

// scatter 数据格式化
var scatterData = [];
function initScatter() {
    scatterData = [];
    scatterData = nodes.map(function (item, index) {
        var x = point[index].x,
            y = point[index].y;
        return [x, y].concat([item.value[0], item.value[1]]);
    })
}


/*******************   飞线图数据处理   ****************** */

// 飞线图线条公共样式
var getLinesStyle = function (colorIndex) {
    return {
        normal: {
            color: function () {
                return getColorPalette(colorIndex);
            }()
        }
    }
}

//飞线图数据处理
var linesData;
function initLines() {
    linesData = [];
    nodes.forEach(function (item, index) {
        var x = point[index].x,
            y = point[index].y;
        if (item.active) {
            linesData.push({
                lineStyle: getLinesStyle(0),
                coords: [
                    center,
                    [x, y].concat([item.value[0], item.value[1]])
                ]
            },
                {
                    lineStyle: getLinesStyle(1),
                    coords: [
                        [x, y].concat([item.value[0], item.value[1]]),
                        center
                    ]
                });
        }

    })
}


