<script>
export default {
    //data
    data() {
        //Models 
        return {
            firstName: 'Subramanian',
            lastName: 'Murugan',
            status:true,
            points:100,
            address: {
                city:'Coimbatore'
            }
        }
    }
}
</script>
<template>
    <h1>Name {{firstName}} {{lastName}}</h1>
    <h2>Status {{status}}</h2>
    <h2>Points {{points}}</h2>
    <h2>City {{address.city}}</h2>
</template>
<style>

</style>