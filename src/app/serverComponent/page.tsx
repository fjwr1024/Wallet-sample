import { use } from 'react'

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/test')
//   return res.json()
// }

type Test = {
  content: string
}

export default function Page() {
  // const tests: Test[] = use(getData())

  return (
    <>
      <h1>ServerComponentTest</h1>
      {/* {tests.map((test, i) => {
        return <div key={i}>{test.content}</div>
      })} */}
    </>
  )
}
