import React, { createContext, useState, Dispatch, SetStateAction,useContext } from "react"
import { Children } from "./Children"


type SetTypeObject = {
    setChild: Dispatch<SetStateAction<number>>
    setGrandChild: Dispatch<SetStateAction<number>>
    setGreatGrandChild: Dispatch<SetStateAction<number>>
}

// これはNG。valueに与える型定義が必要。(setChild, setGrandChild, setGreatGrandChild )
//export const setStateContext = createContext<number>(0) 

// 型アサーションで方を付与する。setStateContextはSetTypeObjectをもつ事を担保できた
export const setStateContext = createContext({} as SetTypeObject)


export const useCounter = () => {
    return useContext(setStateContext)
}

export const Parent = () => {
    const [child, setChild] = useState<number>(0)
    const [grandChild, setGrandChild] = useState<number>(0)
    const [greatGrandChild, setGreatGrandChild] = useState<number>(0)
    return (
        <div>
            親コンポーネントです
            <div>
                <span>子:{child}</span>
                <span>孫:{grandChild}</span>
                <span>ひ孫:{greatGrandChild}</span>
            </div>

            {
                // valueに対しての型定義をする必要がある。今回はsetなので、set用に型定義する
                // オブジェクトとして渡すので、objで型をつける
            }<br /><br />
            <setStateContext.Provider value={{ setChild, setGrandChild, setGreatGrandChild }}>
                <Children />
            </setStateContext.Provider>
        </div>
    )
}
