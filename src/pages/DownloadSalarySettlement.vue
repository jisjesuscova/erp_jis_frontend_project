<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
                <!-- SVG spinner -->
                <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">
                Liquidaciones de Sueldos
            </h2>
           
            
           
            <div class="-m-1.5 overflow-x-auto pt-12">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                        <div class="overflow-hidden">
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            RUT
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Empleado
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Estado
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <tr
                                        v-for="payroll_employee in payroll_employees"
                                        :key="payroll_employee.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            {{ payroll_employee.visual_rut }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ payroll_employee.names }}
                                            {{ payroll_employee.father_lastname }}
                                            {{ payroll_employee.mother_lastname }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <button
                                                type="button"
                                                @click="
                                                    generateSalarySettlement(
                                                        payroll_employee.rut
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i
                                                    class="fa-solid fa-arrow-down"
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            loading: false,
            rut_input: '',
            father_lastname_input: '',
            period_input: '',
            data: [],
            payroll_employees: [],
            payroll_managements_inputs: [],
            amount_input: 0,
            massive_amount_input: 0,
            total_amount: 0,
            payroll_item_input: ''
        }
    },
    methods: {
        async generateSalarySettlement() {
            var logo = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/logo.png'
            )

            var company_signature = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/signature.png'
            )

            var visual_rut = localStorage.getItem('visual_rut')

            var signature_type_id = localStorage.getItem('signature_type_id')

            var current_date =
                'Santiago, ' + this.formatDateToCustomFormat(new Date())

            const vacationRows = this.pdf_progressive_vacations.map(
                (vacation) => [
                    vacation.id,
                    this.formatDate(vacation.since),
                    this.formatDate(vacation.until),
                    vacation.days,
                ]
            )

            
            const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'Liquidaciones de Remuneraciones',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: this.period_input,
                            bold: true,
                            alignment: 'center',
                            fontSize: 6,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                    [
                                        {
                                            text: [
                                                {
                                                    text: 'Feriado Legal: ',
                                                    bold: true,
                                                },
                                                {
                                                    text:
                                                        this
                                                            .progressive_legal_holiday +
                                                        ' Días',
                                                },
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 20],
                                        },
                                        {
                                            text: [
                                                {
                                                    text: 'Días Tomados: ',
                                                    bold: true,
                                                },
                                                {
                                                    text:
                                                        this
                                                            .progressive_taken_days +
                                                        ' Días',
                                                },
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                        {
                                            text: [
                                                {
                                                    text: 'Saldo Total: ',
                                                    bold: true,
                                                },
                                                {
                                                    text:
                                                        this
                                                            .progressive_balance +
                                                        ' Días',
                                                },
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                    ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                    [
                                        { text: 'Id', bold: true },
                                        { text: 'Desde', bold: true },
                                        { text: 'Hasta', bold: true },
                                        { text: 'Días', bold: true },
                                    ],
                                    ...vacationRows.map((row) => [
                                        row[0],
                                        row[1],
                                        row[2],
                                        row[3],
                                    ]),
                                ],
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10],
                        },
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                    [
                                        {
                                            image: company_signature,
                                            width: 120,
                                            alignment: 'center',
                                            margin: [0, 20, 0, 0],
                                        },
                                        {
                                            text: '',
                                            width: 120,
                                            alignment: 'center',
                                            margin: [0, 20, 0, 0],
                                        },
                                    ],
                                    [
                                        {
                                            text: 'RUT: 76063822-6',
                                            alignment: 'center',
                                            fontSize: 10,
                                            bold: true,
                                            margin: [0, -30, 0, 0],
                                        },
                                        {
                                            text: 'RUT: ' + this.employee_rut,
                                            alignment: 'center',
                                            fontSize: 10,
                                            bold: true,
                                            margin: [0, -30, 0, 0],
                                        },
                                    ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: {
                            table: {
                                widths: ['*', '*'],
                                body: [],
                            },
                            border: 'hidden',
                        },
                    },
                }

            pdfMake.createPdf(docDefinition).download('certificado.pdf')
            
        },
        getBase64ImageFromURL(url) {
            return new Promise((resolve, reject) => {
                var img = new Image()
                img.setAttribute('crossOrigin', 'anonymous')

                img.onload = () => {
                    var canvas = document.createElement('canvas')
                    canvas.width = img.width
                    canvas.height = img.height

                    var ctx = canvas.getContext('2d')
                    ctx.drawImage(img, 0, 0)

                    var dataURL = canvas.toDataURL('image/png')

                    resolve(dataURL)
                }

                img.onerror = (error) => {
                    reject(error)
                }

                img.src = url
            })
        },
        async payrollEmployees() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.get(
                    'http://localhost:8000/payroll_employees/' + this.period_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                console.log(response)
                this.loading = false
                this.payroll_employees = response.data.message

            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los totales:', error)
                }
            }
        },
    },
    async mounted() {
        const opened_period = localStorage.getItem('opened_period')
        if (opened_period != null && opened_period != 'null' && opened_period != '' && opened_period != 'undefined' && opened_period != undefined) {
            this.period_input = opened_period
        } else {
            this.$router.push(
                '/open_period'
                )
        }

        this.payrollEmployees()
    },
}
</script>
