



export function memorize (target:object,propertyKey:string,descriptor:PropertyDescriptor) {

    const originalFn = descriptor.value

    descriptor.value = memo(originalFn)

    return descriptor
}

function memo(fn) {
    var cache = new Map();
    return (p) => {
        if(cache.has(p)){
            return cache.get(p);
        }
        const value = fn(p);
        cache.set(p,value);
        return value
    }
}

