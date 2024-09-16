import React from 'react'

interface FormatterProps {
  value?: string
  // eslint-disable-next-line no-unused-vars
  render: (props: RenderProps) => React.ReactElement
}

interface RenderProps {
  children: string
  key: number
}

const Formatter: React.FC<FormatterProps> = ({ value, render }) => {
  if (!value) {
    return <></>
  }

  const paragraphs = value.split('\n\n')

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />} {/* Render <br /> after the first paragraph */}
          {render({
            key: index,
            children: paragraph,
          })}
        </React.Fragment>
      ))}
    </>
  )
}

export default Formatter
