<template>
    <div class="data">
        <span v-if="pages">Here are the pages, with {{ pages.result.length }} pages</span>
        <span v-else>Nothing found</span>
        <pre>{{ pages ? pages.result : 'Please fill the form down below, to get data' }}</pre>
    </div>
    <div>
        <div class="form" >
            <label for="name">Please enter a Name</label>
            <input type="text" id="name" v-model="name">
            <label for="title">Please enter a Title</label>
            <input type="text" id="title" v-model="title">
            <label for="description">Please enter a Description</label>
            <input type="text" id="description" v-model="description">
            <button @click="submitForm">Submit</button>
        </div>
    </div>
    <div class="delete">
        Delete random page - > <button @click="deletePage">Delete</button>
    </div>
</template>

<script setup>
const pages = ref('');
const title = ref('');
const name = ref('');
const description = ref('');

onMounted(async () => {
    const data = await $fetch('/api/query?col=pages')
    console.log('DATA', data);
    pages.value = data
})

const submitForm = (async () => {
    console.log(name.value, title.value, description.value)
    // const data = await $fetch('/api/query?col=pages')
    const body = {
        name : name.value,
        title: title.value,
        description: description.value,
    }
    // await $fetch('/api/add/')
    // await fetchPost('/api/add', {data});
    // const url = '/api/add'
    await $fetch('/api/add', {method: 'post', body})
    pages.value = await $fetch('/api/query?col=pages')
    clearForm();
})

const clearForm = (() => {
    name.value = ''
    title.value = ''
    description.value = ''
})

const deletePage = (async () => {
    function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

    const rndInt = randomIntFromInterval(1, 3)
    console.log(rndInt)
    const body = {id: pages.value.result[rndInt].id, col: 'pages'}
    console.log(body)
    await $fetch('/api/delete', {method: 'post', body})
})
</script>

<style scoped>

.data {
    border: 1px solid #777;
    padding: 20px;
    margin-bottom: 20px;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input, button {
    padding: 10px;
}

</style>