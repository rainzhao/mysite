
const defineConstant = (data, name, value) => {
    Object.defineProperty(data,name, {
        value: value,
        writable: false,
        enumerable: true
    })
};

module.exports = defineConstant;









