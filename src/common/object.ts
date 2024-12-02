type MaybeObject = Object | null | undefined;

export default class ObjectUtils {

    public static isEmpty(obj: MaybeObject): boolean {
        return obj == null;
    }

    public static isNotEmpty(obj: MaybeObject): obj is Object {
        return obj != null;
    }

    public static isBlank(obj: MaybeObject): boolean {
        return this.isNotEmpty(obj) && Object.keys(obj).length === 0;
    }

    public static isNotBlank(obj: MaybeObject): boolean {
        return this.isNotEmpty(obj) && Object.keys(obj).length > 0;
    }

    public static isEmptyOrBlank(obj: MaybeObject): boolean {
        return this.isEmpty(obj) || this.isBlank(obj);
    }

    public static isNotEmptyAndBlank(obj: MaybeObject): boolean {
        return this.isNotEmpty(obj) && this.isBlank(obj);
    }

    public static isNotEmptyOrBlank(obj: MaybeObject): boolean {
        return !this.isEmptyOrBlank(obj);
    }

    public static isEmptyOrNotBlank(obj: MaybeObject): boolean {
        return !this.isNotEmptyAndBlank(obj);
    }
}