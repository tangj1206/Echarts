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
        var x = ox + r * Math.sin(radians * i),
            y = oy + r * Math.cos(radians * i);

        point.push([Number(x.toFixed(2)), Number(y.toFixed(2))]); //为保持数据顺时针
    }
    return point;
}

var center = [885, 885],
    r = 200,
    r1 = 500,//区大圆半径
    r2 = 720,//机构大圆半径
    r3 = 300;

var points,
    points1 = [],
    points2 = [],
    points3 = [];

var lines1 = [];
var count1 = 16;
var areaRadius1 = 10;//区单个小圆半径
//区 - 点集
points1 = getPoint(r1, center[0], center[1], count1).map(function (item, index) {
    let angle = Math.PI * 2 / count1 * index;
    return {
        value: '区-' + index,
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

for (let i = 0; i < points1.length; i++) {
    let angle = Math.PI * 2 / count1 * i;
    let x = center[0] + (r1 - 20) * Math.cos(angle);
    let y = center[1] + (r1 - 20) * Math.sin(angle);
    let rx = areaRadius1 * Math.sin(angle);
    let ry = areaRadius1 * Math.cos(angle);

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



var lines2 = [];
var markLine2 = [];
var count2 = 56;
var areaRadius2 = 5;
//机构 - 点集
points2 = getPoint(r2, center[0], center[1], count2).map(function (item, index) {
    let angle = Math.PI * 2 / count2 * index;
    return {
        value: '区-' + index,
        label: {
            show: true,
            position: 'inside',
            fontSize: 26,
            offset: [60 * Math.sin(angle), 60 * Math.cos(angle)],
            rotate: 360 / count2 * index - 90
        },
        x: item[0],
        y: item[1]
    }
});

for (let i = 0; i < points2.length; i++) {
    let angle = Math.PI * 2 / count2 * i;
    let x = center[0] + (r2 ) * Math.cos(angle);
    let y = center[1] + (r2 ) * Math.sin(angle);
    let rx = areaRadius2 * Math.sin(angle);
    let ry = areaRadius2 * Math.cos(angle);

    markLine2.push([
        {
            x:center[0],
            y:center[1]
        },
        {
            x:x - rx,
            y:y + ry
        }
    ]);

    markLine2.push([
        {
            x:x + rx,
            y:y - ry
        },
        {
            x:center[0],
            y:center[1]
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





