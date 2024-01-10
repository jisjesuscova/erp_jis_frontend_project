<template>
  <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
        Buscador
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 p-4 md:p-5">
      <input
          type="text"
          id="first_name"
          class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="RUT"
          v-model="rut_input"
          v-mask="['########-X']"
          required
        />
      <input
          type="text"
          id="last_name"
          class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Nombre"
          v-model="names_input"
          required
        />
      <input
          type="text"
          id="last_name"
          class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Apellido Paterno"
          v-model="father_lastname_input"
          required
        />
    </div>
    <div class="grid grid-cols-3 gap-4 p-4 md:p-5">
      <input
          type="text"
          id="first_name"
          class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Apellido Materno"
          v-model="mother_lastname_input"
          required
        />
      <select v-model="branch_office_input" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">- Sucursal -</option>
        <option v-for="branch_office in branch_offices" :key="branch_office.id" :value="branch_office.id">{{ branch_office.branch_office }}</option>
      </select>
      <select v-model="status_input" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">- Estatus -</option>
        <option value="1">Activo</option>
        <option value="2">Desvinculado</option>
        <option value="3">Voluntario</option>
      </select>
    </div>
    <div class="grid grid-cols-8 gap-4 p-4 md:p-5">
      <button type="button" @click="passEvent" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Buscar
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <button type="button" class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
        Limpiar
        <i class="fa-solid fa-eraser"></i>
      </button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import {mask} from 'vue-the-mask'

export default {
  directives: {mask},
  props: {
    modelValue: Object
  },
  data() {
    return {
      loading: true,
      branch_offices: [],
      rut_input: '',
      names_input: '',
      father_lastname_input: '',
      mother_lastname_input: '',
      status_input: 1,
      branch_office_input: ''
    };
  },
  methods: {
    passEvent() {
      const searchData = {
        rut_input: this.rut_input,
        names_input: this.names_input,
        father_lastname_input: this.father_lastname_input,
        mother_lastname_input: this.mother_lastname_input,
        branch_office_input: this.branch_office_input,
        status_input: this.status_input
      };
      
      this.$emit('searchData', searchData);
    }
  },
  async created() {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.get('https://apijis.com/branch_offices/', {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
        },
      });

      this.branch_offices = response.data.message;

      this.loading = false;
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        localStorage.removeItem('accessToken');
        window.location.reload();
      } else {
        console.error('Error al obtener la lista de sucursales:', error);
      }
    }
  }
};
</script>
  
  
  
  
  