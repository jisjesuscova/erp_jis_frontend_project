<!-- Paginator.vue -->
<template>
    <div class="paginator">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
        </button>
    </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    methods: {
        prevPage() {
            this.$emit('update-page', this.currentPage - 1)
        },
        nextPage() {
            this.$emit('update-page', this.currentPage + 1)
        },
    },
}
</script>

<style>
/* Add your CSS styles here */
</style>
