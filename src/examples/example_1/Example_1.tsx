import React, {ChangeEvent, FC, useCallback, useState} from 'react'

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10}

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }

//+ Task 1
//+ If change value on input Title component not re-render
//+ If change value on input Example_1 component not re-render

export const Example_1 = () => {
  console.log('example')

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Input />
      <Title title="I am a title" />
    </div>
  )
}

const Input = () => {
  console.log('input')

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  return <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
  
}

const Title = React.memo((props: { title: string }) => {
  console.log('title')

  return <h3>{props.title}</h3>
})