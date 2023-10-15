import { createWebHistory, createRouter } from "vue-router";
import Bank from './pages/Bank.vue'
import BranchOffice from './components/BranchOffice.vue'
import CreateContractEmployee from './pages/CreateContractEmployee.vue'
import CreateDocumentManagement from './pages/CreateDocumentManagement.vue'
import CreateEmployee from './pages/CreateEmployee.vue'
import CreateExtraDataEmployee from './components/CreateExtraDataEmployee.vue'
import CreateFamily from './pages/CreateFamily.vue'
import CreateHonorary from './pages/CreateHonorary.vue'
import CreateKardexDocument from './pages/CreateKardexDocument.vue'
import CreateMedicalLicense from './pages/CreateMedicalLicense.vue'
import CreateProgressiveVacation from './pages/CreateProgressiveVacation.vue'
import CreateUniform from './pages/CreateUniform.vue'
import CreateVacation from './pages/CreateVacation.vue'
import DocumentManagement from './pages/DocumentManagement.vue'
import EditFamily from './pages/EditFamily.vue'
import EditHonorary from './pages/EditHonorary.vue'
import Employee from './pages/Employee.vue'
import ExtraDataEmployee from './pages/ExtraDataEmployee.vue'
import Family from './pages/Family.vue'
import Forgot from './pages/Forgot.vue'
import Home from './pages/Home.vue'
import Honorary from './pages/Honorary.vue'
import KardexDocument from './pages/KardexDocument.vue'
import LaborDataEmployee from './components/LaborDataEmployee.vue'
import MedicalLicenseDataEmployee from './components/MedicalLicenseDataEmployee.vue'
import Nationality from './components/Nationality.vue'
import Pention from './components/Pention.vue'
import Pdf from './components/Pdf.vue'
import PersonalDataEmployee from './components/PersonalDataEmployee.vue'
import RequestedDocumentManagementEmployee from './components/RequestedDocumentManagementEmployee.vue'
import SalarySettlementEmployee from './components/SalarySettlementEmployee.vue'
import SettlementDataEmployee from './components/SettlementDataEmployee.vue'
import ShowVacationDataEmployee from './components/ShowVacationDataEmployee.vue'
import UniformDataEmployee from './components/UniformDataEmployee.vue'
import UploadMedicalLicense from './components/UploadMedicalLicense.vue'
import UploadProgressiveVacation from './components/UploadProgressiveVacation.vue'
import UploadVacation from './components/UploadVacation.vue'
import VacationDataEmployee from './components/VacationDataEmployee.vue'


const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/branch_offices',
        component: BranchOffice
    },
    {
        path:'/nationalities',
        component: Nationality
    },
    {
        path:'/pentions',
        component: Pention
    },
    {
        path:'/banks',
        component: Bank
    },
    {
        path:'/employees',
        component: Employee
    },
    {
        path:'/employee/:rut',
        component: PersonalDataEmployee
    },
    {
        path:'/forgot',
        component: Forgot
    },
    {
        path:'/create_employee',
        component: CreateEmployee
    },
    {
        path:'/extra_data_employee/:rut',
        component: ExtraDataEmployee
    },
    {
        path:'/labor_data_employee/:rut',
        component: LaborDataEmployee
    },
    {
        path:'/family/:rut',
        component: Family
    },
    {
        path:'/kardex_document/:rut',
        component: KardexDocument
    },
    {
        path:'/uniform_data_employee/:rut',
        component: UniformDataEmployee
    },
    {
        path:'/settlement_data_employee/:rut',
        component: SettlementDataEmployee
    },
    {
        path:'/vacation_data_employee/:rut',
        component: VacationDataEmployee
    },
    {
        path:'/medical_license_data_employee/:rut',
        component: MedicalLicenseDataEmployee
    },
    {
        path:'/create_family/:rut',
        component: CreateFamily
    },
    {
        path:'/create_uniform/:rut',
        component: CreateUniform
    },
    {
        path:'/edit_family/:rut/:id',
        component: EditFamily
    },
    {
        path:'/create_kardex_document/:rut',
        component: CreateKardexDocument
    },
    {
        path:'/create_medical_license/:rut',
        component: CreateMedicalLicense
    },
    {
        path:'/honoraries',
        component: Honorary
    },
    {
        path:'/create_honorary',
        component: CreateHonorary
    },
    {
        path:'/edit_honorary/:id',
        component: EditHonorary
    },
    {
        path:'/pdf',
        component: Pdf
    },
    {
        path:'/vacation_data_employee/:rut',
        component: VacationDataEmployee
    },
    {
        path:'/create_vacation_data_employee/:rut',
        component: CreateVacation
    },
    {
        path:'/upload_vacation_data_employee/:rut/:id',
        component: UploadVacation
    },
    {
        path:'/upload_medical_license_data_employee/:rut/:id',
        component: UploadMedicalLicense
    },
    {
        path:'/create_progressive_vacation_data_employee/:rut',
        component: CreateProgressiveVacation
    },
    ,
    {
        path:'/upload_progressive_vacation_data_employee/:rut/:id',
        component: UploadProgressiveVacation
    },
    {
        path:'/create_contract_employee/:rut',
        component: CreateContractEmployee
    },
    {
        path:'/salary_settlement_employee/:rut',
        component: SalarySettlementEmployee
    },
    {
        path:'/document_management/:rut',
        component: DocumentManagement
    },
    {
        path:'/create_document_management/:rut',
        component: CreateDocumentManagement
    },
    {
        path:'/show_vacation_data_employee/:rut/:id',
        component: ShowVacationDataEmployee
    },
    {
        path:'/requested_document_management_employee/:rut',
        component: RequestedDocumentManagementEmployee
    },
    {
        path:'/show_vacation_data_employee/:id',
        component: ShowVacationDataEmployee
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router