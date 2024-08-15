import { useParams } from '@remix-run/react'

export default function Gaming() {
  const { gamingId } = useParams()
  return <h1> Gaming: {gamingId}</h1>
}
