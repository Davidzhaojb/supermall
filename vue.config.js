module.exports = {
    // 配置别名
    configureWebpack: {
        resolve: {
            // alias 别名
            alias: {
                // 默认的配置 "@":"src"
                'assets': '@/assets',
                'commom': '@/commom',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}