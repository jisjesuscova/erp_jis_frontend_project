<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <div>
      <ul>
        <!-- Mostrar elementos en la página actual -->
        <li v-for="item in displayedItems" :key="item.id">{{ item.name }}</li>
      </ul>
      <!-- Paginación -->
      <vue-awesome-paginate
                    :total-items="50"
                    :items-per-page="10"
                    :max-pages-shown="10"
                    v-model="currentPage"
                    :click-handler="goToPage"
                />

    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Elemento 1" },
          { id: 2, name: "Elemento 2" },
          { id: 3, name: "Elemento 3" },
          // ... Agrega más elementos
        ],
        itemsPerPage: 2, // Cantidad de elementos por página
        currentPage: 1, // Página actual
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.items.length / this.itemsPerPage);
      },
      displayedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.items.slice(start, end);
      },
    },
    methods: {
      goToPage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>