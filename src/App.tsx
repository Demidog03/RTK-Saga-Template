import './App.css'
import {useEffectOnce, useUpdateEffect} from 'usehooks-ts'
import {useDispatch} from 'react-redux'
import {fetchDeletePost, fetchPosts, postsSelector} from './store/post/post.slice.ts'
import {useSelector} from './store'
import {Pane, Text} from 'evergreen-ui'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelector)

  useEffectOnce(() => {
    dispatch(fetchPosts())
  })

  useUpdateEffect(() => {
    console.log(posts)
  }, [posts])

  function handleDeletePost(id: number) {
    dispatch(fetchDeletePost({id}))
  }
  return (
    <>
      <Pane display="grid" padding={24} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr)', gap: '30px'}}>
        {posts.map(post =>
            <Pane
                key={post.id}
                elevation={1}
                padding={24}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                backgroundColor="white"
                gap={16}
                onClick={() => handleDeletePost(post.id)}
            >
              <Text size={500}>{post.title}</Text>
              <Text size={300}>{post.body}</Text>
            </Pane>
        )}
      </Pane>
    </>
  )
}

export default App
