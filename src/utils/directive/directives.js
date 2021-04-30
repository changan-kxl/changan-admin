// 添加全局自定义指令
const directives = {
    /**v-has:控制权限按钮是否显示 */
    has: {
        mounted: (el, binding, vnode)=>{
            filterGlobalPermission(el, binding, vnode);
        }
    }
}


/**
 * 按钮全局权限控制
 */
 const filterGlobalPermission = (el, binding, vnode) => {
    let permissionList = [];
    // let authList = JSON.parse(localStorage.getItem('LOGIN_USER_BUTTON_AUTH') || "[]");
    let authList = [
        {
            "checked":false,
            "component":"",
            "createTime":"2019-06-29 18:21:06",
            "createUser":"026a564bbfd84861ac4b65393644beef",
            "icon":"",
            "id":"1503273153861066776",
            "name":"今日采集（案卷）",
            "open":"true",
            "parentId":"2328050996633395469",
            "parentName":"首页",
            "permission":"sys:index:vol",
            "sort":103,
            "status":"0",
            "type":"2",
            "updateTime":"2021-01-27 15:51:15",
            "updateUser":"026a564bbfd84861ac4b65393644beef",
            "url":""
        }
    ]
    
    for (let auth of authList) {
        permissionList.push(auth);
    }
    if (!permissionList.length) {
        el.parentNode.removeChild(el);
        return;
    }
    let permissions = [];
    for (let item of permissionList) {
        permissions.push(item.permission);
    }
    if (!permissions.includes(binding.value)) {
        el.remove();
    }
}
export default directives;
