<script setup>
import { ref } from 'vue';

const mail = ref('')
const checked = ref(true)
const choice = ref("Male")

const values = ref([])

const selected = ref('')

const toggle = ref(true)
const truthyValue = "Yes"
const falsyValue ="No"
const courses = ref(["Vue", "React", "Angular", "MicroServices"])
</script>
<template>
  
    <div>
        <h2>{{ mail }}</h2>
        <label id="mail">Mail</label>
        <textarea v-model="mail" />
    </div>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{checked}}</label>
    </div>
    <div>
        <h1>Course Information</h1>

        <input type="checkbox" id="frontend" value="frontEnd" v-model="values" />
        <label for="frontend">Front End</label>
        <input type="checkbox" id="backend" value="BackEnd" v-model="values" />
        <label for="backend">Back End</label>
        <input type="checkbox" id="devops" value="Dev Ops" v-model="values" />
        <label for="devoops">Dev Ops</label>
    </div>
    <div>
        {{ values }}
    </div>
    <div>
        <h1>Select any One</h1>
        <input type="radio" id="Male" value="Male" checked v-model="choice" />
        <label for="Male">Male</label>
        <input type="radio" id="Female" value="Female" v-model="choice" />
        <label for="Female">FeMale</label>
    </div>
    <div>
        {{ choice }}
    </div>

    <div>
        <select v-model="selected">
            <option disabled value>Select Your choice</option>
            <option v-for="course of courses">{{ course }}</option>
        </select>
    </div>
    <div>
        {{ selected }}
    </div>

    <hr/>
    <div>
        <input type="checkbox" :true-value="truthyValue" checked :false-value="falsyValue" v-model="toggle" />
        <label for="Toggle">Toggle</label>
    </div>
    <div>
        <!-- {{toggle ? "Yes" : "No"}} -->
        {{ toggle }}
    </div>
</template>