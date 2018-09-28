// 数据模拟
var QUTotal = [];//区总数
var JGTotal = [];//机构总数

for (let i = 0; i < 16; i++) {
    QUTotal.push('区-' + i);
}

for (let i = 0; i < 56; i++) {
    JGTotal.push('机构-' + i);
}

var center = [885, 885],//坐标中心点
    r1 = 500,//区大圆半径
    r2 = 720;//机构大圆半径

//飞线偏离半径
var QUPointRadius = 10,
    JGPointRadius = 15;

//label 偏移量
var QULabelOffset = 70,
    JGLabelOffset = 60;

var QUPoints = {};//区坐标分配
var JGPoints = {};//机构坐标分配

var QULine = [],
    QUMarkLines = [],
    QUMarkPoint = [],
    JGLine = [],
    JGMarkLines = [],
    JGMarkPoint = [];

/*
* 求圆周上等分点的坐标
* ox,oy为圆心坐标
* r为半径
* count为等分个数
*/
function getPoint(r, ox, oy, count) {
    var point = [];
    var radians = (Math.PI * 2 / count), //弧度
        i = 0;
    for (; i < count; i++) {
        var x = ox + r * Math.cos(radians * i),
            y = oy + r * Math.sin(radians * i);

        point.push([x, y]); //为保持数据顺时针
    }
    return point;
}

/**
 * 初始化区、机构坐标
 * 说明：1、根据总数分配圆坐标 数据结构为 key:[x,y]
 * 2、计算MarkPoint
 */
function initPoints() {
    QUMarkPoint = getPoint(r1, center[0], center[1], QUTotal.length).map(function (item, index) {
        let angle = Math.PI * 2 / QUTotal.length * index;
        QUPoints[QUTotal[index]] = { 'angle': angle, 'value': item };
        return {
            value: QUTotal[index],
            symbolRotate: -360 / QUTotal.length * index - 90,
            label: {
                offset: [QULabelOffset * Math.cos(angle), QULabelOffset * Math.sin(angle)],
                rotate: -360 / QUTotal.length * index -180
            },
            x: item[0],
            y: item[1]
        }
    })

    JGMarkPoint=getPoint(r2, center[0], center[1], JGTotal.length).map(function (item, index) {
        let angle = Math.PI * 2 / JGTotal.length * index;
        JGPoints[JGTotal[index]] = { 'angle': angle, 'value': item };
        return {
            value: JGTotal[index],
            symbolRotate: -360 / JGTotal.length * index - 90,
            label: {
                offset: [JGLabelOffset * Math.cos(angle), JGLabelOffset * Math.sin(angle)],
                rotate: -360 / JGTotal.length * index -180
            },
            x: item[0],
            y: item[1]
        }
    })
}
/**
 * 计算MarkLine
 */
function initMarkLine() {
    for (let i = 0; i < QUMarkPoint.length; i++) {
        let angle = Math.PI * 2 / QUTotal.length * i;
        let x = center[0] + (r1 - 20) * Math.cos(angle);
        let y = center[1] + (r1 - 20) * Math.sin(angle);
        let rx = QUPointRadius * Math.sin(angle);
        let ry = QUPointRadius * Math.cos(angle);
        QUMarkLines.push([
            {
                x: center[0],
                y: center[1]
            },
            {
                x: x - rx,
                y: y + ry
            }
        ]);

        QUMarkLines.push([
            {
                x: x + rx,
                y: y - ry
            },
            {
                x: center[0],
                y: center[1]
            }
        ]);
    }

    for (let i = 0; i < JGMarkPoint.length; i++) {
        let angle = Math.PI * 2 / JGTotal.length * i;
        let x = center[0] + (r2 - 20) * Math.cos(angle);
        let y = center[1] + (r2 - 20) * Math.sin(angle);
        let rx = JGPointRadius * Math.sin(angle);
        let ry = JGPointRadius * Math.cos(angle);
        JGMarkLines.push([
            {
                x: center[0],
                y: center[1]
            },
            {
                x: x - rx,
                y: y + ry
            }
        ]);

        JGMarkLines.push([
            {
                x: x + rx,
                y: y - ry
            },
            {
                x: center[0],
                y: center[1]
            }
        ]);
    }
}

var QUlinks = [
    {
        source: '大数据中心',
        target: '区-0'
    },
    {
        source: '区-0',
        target: '大数据中心'
    }
]

var JGlinks = [
    {
        source: '大数据中心',
        target: '机构-12'
    },
    {
        source: '机构-20',
        target: '大数据中心'
    }
]
/**
 * 刷新飞线图数据
 */
function updateLines(QUlinks,JGlinks) {
    QUlinks.map(function (item, index) {
        let angle = item.source != '大数据中心' ? QUPoints[item.source].angle : QUPoints[item.target].angle;
        let x = center[0] + (r1 - 20) * Math.cos(angle);
        let y = center[1] + (r1 - 20) * Math.sin(angle);
        let rx = QUPointRadius * Math.sin(angle);
        let ry = QUPointRadius * Math.cos(angle);
        if(item.source == '大数据中心'){
            QULine.push({
                coords: [
                    center,
                    [x - rx, y + ry]
                ]
            })
        }else{
            QULine.push({
                coords: [
                    [x + rx, y - ry],
                    center
                ]
            })
        }
        
    })

    JGlinks.map(function (item, index) {
        let angle = item.source != '大数据中心' ? JGPoints[item.source].angle : JGPoints[item.target].angle;
        let x = center[0] + (r2 - 20) * Math.cos(angle);
        let y = center[1] + (r2 - 20) * Math.sin(angle);
        let rx = JGPointRadius * Math.sin(angle);
        let ry = JGPointRadius * Math.cos(angle);
        if(item.source == '大数据中心'){
            JGLine.push({
                coords: [
                    center,
                    [x - rx, y + ry]
                ]
            })
        }else{
            JGLine.push({
                coords: [
                    [x + rx, y - ry],
                    center
                ]
            })
        }
        
    })
}

/**
 * 初始化大图
 * 说明：为绘制大图做初始化准备1、后台获取数据 2、初始化点
 */
function initBigCircle() {
    initPoints();
    initMarkLine();
}

initBigCircle();
updateLines(QUlinks,JGlinks);


var points1 = [];
var lines1 = [];
var count1 = 16;
var markLine1 = [];
var areaRadius1 = 10;//区单个小圆半径
//区 - 点集
points1 = getPoint(r1, center[0], center[1], count1).map(function (item, index) {
    let angle = Math.PI * 2 / count1 * index;
    return {
        value: '区-' + index,
        symbolRotate: 360 / count1 * index - 180,
        label: {
            show: true,
            position: 'inside',
            fontSize: 26,
            offset: [60 * Math.sin(angle), 60 * Math.cos(angle)],
            rotate: 360 / count1 * index - 90
        },
        x: item[0],
        y: item[1]
    }
});

for (let i = 0; i < 2; i++) {
    let angle = Math.PI * 2 / count1 * i;
    let x = center[0] + (r1 - 20) * Math.cos(angle);
    let y = center[1] + (r1 - 20) * Math.sin(angle);
    let rx = areaRadius1 * Math.sin(angle);
    let ry = areaRadius1 * Math.cos(angle);
    markLine1.push([
        {
            x: center[0],
            y: center[1]
        },
        {
            x: x - rx,
            y: y + ry
        }
    ]);

    markLine1.push([
        {
            x: x + rx,
            y: y - ry
        },
        {
            x: center[0],
            y: center[1]
        }
    ]);

    lines1.push({
        coords: [
            center,
            [x - rx, y + ry]
        ]
    })
    lines1.push({
        coords: [
            [x + rx, y - ry],
            center
        ]
    })
}


var points2 = [];
var lines2 = [];
var markLine2 = [];
var count2 = 56;
var areaRadius2 = 5;
//机构 - 点集
points2 = getPoint(r2, center[0], center[1], count2).map(function (item, index) {
    let angle = Math.PI * 2 / count2 * index;
    return {
        value: '机构-' + index,
        label: {
            show: true,
            position: 'inside',
            fontSize: 26,
            offset: [40 * Math.sin(angle), 40 * Math.cos(angle)],
            rotate: 360 / count2 * index - 90
        },
        x: item[0],
        y: item[1]
    }
});

for (let i = 0; i < points2.length; i++) {
    let angle = Math.PI * 2 / count2 * i;
    let x = center[0] + (r2 - 15) * Math.cos(angle);
    let y = center[1] + (r2 - 15) * Math.sin(angle);
    let rx = areaRadius2 * Math.sin(angle);
    let ry = areaRadius2 * Math.cos(angle);

    markLine2.push([
        {
            x: center[0],
            y: center[1]
        },
        {
            x: x - rx,
            y: y + ry
        }
    ]);

    markLine2.push([
        {
            x: x + rx,
            y: y - ry
        },
        {
            x: center[0],
            y: center[1]
        }
    ]);

    lines2.push({
        coords: [
            center,
            [x - rx, y + ry]
        ]
    })
    lines2.push({
        coords: [
            [x + rx, y - ry],
            center
        ]
    })

}





