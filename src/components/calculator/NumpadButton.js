import React from 'react'
import Button from 'react-bootstrap/Button'

/* component to define button structure */
export default function NumpadButton(props) {
  const { content, styles, fn } = props;

  return (
    <Button
      onClick={() => { fn(content) }}
      key={content}
      className={styles}
      size="lg"
      value={content}
    >
      {content}
    </Button>
  )
}