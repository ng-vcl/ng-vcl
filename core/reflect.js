export function defineMetadata(key, value, target) {
    Reflect.defineMetadata(key, value, target);
}
export function getMetadata(key, target) {
    return Reflect.getMetadata(key, target);
}
