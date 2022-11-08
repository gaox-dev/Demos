export function whatsYourName(name: string) {
    console.log(name);
}

export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator }

export default {
    name: 'a'
}
