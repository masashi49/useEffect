import React, { createContext, useState, Dispatch, SetStateAction, useContext } from "react"
import { Children } from "./Children"


type SetChildTypeObject = {
    setChild: Dispatch<SetStateAction<number>>
}
type SetGrChildTypeObject = {
    setGrandChild: Dispatch<SetStateAction<number>>
}
type SetGrGrChildTypeObject = {
    setGreatGrandChild: Dispatch<SetStateAction<number>>
}

// これはNG。valueに与える型定義が必要。(setChild, setGrandChild, setGreatGrandChild )
//export const setStateChildContext = createContext<number>(0) 

// 型アサーションで方を付与する。setStateChildContextはSetChildTypeObjectをもつ事を担保できた
export const setStateChildContext = createContext({} as SetChildTypeObject)
export const setGrStateChildContext = createContext({} as SetGrChildTypeObject)
export const setGrGrStateChildContext = createContext({} as SetGrGrChildTypeObject)


export const useChildCounter = () => {
    return useContext(setStateChildContext)
}
export const useGrChildCounter = () => {
    return useContext(setGrStateChildContext)
}
export const useGrGrChildCounter = () => {
    return useContext(setGrGrStateChildContext)
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
            <setStateChildContext.Provider value={{ setChild }}>
                <setGrStateChildContext.Provider value={{ setGrandChild }}>
                    <setGrGrStateChildContext.Provider value={{ setGreatGrandChild }}>
                        <Children />
                    </setGrGrStateChildContext.Provider>
                </setGrStateChildContext.Provider>
            </setStateChildContext.Provider>
        </div>
    )
}
