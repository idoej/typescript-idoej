class Str {
    static lower(s: string) : string {
        return s.toLowerCase();
    }
    static upper(s: string) : string {
        return s.toUpperCase();
    }
    static capitalize(s: string) : string {
        return s.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    static reverse(s: string) : string {
        return s.split('').reverse().join('');
    }
    static contains(text: string, search: string) : boolean {
        return text.indexOf(search) != -1
    }
    static random(length?: number) : string {
        if (!length) {
            length = 16;
        }
        let result:string           = '';
        let characters:string       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength:number = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static slug(s: string, separator?: string) : string {
        if (!separator) separator = '-'

        return s.toLowerCase()
            .replace(/ /g, separator)
            .replace(/[^\w-]+/g,'');
    }
    static count(s: string) : number {
        return s.length;
    }
    static countWords(s: string) : number {
        return s.split(' ').length;
    }
    static trim(s: string, length?: number, suffix?:string) : string {
        if (!length) length = 100
        if (!suffix) suffix = '...'
        if (s.length <= length) return s
        return s.substr(0, 100) + suffix;
    }
    static trimWords(s: string, length?: number, suffix?:string) : string {
        if (!length) length = 30
        if (!suffix) suffix = '...'
        let arr: string[] = s.split(' ')
        if (arr.length <= length) return s
        return arr.slice(0, length).join(' ') + suffix;
    }
}

console.log(Str.lower('Asdas'))
console.log(Str.upper('Asdas'))
console.log(Str.capitalize('asdas zxc'))
console.log(Str.reverse('Asdas'))
console.log(Str.contains('ini buku saya', 'saya'))
console.log(Str.random())
console.log(Str.random(5))
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
console.log(Str.slug(title))      // javascript-typescript-dart-bahasa-mana-yang-akan-populer-di-2018
console.log(Str.slug(title, '_')) // javascript_typescript_dart_bahasa_mana_yang_akan_populer_di_2018
console.log(Str.count('lorem ipsum'))
console.log(Str.countWords('lorem ipsum'))

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

console.log(Str.trim('Less than 100 characters')) // Less than 100 characters

console.log(Str.trim(text)) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

console.log(Str.trim(text, 20)) // Lorem ipsum dolor si...

console.log(Str.trim(text, 20, '·····')) // Lorem ipsum dolor si·····

const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

console.log(Str.trimWords('Less than 30 words')) // Less than 30 words

console.log(Str.trimWords(text2)) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

console.log(Str.trimWords(text2, 3)) // Lorem ipsum dolor...

console.log(Str.trimWords(text2, 3, '·····')) // Lorem ipsum dolor·····
