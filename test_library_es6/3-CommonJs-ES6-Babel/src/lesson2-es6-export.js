export function userApi_get_list(){
    console.log('此处仅为console.log：实际应为异步请求，请求后台用户参数：');
    console.log('获取用户参数：');
}

export function userApi_save_info(){
    console.log('此处仅为console.log：实际应为异步请求，请求后台保存用户参数：');
    console.log('保存用户参数：');
}

console.log(`$$$$ES6的规范，EXPORT部分：
首先，我们定义了两个方法，分别是获取用户信息和保存用户信息：
export function userApi_get_list(){
    console.log('此处仅为console.log：实际应为异步请求，请求后台用户参数：');
    console.log('获取用户参数：');
}

export function userApi_save_info(){
    console.log('此处仅为console.log：实际应为异步请求，请求后台保存用户参数：');
    console.log('保存用户参数：');
}
这些都类似API，需要通过请求实现某种功能；
写好这些后，就可以通过别的JS进行引用，然后直接使用EXPORT当中的功能；
`)