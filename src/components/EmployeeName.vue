<template>
    <h1 class="text-3xl dark:text-white pb-10">
        <strong>Trabajador:</strong> {{ names }}
    </h1>
</template>

<script>
export default {
    props: {
        names: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
</style>