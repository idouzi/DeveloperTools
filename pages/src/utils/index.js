class utils {
    /**
     * 获取URL的指定参数值
     * @param {String} key 参数名
     * @return {String} 参数值或null
     */
    static getQueryValue(key) {
        let reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
        let value = window.location.search.substr(1).match(reg);

        if (value != null) {
            return unescape(value[2]);
        }
        return null;
    }
}

export default utils;
