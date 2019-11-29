import { useEffect, useState } from "react"

const [user, setUser] = useState<Response[]>([])


interface Response {


}
const getUser = async () => {

    let res = await fetch(`https://api.github.com/users/${searchInput}/repos?sort=pushed`)
    let user = await res.json()
    setUser(user)

}


useEffect(() => {

    getUser()
})

const searchInput = "Placeholder"