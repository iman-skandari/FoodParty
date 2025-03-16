export type FoodListProps = {
    list: {
        id: string
        cookTimeMinutes: number
        cuisine: string
        difficulty: string
        image: string
        ingredients: string[]
        instructions: string[]
        name: string
        prepTimeMinutes: number
        tags: string[]
    }[]
}
