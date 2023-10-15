<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <Searcher />
      
      <div class="flex flex-col pt-10">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-4 pr-0">
                            <div class="flex items-center h-5">
                                <input id="hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                                <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                            </div>
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Banco</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700" >
                        <tr v-for="bank in banks" :key="bank.id">
                            <td class="py-3 pl-4">
                            <div class="flex items-center h-5">
                                <input id="hs-table-pagination-checkbox-1" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                                <label for="hs-table-pagination-checkbox-1" class="sr-only">Checkbox</label>
                            </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ bank.id }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ bank.bank }}</td>
                        </tr>

                       
                        </tbody>
                    </table>
                    </div>
                    <div class="py-1 px-4">
                    <nav class="flex items-center space-x-2">
                        <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
                        <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
                        <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
                        <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                        <span class="sr-only">Next</span>
                        <span aria-hidden="true">»</span>
                        </a>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Searcher from '../components/Searcher.vue';
import axios from 'axios';

export default {
    components: {
      Searcher
    },
    data() {
        return {
          banks: [],
        }
    },
    async created() {
      try {
        const response = await axios.get('https://apijis.com/banks/', {
          headers: {
            accept: 'application/json',
          },
        });
        this.banks = response.data.message;
      } catch (error) {
        console.error('Error al obtener la lista de bancos:', error);
      }
    },
}
</script>

