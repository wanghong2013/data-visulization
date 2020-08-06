/* 节点列表 */
const flowNodeList = [
    { value: 1, label: "1级节点" },
    { value: 2, label: "2级节点" },
    { value: 3, label: "3级节点" },
    { value: 4, label: "4级节点" },
    { value: 5, label: "5级节点" },
    { value: 6, label: "6级节点" }
]

/* 矩形连接点 */
const anchorPoints = [
    [0, 0.5],
    [0.5, 0],
    [0.5, 1],
    [1, 0.5],
];
/* 灵性连接点 */
const linkPoints = [
    [0, 0.5],
    [1, 0.5]
];
/* 禁用节点样式 */
const disableElement = {
    opacity: 1, // 边透明度
    stroke: 'grey', // 边描边颜色
    fill: '#eee',
};
/* 升级 连线样式 */
const lineActive = {
    style: {
        cursor: 'pointer',
    },
    labelCfg: {
        cursor: 'pointer',
    }
}


/* 节点数据 */
const nodes = [{
        id: 'node0', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 25, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '开始',
        anchorPoints: anchorPoints,
        nodeLevel: -1,
        style: disableElement,

    }, {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 300, // Number，可选，节点位置的 x 值
        y: 125, // Number，可选，节点位置的 y 值
        type: 'dom-node',
        label: '1级节点',
        nodeLevel: 1,
        flowNodeType: "1",
        isActive: true,
        anchorPoints: anchorPoints,
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node1-1', // String，该节点存在则必须，节点的唯一标识
        x: 200, // Number，可选，节点位置的 x 值
        y: 125, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '跳转条件',
        nodeLevel: 1,
        linkPoints: linkPoints,
        isActive: true,
        flowNodeType: "3",
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },

    {
        id: 'node1-2', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 125, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        nodeLevel: 1,
        flowNodeType: "4",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node1-3', // String，该节点存在则必须，节点的唯一标识
        x: 700, // Number，可选，节点位置的 x 值
        y: 125, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '诉讼流程',
        nodeLevel: 1,
        anchorPoints: anchorPoints,
        style: disableElement
    },


    {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 225, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '2级节点',
        nodeLevel: 2,
        anchorPoints: anchorPoints,
        isActive: true,
        flowNodeType: "1",
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node2-1', // String，该节点存在则必须，节点的唯一标识
        x: 200, // Number，可选，节点位置的 x 值
        y: 225, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '跳转条件',
        nodeLevel: 2,
        linkPoints: linkPoints,
        isActive: true,
        flowNodeType: "3",
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node2-2', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 225, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        nodeLevel: 2,
        flowNodeType: "4",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node3', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 325, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '3级节点',
        anchorPoints: anchorPoints,
        isActive: true,
        nodeLevel: 3,
        flowNodeType: "1",
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node3-1', // String，该节点存在则必须，节点的唯一标识
        x: 200, // Number，可选，节点位置的 x 值
        y: 325, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '跳转条件',
        nodeLevel: 3,
        linkPoints: linkPoints,
        isActive: true,
        flowNodeType: "3",
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node3-2', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 325, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        nodeLevel: 3,
        flowNodeType: "4",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node4', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 425, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '4级节点',
        anchorPoints: anchorPoints,
        isActive: true,
        nodeLevel: 4,
        flowNodeType: "1",
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node4-1', // String，该节点存在则必须，节点的唯一标识
        x: 50, // Number，可选，节点位置的 x 值
        y: 425, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '跳转',

        anchorPoints: anchorPoints,
        size: [60, 30],
        style: disableElement
    },
    {
        id: 'node4-2', // String，该节点存在则必须，节点的唯一标识
        x: 200, // Number，可选，节点位置的 x 值
        y: 425, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '跳转条件',
        isActive: true,
        nodeLevel: 4,
        flowNodeType: "3",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node4-3', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 425, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        nodeLevel: 4,
        isActive: true,
        flowNodeType: "4",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node5', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 525, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '5级节点',
        anchorPoints: anchorPoints,
        isActive: true,
        nodeLevel: 5,
        flowNodeType: "1",
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node5-1', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 525, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        nodeLevel: 5,
        flowNodeType: "4",
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                stroke: "red",
            }
        }
    },

    {
        id: 'node6', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 625, // Number，可选，节点位置的 y 值
        type: 'rect',
        label: '6级节点',
        anchorPoints: anchorPoints,
        isActive: true,
        nodeLevel: 6,
        flowNodeType: "1",
        style: {
            cursor: 'pointer',
        },
        labelCfg: {
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },
    {
        id: 'node6-1', // String，该节点存在则必须，节点的唯一标识
        x: 500, // Number，可选，节点位置的 x 值
        y: 625, // Number，可选，节点位置的 y 值
        type: 'diamond',
        label: '诉讼条件',
        isActive: true,
        flowNodeType: "4",
        nodeLevel: 6,
        linkPoints: linkPoints,
        size: [100, 50],
        style: {
            cursor: 'pointer',
        },
        stateStyles: {
            active: {
                fill: '#d3adf7',
            }
        }
    },

];

/* 边 数据 */
const edges = [{
        source: 'node0', // String，必须，起始点 id
        target: 'node1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: -1,
    },
    {
        source: 'node1', // String，必须，起始点 id
        target: 'node2', // String，必须，目标点 id
        type: 'line',
        label: "升级",
        isActive: true,
        flowNodeType: "2",
        nodeLevel: 1,
        labelCfg: {
            position: 'center',
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                stroke: '#d3adf7',
            }
        }
    },
    {
        source: 'node1', // String，必须，起始点 id
        target: 'node1-1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 1,
        sourceAnchor:0,
        targetAnchor:1,
    },
    {
        source: 'node1-1', // String，必须，起始点 id
        target: 'node4-1', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 1,
        controlPoints: [{
            x: 70,
            y: 125,
        }, {
            x: 50,
            y: 125,
        }, ]

    },
    {
        source: 'node1', // String，必须，起始点 id
        target: 'node1-2', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 1,
    },
    {
        source: 'node1-2', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 1,
    },
    {
        source: 'node2', // String，必须，起始点 id
        target: 'node3', // String，必须，目标点 id
        type: 'line',
        label: "升级",
        isActive: true,
        flowNodeType: "2",
        nodeLevel: 2,
        labelCfg: {
            position: 'center',
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                stroke: '#d3adf7',
            }
        }
    },
    {
        source: 'node2', // String，必须，起始点 id
        target: 'node2-1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 2,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node2', // String，必须，起始点 id
        target: 'node2-2', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 2,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node2-1', // String，必须，起始点 id
        target: 'node4-1', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 2,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 70,
            y: 225,
        }, {
            x: 50,
            y: 225,
        }, ]
    },
    {
        source: 'node2-2', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 2,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 500,
            y: 225,
        }, {
            x: 700,
            y: 225,
        }, ]
    },
    {
        source: 'node3', // String，必须，起始点 id
        target: 'node4', // String，必须，目标点 id
        type: 'polyline',
        label: "升级",
        nodeLevel: 3,
        isActive: true,
        flowNodeType: "2",
        labelCfg: {
            position: 'center',
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                stroke: '#d3adf7',
            }
        },

        controlPoints: [{
            x: 425,
            y: 325,
        }, {
            x: 425,
            y: 375,
        }, {
            x: 350,
            y: 375,
        }, ]
    },

    {
        source: 'node3', // String，必须，起始点 id
        target: 'node3-1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 3,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node3', // String，必须，起始点 id
        target: 'node3-2', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 3,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node3-1', // String，必须，起始点 id
        target: 'node4-1', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 3,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 70,
            y: 325,
        }, {
            x: 50,
            y: 325,
        }, ]
    },

    {
        source: 'node3-2', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 3,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 500,
            y: 325,
        }, {
            x: 700,
            y: 325,
        }, ]
    },


    {
        source: 'node4-1', // String，必须，起始点 id
        target: 'node5', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        },
        controlPoints: [{
            x: 50,
            y: 325,
        }, {
            x: 50,
            y: 525,
        }, ]
    },
    {
        source: 'node4-1', // String，必须，起始点 id
        target: 'node6', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        },
        controlPoints: [{
            x: 50,
            y: 625,
        }, {
            x: 50,
            y: 625,
        }, ]
    },
    {
        source: 'node4-1', // String，必须，起始点 id
        target: 'node3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        },
        controlPoints: [{
                x: 120,
                y: 425,
            },
            {
                x: 120,
                y: 370,
            },
            {
                x: 350,
                y: 370,
            }
        ]
    },
    {
        source: 'node4-1', // String，必须，起始点 id
        target: 'node4', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        },
        controlPoints: [{
                x: 50,
                y: 425,
            },
            {
                x: 50,
                y: 470,
            },
            {
                x: 350,
                y: 470,
            }
        ]
    },
    {
        source: 'node4', // String，必须，起始点 id
        target: 'node4-2', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node4', // String，必须，起始点 id
        target: 'node4-3', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node4-2', // String，必须，起始点 id
        target: 'node4-1', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node4-2', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 4,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 500,
            y: 425,
        }, {
            x: 700,
            y: 425,
        }, ]
    },

    {
        source: 'node4', // String，必须，起始点 id
        target: 'node5', // String，必须，目标点 id
        type: 'polyline',
        label: "升级",
        isActive: true,
        flowNodeType: "2",
        nodeLevel: 4,
        labelCfg: {
            position: 'center',
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                stroke: '#d3adf7',
            }
        },
        controlPoints: [{
                x: 420,
                y: 425,
            }, {
                x: 420,
                y: 480,
            },
            {
                x: 350,
                y: 480,
            }
        ]

    },
    {
        source: 'node5', // String，必须，起始点 id
        target: 'node6', // String，必须，目标点 id
        type: 'line',
        label: "升级",
        isActive: true,
        flowNodeType: "2",
        nodeLevel: 5,
        labelCfg: {
            position: 'center',
            style: {
                cursor: 'pointer',
            }
        },
        stateStyles: {
            active: {
                stroke: '#d3adf7',
            }
        }
    },
    {
        source: 'node5', // String，必须，起始点 id
        target: 'node5-1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 5,
        labelCfg: {
            position: 'center',

        },

    },
    {
        source: 'node5-1', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 5,
        labelCfg: {
            position: 'center',

        },
        controlPoints: [{
            x: 500,
            y: 525,
        }, {
            x: 700,
            y: 525,
        }, ]
    },
    {
        source: 'node6', // String，必须，起始点 id
        target: 'node6-1', // String，必须，目标点 id
        type: 'line',
        nodeLevel: 6,
        labelCfg: {
            position: 'center',

        }
    },
    {
        source: 'node6-1', // String，必须，起始点 id
        target: 'node1-3', // String，必须，目标点 id
        type: 'polyline',
        nodeLevel: 6,
        labelCfg: {
            position: 'center',
        },
        controlPoints: [{
            x: 500,
            y: 625,
        }, {
            x: 700,
            y: 625,
        }, ]
    },
]


export {
    flowNodeList,
    nodes,
    edges
}
