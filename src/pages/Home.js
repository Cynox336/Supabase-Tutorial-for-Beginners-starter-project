import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {
    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmothies] = useState(null)

    useEffect(() => {
      const fetchSmoothies = async () => {
        const { data, error } = await supabase
          .from("smothies")
          .select()
          if (error) {
            setFetchError("Could not fetch the smoothies")
            setSmothies(null)
            console.log(error)
          }
          if (data)
            setSmothies(data)
            setFetchError(null)
      }
      fetchSmoothies()
    })

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          {smoothies.map(smoothie => (
            <p>{smoothie.title}</p>
          ))}
          </div>
      )}
    </div>
  )
}

export default Home