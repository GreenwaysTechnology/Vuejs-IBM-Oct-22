<script>
export default {
    setup() {
        //state declarations 
        const firstName = 'Subramanian'
        const lastName = 'Murugan'
        //encapsulate this data into object
        // return {
        //     firstName: firstName,
        //     lastName:lastName
        // }
        return {
            firstName, lastName // es 6 destructuring stynax
        }
    }
}
</script>
<template>
    <h1>Name {{firstName}} {{lastName}}</h1>
</template>
<style>

</style>