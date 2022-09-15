
import { useCounter } from "./Parent"

export const GrGrandChildren = () => {
    // 親で呼び出し用のカスタムフックを用意しているので、ここでuseContextを呼ばなくてOK
    const { setGreatGrandChild } = useCounter()
    return (
        <div>
            孫ですよ
            <input type="number"
                defaultValue={0}
                onChange={(e) => setGreatGrandChild(Number(e.target.value))} /> {/*e.target.valueはstringなので、Numberで型変更*/}
        </div>
    )
}
