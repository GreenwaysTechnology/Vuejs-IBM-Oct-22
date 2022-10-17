<script setup>
// function display(profile) {
//     console.log(profile.id)
//     console.log(profile.name)
//     console.log(profile.address.city)
// }
function display(profile) {
    //destrcturing sytax;
    const { id, name, address: { city } } = profile
    console.log(id)
    console.log(name)
    console.log(city)
}
display({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }
})
</script>
<template>
    <h1>Object destructuring</h1>
</template>