import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Nationality from './components/Nationality.vue'
import Pention from './components/Pention.vue'
import Bank from './components/Bank.vue'
import BranchOffice from './components/BranchOffice.vue'
import Employee from './components/Employee.vue'
import PersonalDataEmployee from './components/PersonalDataEmployee.vue'
import Forgot from './components/Forgot.vue'
import CreateEmployee from './components/CreateEmployee.vue'
import ExtraDataEmployee from './components/ExtraDataEmployee.vue'
import LaborDataEmployee from './components/LaborDataEmployee.vue'
import FamilyDataEmployee from './components/FamilyDataEmployee.vue'
import KardexDataEmployee from './components/KardexDataEmployee.vue'
import UniformDataEmployee from './components/UniformDataEmployee.vue'
import SettlementDataEmployee from './components/SettlementDataEmployee.vue'
import VacationDataEmployee from './components/VacationDataEmployee.vue'
import MedicalLicenseDataEmployee from './components/MedicalLicenseDataEmployee.vue'
import CreateFamilyDataEmployee from './components/CreateFamilyDataEmployee.vue'
import CreateUniformDataEmployee from './components/CreateUniformDataEmployee.vue'
import EditFamilyDataEmployee from './components/EditFamilyDataEmployee.vue'
import CreateKardexDataEmployee from './components/CreateKardexDataEmployee.vue'
import CreateMedicalLicenseEmployee from './components/CreateMedicalLicenseEmployee.vue'
import Honorary from './components/Honorary.vue'
import CreateHonorary from './components/CreateHonorary.vue'
import EditHonorary from './components/EditHonorary.vue'
import Pdf from './components/Pdf.vue'
import CreateVacation from './components/CreateVacation.vue'
import UploadVacation from './components/UploadVacation.vue'
import UploadMedicalLicense from './components/UploadMedicalLicense.vue'
import CreateProgressiveVacation from './components/CreateProgressiveVacation.vue'
import UploadProgressiveVacation from './components/UploadProgressiveVacation.vue'
import CreateContractEmployee from './components/CreateContractEmployee.vue'
import SalarySettlementEmployee from './components/SalarySettlementEmployee.vue'
import DocumentManagementEmployee from './components/DocumentManagementEmployee.vue'
import CreateDocumentManagementEmployee from './components/CreateDocumentManagementEmployee.vue'
import ShowVacationDataEmployee from './components/ShowVacationDataEmployee.vue'
import RequestedDocumentManagementEmployee from './components/RequestedDocumentManagementEmployee.vue'

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
        path:'/family_data_employee/:rut',
        component: FamilyDataEmployee
    },
    {
        path:'/kardex_data_employee/:rut',
        component: KardexDataEmployee
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
        path:'/create_family_employee/:rut',
        component: CreateFamilyDataEmployee
    },
    {
        path:'/create_uniform_employee/:rut',
        component: CreateUniformDataEmployee
    },
    {
        path:'/edit_family_employee/:rut/:id',
        component: EditFamilyDataEmployee
    },
    {
        path:'/create_kardex_employee/:rut',
        component: CreateKardexDataEmployee
    },
    {
        path:'/create_medical_license_employee/:rut',
        component: CreateMedicalLicenseEmployee
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
        path:'/edit_honorary_employee/:id',
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
        path:'/document_management_employee/:rut',
        component: DocumentManagementEmployee
    },
    {
        path:'/create_document_management_employee/:rut',
        component: CreateDocumentManagementEmployee
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