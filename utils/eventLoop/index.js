const a = () => console.log('a')
const b = () => console.log('b')
const c = () => {
    console.log('c')
    setTimeout(a, 0)
    b()
}
c();