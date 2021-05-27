/**
 * 按钮全局权限控制
 */
const filterGlobalPermission = (el, binding, vnode) => {
  // 假设只有superAdmin-超级管理员权限
  let permissionList = ['superAdmin'];

  if (!permissionList.length) {
    el.parentNode.removeChild(el);
    return;
  }

  if (!permissionList.includes(binding.value)) {
    el.remove();
  }
};

// 添加全局自定义指令
const directives = {
  /**v-has:控制权限按钮是否显示 */
  has: {
    mounted: (el, binding, vnode) => {
      filterGlobalPermission(el, binding, vnode);
    }
  }
};

export default directives;
