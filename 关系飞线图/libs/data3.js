var colors = ['#007cff', '#42ca83'];
var symbol1 = 'image://./imgs/main1.png';//中心点图案
var symbol2 = 'image://./imgs/main2.png';//分点图案
var symbol3 = 'image://./imgs/main3.png';//分点图案
var tip = 'image://./imgs/tip.png';//数字显示框
var curveness = 0.1;
// lengend
var categories = [{
    name: '发送数据量(条)',
    icon: symbol1,
    textStyle: {
        fontSize: '14'
    }
}, {
    name: '接收数据量(条)',
    icon: symbol2,
    textStyle: {
        fontSize: '14'
    }
},
{
    name: '交换数据量(条)',
    icon: tip,
    textStyle: {
        fontSize: '14'
    }
}]

var data = null;

data = [
    {
        symbol: symbol1,
        symbolSize: 84,
        data:0,
        value: [4,1],
        name: '大数据中心'
    },
    {
        name: "人口库(前置)",
        speed: '50kb/s',
        symbol:symbol2,
        data:0,
        symbolSize:38,
        value: [10,1]
    },
    {
        name: "信用中心",
        speed: '50kb/s',
        symbol:symbol3,
        data:1083080,
        symbolSize:38,
        value: [10,1.9]
    },
    {
        name: "上海市信用查询平台",
        speed: '50kb/s',
        symbol:symbol3,
        data:1083080,
        symbolSize:28,
        value: [9,2.5]
    },

    {
        name: "总工会",
        speed: '50kb/s',
        symbol:symbol3,
        data:1201,
        symbolSize:38,
        value: [11.5,1.8]
    },
    {
        name: "民政",
        speed: '50kb/s',
        symbol:symbol3,
        data:329582,
        symbolSize:38,
        value: [12.5,1.6]
    },
    {
        name: "社区事务受理系统",
        speed: '50kb/s',
        symbol:symbol3,
        data:2807,
        symbolSize:28,
        value: [14,2]
    },

    {
        name: "ca中心",
        speed: '50kb/s',
        symbol:symbol3,
        data:47289,
        symbolSize:38,
        value: [13.2,1.2]
    },
    {
        name: "办公厅",
        speed: '50kb/s',
        symbol:symbol3,
        data:0.0,
        symbolSize:38,
        value: [13,0.8]
    },
    {
        name: "社保卡中心",
        speed: '50kb/s',
        symbol:symbol3,
        data:5405102,
        symbolSize:38,
        value: [12.5,0.4]
    },
    {
        name: "警辉",
        speed: '50kb/s',
        symbol:symbol3,
        data:211728,
        symbolSize:38,
        value: [11.2,0.2]
    },
    {
        name: "图书馆",
        speed: '50kb/s',
        symbol:symbol3,
        data:0,
        symbolSize:38,
        value: [9.8,0.1]
    },
    {
        name: "网上政务大厅",
        speed: '50kb/s',
        symbol:symbol3,
        data:27564,
        symbolSize:38,
        value: [8.5,0.2]
    },
    {
        name: "交通委",
        speed: '50kb/s',
        symbol:symbol3,
        data:136810,
        symbolSize:38,
        value: [7.5,0.5]
    },


    {
        name: "空间地理库(前置)",
        speed: '50kb/s',
        symbol:symbol2,
        data:0,
        symbolSize:38,
        value: [0,0]
    },
    {
        name: "电子证照库",
        speed: '50kb/s',
        symbol:symbol2,
        data:0,
        symbolSize:38,
        value: [0,1]
    },
    {
        symbol: symbol2,
        symbolSize: 44,
        data:0,
        value: [2,2],
        name: '法人库(前置)'
    },
    {
        name: "192.168.3.122",
        speed: '50kb/s',
        symbol:symbol3,
        data:2,
        symbolSize:38,
        value: [0.6,1.6]
    },
    {
        name: "172.27.93.43",
        speed: '50kb/s',
        symbol:symbol3,
        data:8556,
        symbolSize:38,
        value: [0,2]
    },
    {
        name: "10.101.59.9",
        speed: '50kb/s',
        symbol:symbol3,
        data:647,
        symbolSize:38,
        value: [0.5,2.5]
    },
    {
        name: "192.168.4.21",
        speed: '50kb/s',
        data:174687,
        symbol:symbol3,
        symbolSize:38,
        value: [2,2.6]
    }
]

var links = [
    {
        source:'大数据中心',
        target:'人口库(前置)',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'大数据中心',
        target:'法人库(前置)',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },

    {
        source:'大数据中心',
        target:'空间地理库(前置)',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'大数据中心',
        target:'电子证照库',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'法人库(前置)',
        target:'192.168.3.122',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'法人库(前置)',
        target:'172.27.93.43',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'法人库(前置)',
        target:'10.101.59.9',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'法人库(前置)',
        target:'192.168.4.21',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'信用中心',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'总工会',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'民政',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'ca中心',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'办公厅',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'社保卡中心',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'警辉',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'图书馆',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'网上政务大厅',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'人口库(前置)',
        target:'交通委',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'信用中心',
        target:'上海市信用查询平台',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    },
    {
        source:'民政',
        target:'社区事务受理系统',
        speed:'50kb',
        lineStyle: {
            normal: {
                color: colors[0],
                curveness: curveness,
            }
        }
    }
]

//数据显示框
var scatterData = [
    [2,2,7242356,0],
    [0,0,44435121,0],
    [0,1,0,0],
    [10,1,183888,0]
];


var linesData = [
    //数据中心-人口库
    {
        lineStyle: {
            normal: {
                color: colors[0]
            }
        },
        coords: [
            [4,1],
            [10,1]
        ]
    },
    {
        lineStyle: {
            normal: {
                color: colors[0]
            }
        },
        coords: [
            [10,1],
            [10,1.9]
        ]
    },

    {
        lineStyle: {
            normal: {
                color: colors[0]
            }
        },
        coords: [
            [10,1.9],
            [9,2.5]
        ]
    },
    {
        lineStyle: {
            normal: {
                color: colors[0]
            }
        },
        coords: [
            [10,1],
            [12.5,1.6]
        ]
    },
    {
        lineStyle: {
            normal: {
                color: colors[0]
            }
        },
        coords: [
            [12.5,1.6],
            [14,2]
        ]
    }
];







