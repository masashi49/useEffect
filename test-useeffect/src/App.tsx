import { useRef } from 'react';
import { Button } from './components/common/form/element/Button'
import { Input } from './components/common/form/element/Input'
import { CheckBox } from './components/common/form/element/CheckBox';
import { Select } from './components/common/form/element/Select';
import { TextArea } from './components/common/form/element/TextArea';
import { Seach } from './components/common/form/element/Seach';

import { CustomHook } from './components/common/form/element/CustomHook/CustomHook'

export const App = () => {

  const handler = () => {
    console.log("hello")
  }

  const fruits = [
    { id: 1, name: 'りんご' },
    { id: 2, name: 'バナナ' },
    { id: 3, name: 'メロン' },
  ]

  const ref = useRef<HTMLButtonElement>(null!)
  const catchRef = () => {
    console.log(ref.current)
  }

  return (

    <div className="App">
      <button onClick={catchRef}>Buttonのref.current</button>
      <Button
        onClick={handler}
        type='reset'
        name='testButton'
        className='resetButton'
        ref={ref}
      >
        <span>次へ</span>
      </Button>

      <br />

      <Input
        onFocus={handler}
        name='testInput'
        className='inputText'
      />

      <br />
      <CheckBox
        name="fruits"
        defaultChecked={false}
        className='checkBox'
      />
      <br />

      <Select
        name="fruits"
        className='checkBox'
        option={fruits}
      />

      <br />
      <TextArea
        onFocus={handler}
        name='testInput'
        className='textArea'
        placeholder='ご要望'
      />

      <Seach />

      <CustomHook />
    </div>
  );
}
