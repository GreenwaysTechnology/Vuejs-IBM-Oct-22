<script setup>
import { reactive } from 'vue'

const persons = [
    {
        id: 1,
        name: 'A',
        friends: [
            {
                name: 'F1'
            },
            {
                name: 'F2'
            },
            {
                name: 'F3'
            }
        ]
    },
    {
        id: 2,
        name: 'B',
        friends: [
            {
                name: 'BF1'
            },
            {
                name: 'BF2'
            },
            {
                name: 'BF3'
            }
        ]
    },
    {
        id: 3,
        name: 'C',
        friends: [
            {
                name: 'CF1'
            },
            {
                name: 'CF2'
            },
            {
                name: 'CF3'
            }
        ]
    }
]

const list = reactive(persons)

</script>
<template>
    <div>
        <ul>
            <li v-for="person in list">
                <span>{{person.name}}</span>
                <ul>
                    <li v-for="friend of person.friends">
                            <span>{{friend.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>