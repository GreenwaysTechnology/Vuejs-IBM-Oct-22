import { onMounted, ref } from 'vue';

export default function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    function fetchData() {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                data.value = response
                console.log(data.value)
            }).catch(err => {
                console.log('error')
                error.value = err
            })
    }
    onMounted(() => {
        fetchData()
    })
    return {
        data, error
    }
}