// 注意这个方法在入口文件里没有被调用过
//最终会被 Rollup 剔除
export function square ( x ) {
    return x * x;
}

//入口文件需要调用到的求立方值的方法
export function cube ( x ) {
    return x * x * x;
}