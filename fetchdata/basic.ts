const url = 'http://www.course-api.com/react-tours-project'

async function FetchData(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.log("check url")
            return 'url fail'
        }

        const data = await response.json()
        console.log(data)
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : "There was an error"
        console.log(errMsg)
    }
}

FetchData(url)
