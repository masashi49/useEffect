import {service}  from './TestService';

describe( 'TestService', () => {
    test( "2x2 should be 4", () => {
        const result = service.multiplyNum( 9, 2 );
        expect( result ).toBe( 18 );
    })
})

test( "adding positive numbers is not zero'", () => {
    let a = 0
    let b =0
    for ( a = 1; a < 10; a++ ) {
        for (  b = 1; b < 10; b++ ) {
            expect( a + b ).not.toBe( 0 )
        }
    }
})

test( "null", () => {
    const n = null
    expect( n ).toBeNull()
    expect( n ).toBeDefined()
    expect( n ).not.toBeUndefined()
    expect( n ).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test( "zero", () => {
    const z = 0
    expect( z ).not.toBeNull() //nullじゃない
    expect( z ).toBeDefined()// そんざいする
    expect( z ).not.toBeUndefined() // undefinedじゃない
    expect( z ).not.toBeTruthy()//trueじゃない
    expect(z).toBeFalsy()//falseである
})

test( 'two plus two', () => {
    const value = 2 + 2
    expect( value ).toBeGreaterThan( 3 ) // 引数よりも大きい
    expect( value ).toBeGreaterThanOrEqual( 3.5 ) 
    expect( value ).toBeGreaterThanOrEqual( 4 ) 
    expect( value ).toBeLessThan( 5 ) // 引数より少ない
        expect( value ).toBeLessThanOrEqual( 4 ) // 引数より少ないか同じ
})

test( 'adding floating point numbers', () => {
    const value = 0.1 + 0.2
    console.log( value )
   // expect( value ).toBe( 0.3 ) これは失敗する
    expect( value ).toBe( 0.30000000000000004 )
    expect(value).toBeCloseTo(0.3)
} )
