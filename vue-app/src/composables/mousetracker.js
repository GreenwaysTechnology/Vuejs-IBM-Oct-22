import { onMounted, onUnmounted, ref } from 'vue'
//all composable functions start with "use" convention only / not syntax
export default function useMouseTracker() {
    const x = ref(0)
    const y = ref(0)

    const update = event => {
        x.value = event.pageX
        y.value = event.pageY
    }
    //Life cycle
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })

    //return values
    return {
        x,y
    }

}