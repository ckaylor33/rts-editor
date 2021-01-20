import { useState } from 'react'

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'John', age: 28 },
  { name: 'Barry', age: 43 },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name
    })
    setUser(foundUser)
  }
  return (
    <div>
      User Search
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      ></input>
      <button onClick={onClick}>Search User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
