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

    useEffect(() => {
        // setTimeout(() => {
        //     console.log(count)
        // }, 2000)
    })

    useEffect(() => {
        const id = setInterval(() => {
            setCount((c) => {
                console.log(c)
                return c + 1
            })
            console.log(count)
        }, 1000)
        return () => clearInterval(id)
    }, []) // defsを空にした。1秒毎にカウントアップしたいのに、カウントが止まってしまう。
    // これは、処理が停止しているわけではない、永遠と1秒毎に動いている。
    // カウントが変わった後際レンダリングされていないので、ずっと同じカウント(この場合0)に+1されている。
    // countを修理しているのではなく、レンダリングされた時のcountを常に呼び続けている。

    return (
        <div>
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
        </div>
    )
}
