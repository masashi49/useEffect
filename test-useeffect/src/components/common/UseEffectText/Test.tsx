import { useEffect, useState } from "react"

export const UseEffectTest = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = String(count)
    }, [count])

    const incre = () => {
        return setCount(count => count + 1)
    }
    const alertState = () => {
        return setTimeout(() => {
            alert(count)
        }, 1000)
    }

    return (<div>
        <div>
            <button onClick={incre}>増えるincre</button>
            <button onClick={alertState}>アラート表示alertState</button>
            {count}
            <p>この場合、クリックしたタイミングのstateが表示(キャプチャ)される</p>
        </div>



        <dt>useEffectのライフサイクル</dt>
        <dd>
            useEffectとは、毎回レンダーの後に呼ばれる。<br />
            componentDidMount、componentDidUpdate 、ComponentWillUnmountがまとまったもの<br />
            初回のレンダー時、毎回の更新時に呼び出される<br />
            (componentDidMount + conponentDidUpdate)
        </dd>
        <dt>useEffectのアンマウント</dt>
        <dd>
            useEffectの中で、返り値を定義する<br />
            return () ＝＞ clearInterval(id)
        </dd>
        <dt>useEffectにまとめすぎない</dt>
        <dd>
            副作用のないようによって、定義を分けるのがよい。
        </dd>
        <dt>useEffectが動くタイミングを操作する</dt>
        <dd>(第一引数)),[ここに入れる])として、第二引数に渡す。stateなどの値を入れておくと、その変更を検知して動く。<br />
            []からにするとレンダー時に1度だけ動いき、それ以降動かない。
        </dd>
    </div>)
}
