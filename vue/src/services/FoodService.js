import axios from 'axios'

export default {
    addFood(food) {
        return axios.post('/foods', food)
    },
    getFoodByMeal(meal) {
        return axios.get('/foods', meal)
    }
}