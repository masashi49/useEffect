import {sum}  from './sum';

test( 'adds 1 + 2 to equal 3', () => {
    expect( sum( 1, 2 ) ).toBe( 3 );
});

test( 'objext assingment', () => {
    const data = { one: 1 }
    data[ "two" ] = 2
    expect(data).toEqual({one:1,two:2})
})
