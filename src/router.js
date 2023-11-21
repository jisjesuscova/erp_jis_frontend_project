import { createWebHistory, createRouter } from "vue-router";
import Bank from './pages/Bank.vue'
import BranchOffice from './pages/BranchOffice.vue'
import CreateEmployeeContract from './pages/CreateEmployeeContract.vue'
import CreateDocumentManagement from './pages/CreateDocumentManagement.vue'
import CreateEmployee from './pages/CreateEmployee.vue'
import CreateFamily from './pages/CreateFamily.vue'
import CreateHonorary from './pages/CreateHonorary.vue'
import CreateKardexDocument from './pages/CreateKardexDocument.vue'
import CreateMedicalLicense from './pages/CreateMedicalLicense.vue'
import CreateProgressiveVacation from './pages/CreateProgressiveVacation.vue'
import CreateUniform from './pages/CreateUniform.vue'
import CreateVacation from './pages/CreateVacation.vue'
import CreateEndDocumennt from './pages/CreateEndDocument.vue' 
import CalculateEndDocument from './pages/CalculateEndDocument.vue'
import DocumentManagement from './pages/DocumentManagement.vue'
import EditFamily from './pages/EditFamily.vue'
import EditHonorary from './pages/EditHonorary.vue'
import Employee from './pages/Employee.vue'
import ExtraDataEmployee from './pages/ExtraDataEmployee.vue'
import OldExtraDataEmployee from './pages/OldExtraDataEmployee.vue'
import Family from './pages/Family.vue'
import OldFamily from './pages/OldFamily.vue'
import Forgot from './pages/Forgot.vue'
import Home from './pages/Home.vue'
import Honorary from './pages/Honorary.vue'
import KardexDocument from './pages/KardexDocument.vue'
import OldKardexDocument from './pages/OldKardexDocument.vue'
import LaborData from './pages/LaborData.vue'
import OldLaborData from './pages/OldLaborData.vue'
import MedicalLicense from './pages/MedicalLicense.vue'
import OldMedicalLicense from './pages/OldMedicalLicense.vue'
import Nationality from './pages/Nationality.vue'
import Pention from './pages/Pention.vue'
import PersonalData from './pages/PersonalData.vue'
import OldPersonalData from './pages/OldPersonalData.vue'
import RequestedDocumentManagement from './pages/RequestedDocumentManagement.vue'
import SalarySettlement from './pages/SalarySettlement.vue'
import OldSalarySettlement from './pages/OldSalarySettlement.vue'
import SettlementDataEmployee from './components/SettlementDataEmployee.vue'
import ShowVacation from './pages/ShowVacation.vue'
import Uniform from './pages/Uniform.vue'
import OldUniform from './pages/OldUniform.vue'
import UploadMedicalLicense from './components/UploadMedicalLicense.vue'
import UploadProgressiveVacation from './components/UploadProgressiveVacation.vue'
import UploadVacation from './components/UploadVacation.vue'
import Vacation from './pages/Vacation.vue'
import OldVacation from './pages/OldVacation.vue'
import Alert from './pages/Alert.vue'
import UploadEmployeeContract from './pages/UploadEmployeeContract.vue'
import GeneralSalarySettlement from './pages/GeneralSalarySettlement.vue'
import CreateSalarySettlement from './pages/CreateSalarySettlement.vue'
import PreviredIndicator from './pages/PreviredIndicator.vue'
import PayrollManagement from './pages/PayrollManagement.vue'

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
        component: PersonalData
    },
    {
        path:'/old_employee/:rut',
        component: OldPersonalData
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
        path:'/extra_data/:rut',
        component: ExtraDataEmployee
    },
    {
        path:'/old_extra_data/:rut',
        component: OldExtraDataEmployee
    },
    {
        path:'/labor_data/:rut',
        component: LaborData
    },
    {
        path:'/old_labor_data/:rut',
        component: OldLaborData
    },
    {
        path:'/family/:rut',
        component: Family
    },
    {
        path:'/old_family/:rut',
        component: OldFamily
    },
    {
        path:'/kardex_document/:rut',
        component: KardexDocument
    },
    {
        path:'/old_kardex_document/:rut',
        component: OldKardexDocument
    },
    {
        path:'/uniform/:rut',
        component: Uniform
    },
    {
        path:'/old_uniform/:rut',
        component: OldUniform
    },
    {
        path:'/settlement/:rut',
        component: SettlementDataEmployee
    },
    {
        path:'/vacation/:rut',
        component: Vacation
    },
    {
        path:'/old_vacation/:rut',
        component: OldVacation
    },
    {
        path:'/medical_license/:rut',
        component: MedicalLicense
    },
    {
        path:'/old_medical_license/:rut',
        component: OldMedicalLicense
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
        path:'/create_vacation/:rut',
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
        path:'/create_contract/:rut',
        component: CreateEmployeeContract
    },
    {
        path:'/create_end_document/:rut',
        component: CreateEndDocumennt
    },
    {
        path:'/calculate_end_document/:rut',
        component: CalculateEndDocument
    },
    {
        path:'/salary_settlement/:rut',
        component: SalarySettlement
    },
    {
        path:'/old_salary_settlement/:rut',
        component: OldSalarySettlement
    },
    {
        path:'/salary_settlement',
        component: GeneralSalarySettlement
    },
    {
        path:'/document_management/:rut',
        component: DocumentManagement
    },
    {
        path:'/document_managements',
        component: DocumentManagement
    },
    {
        path:'/create_document_management/:rut',
        component: CreateDocumentManagement
    },
    {
        path:'/show_vacation/:rut/:id',
        component: ShowVacation
    },
    {
        path:'/requested_document_management/:rut',
        component: RequestedDocumentManagement
    },
    {
        path:'/show_vacation/:id',
        component: ShowVacation
    },
    {
        path:'/alerts/:rut',
        component: Alert
    },
    {
        path:'/upload_employee_contract/:rut/:id',
        component: UploadEmployeeContract
    },
    {
        path:'/create_salary_settlement',
        component: CreateSalarySettlement
    },
    {
        path:'/previred_indicator',
        component: PreviredIndicator
    },
    {
        path:'/payroll_management',
        component: PayrollManagement
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router