const url1 = 'http://www.course-api.com/react-tours-project'

async function getTours() {
    try {
        const response = await fetch(url1)

        if (!response.ok) {
            console.log("Something went wrong with the URL")
            return
        }

        const tours = await response.json()

        tours.map((tour: any) => {
            console.log(tour.name)
        })
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : "Unknown error occurred"
        console.log(errMsg)
    }
}

getTours()
