import { Button } from './components/common/form/element/Button'
import { Input } from './components/common/form/element/Input'
import { CheckBox } from './components/common/form/element/CheckBox';
import { Select } from './components/common/form/element/Select';

export const App = () => {

  const handler = () => {
    console.log("hello")
  }

  const fruits = [
    { id: 1, name: 'りんご' },
    { id: 2, name: 'バナナ' },
    { id: 3, name: 'メロン' },
  ]

  return (
    <div className="App">
      <Button
        onClick={handler}
        type='reset'
        name='testButton'
        className='resetButton'
      >
        <span>次へ</span>
      </Button>

      <Input
        onFocus={handler}
        name='testInput'
        className='inputText'
      />

      <CheckBox
        name="fruits"
        defaultChecked={false}
        className='checkBox'
      />

      <Select
        name="fruits"
        className='checkBox'
        option={fruits}
      />

    </div>
  );
}
