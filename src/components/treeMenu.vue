<template>
<div>
    <my-tree
        :data="theData"
        :name="menuName"
        :loading="loading"
        @getSubMenu="getSubMenu"
    />
</div>
</template>
<script>
import myTree from  "./treeMenu/index"
export default {
    data() {
        return {
            theData: [
                {
                    id: '1',
                    menuName: '基础管理',
                    menuCode: '10',
                    children: [
                        {
                        menuName: '用户管理',
                        menuCode: '11'
                        },
                        {
                        id: '12',
                        menuName: '角色管理',
                        menuCode: '12',
                        children: [
                            {
                            menuName: '管理员',
                            menuCode: '121',
                                children: [
                                {
                                menuName: '女',
                                menuCode: '1231'
                                },
                                {
                                menuName: '男',
                                menuCode: '1232'
                                }
                            ]
                            },
                            {
                            menuName: 'CEO',
                            menuCode: '122'
                            },
                            {
                            menuName: 'CFO',
                            menuCode: '123'
                            },
                            {
                            menuName: 'COO',
                            menuCode: '124'
                            },
                            {
                            menuName: '普通人',
                            menuCode: '124'
                            }
                        ]
                        },
                        {
                        menuName: '权限管理',
                        menuCode: '13'
                        }
                    ]
                },
                {
                    id: '2',
                    menuName: '商品管理',
                    menuCode: '',
                    children: [
                    {
                    menuName: '商品一',
                    menuCode: '21'
                    },
                    {
                    id: '22',
                    menuName: '商品二',
                    menuCode: '22',
                    children: [
                        {
                        menuName: '子类商品1',
                        menuCode: '221'
                        },
                        {
                        menuName: '子类商品2',
                        menuCode: '222'
                        }
                    ]
                    }
                ]
                },
                {
                    id: '3',
                    menuName: '订单管理',
                    menuCode: '30',
                    children: [
                    {
                        menuName: '订单列表',
                        menuCode: '31'
                    },
                    {
                        menuName: '退货列表',
                        menuCode: '32',
                        children: []
                    }
                    ]
                },
                {
                    id: '4',
                    menuName: '商家管理',
                    menuCode: '',
                    children: []
                }
            ],
            menuName: "menuName", // 显示菜单的名称属性
            loading: false
        }
    },
    components: {
        myTree
    },
    methods: {
        getSubMenu(menuItem, callback) {
            console.log(menuItem)
        }
    }
}
</script>