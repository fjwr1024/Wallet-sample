import { FC, PropsWithChildren } from 'react'

const TestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>ServerComponentLayoutHeader</div>
      {children}
    </div>
  )
}

export default TestLayout
