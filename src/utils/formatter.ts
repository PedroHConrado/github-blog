export function dateFormatter(date: string) {
    const today = new Date()
    const quantityOfDays = new Date(date)
    const differenceInTime = today.getTime() - quantityOfDays.getTime()

    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

    return createStringOfDate(differenceInDays)
}

function createStringOfDate(differenceInDays: number) {
    switch (differenceInDays) {
        case 0:
          return "Hoje"
        case 1:
            return "Há 1 dia"
        default:
          return `Há ${differenceInDays} dias`
    }
}