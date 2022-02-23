import { Builder } from '@builder.io/react'

export const BuilderTestComponent = (props) => (
  <h1
    className="bg-blue-500 max-w-lg text-center mx-auto p-4 mb-4"
    style={{ color: props.color }}
  >
    {props.title}
  </h1>
)

Builder.registerComponent(BuilderTestComponent, {
  name: 'BuilderTestComponent',
  inputs: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'I am a custom Builder.io component heading! :D',
    },
    {
      name: 'color',
      type: 'color',
      defaultValue: 'white',
    },
  ],
})
