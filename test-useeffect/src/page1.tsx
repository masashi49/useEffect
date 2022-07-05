import { ComponentProps, useRef } from 'react';
import { Img } from './components/common/Img/'

/*
子供が孫を呼び出す。
この時、dataの型がわからない。
*/
// このように、孫よ呼び出すときに方宣言が必要。
type data = {
    image: {
        id: number
        url: string
    }
}

// 孫の方をそのまま取ってくるやり方がある。それがComponentProps
// ComponentPropsを使うことで、下位に存在するコンポーネントのpropsをまとめて取ってくることができる。
type IMGPROPS = ComponentProps<typeof Img>

const Item = ({ image }: IMGPROPS) => {
    return (
        <div>
            <div>
                <Img image={image} />
            </div>
        </div>
    );
}

// これが親
export const Page1 = () => {
    const data = {
        id: 1,
        url: 'asdf'
    }
    return (
        <div>
            <Item image={data}
            />
        </div>
    );
}
