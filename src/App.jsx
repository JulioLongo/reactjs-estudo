import { Post } from "./Post"
import { Header } from "./components/Header"


export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Julio"
        content="teste 1" />
      <Post
        author="Nath"
        content="teste 2" />
    </div>
  )
}


