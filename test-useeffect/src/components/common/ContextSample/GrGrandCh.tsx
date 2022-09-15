
import { useCounter } from "./Parent"


export const GrGrandChildren = () => {
    const { setGreatGrandChild } = useCounter() // 型定義なので、setChildが入っていることが保証されている
    return (
        <div>
            孫ですよ
            <input type="number"
                defaultValue={0}
                onChange={(e) => setGreatGrandChild(Number(e.target.value))} /> {/*e.target.valueはstringなので、Numberで型変更*/}
        </div>
    )
}
