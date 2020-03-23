function palindrome(str: String) : boolean {
    let tmp: String = str.replace(/\W/g, '')
    console.log(tmp)
    console.log(tmp.split(' ').reverse().join(' '))
    return tmp.toLowerCase() == tmp.split('').reverse().join('').toLowerCase()
}

console.log(palindrome('Yo, banana boy!'))
