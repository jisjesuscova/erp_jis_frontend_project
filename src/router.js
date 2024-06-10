import { createWebHistory, createRouter } from "vue-router";
import Bank from './pages/Bank.vue'
import Slider from './pages/Slider.vue'
import JisParkingImages from './pages/JisParkingImages.vue'
import JisParkingLogo from './pages/JisParkingLogo.vue'
import UploadJisParkingLogo from './pages/UploadJisParkingLogo.vue'
import AboutUs from './pages/AboutUs.vue'
import Blog from './pages/Blog.vue'
import UploadBlog from './pages/UploadBlog.vue'
import Contact from './pages/Contact.vue'
import Zone from './pages/Zone.vue'
import Segment from './pages/Segment.vue'
import Principal from './pages/Principal.vue'
import Health from './pages/Health.vue'
import PayrollItem from './pages/PayrollItem.vue'
import JobPosition from './pages/JobPosition.vue'
import BranchOffice from './pages/BranchOffice.vue'
import CreateEmployeeContract from './pages/CreateEmployeeContract.vue'
import CreateDocumentManagement from './pages/CreateDocumentManagement.vue'
import CreateEmployee from './pages/CreateEmployee.vue'
import CreateFamily from './pages/CreateFamily.vue'
import CreatePayrollItem from './pages/CreatePayrollItem.vue'
import CreateJobPosition from './pages/CreateJobPosition.vue'
import CreateBank from './pages/CreateBank.vue'
import CreateSegment from './pages/CreateSegment.vue'
import CreatePrincipal from './pages/CreatePrincipal.vue'
import CreateZone from './pages/CreateZone.vue'
import CreateBranchOffice from './pages/CreateBranchOffice.vue'
import CreateHealth from './pages/CreateHealth.vue'
import CreatePention from './pages/CreatePention.vue'
import CreateNationality from './pages/CreateNationality.vue'
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
import EditPayrollItem from './pages/EditPayrollItem.vue'
import EditBank from './pages/EditBank.vue'
import EditPrincipal from './pages/EditPrincipal.vue'
import EditZone from './pages/EditZone.vue'
import EditSegment from './pages/EditSegment.vue'
import EditBranchOffice from './pages/EditBranchOffice.vue'
import EditHealth from './pages/EditHealth.vue'
import EditJobPosition from './pages/EditJobPosition.vue'
import EditPention from './pages/EditPention.vue'
import EditHonorary from './pages/EditHonorary.vue'
import ShowHonorary from './pages/ShowHonorary.vue'
import Employee from './pages/Employee.vue'
import ExtraDataEmployee from './pages/ExtraDataEmployee.vue'
import OldExtraDataEmployee from './pages/OldExtraDataEmployee.vue'
import Family from './pages/Family.vue'
import OldFamily from './pages/OldFamily.vue'
import ForgotNewPassword from './pages/ForgotNewPassword.vue'
import ConfirmEmail from './pages/ConfirmEmail.vue'
import NewPassword from './pages/NewPassword.vue'
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
import UploadProgressiveVacation from './pages/UploadProgressiveVacation.vue'
import UploadVacation from './components/UploadVacation.vue'
import Vacation from './pages/Vacation.vue'
import OldVacation from './pages/OldVacation.vue'
import Alert from './pages/Alert.vue'
import Schedule from './pages/Schedule.vue'
import ScheduleProcess from './pages/ScheduleProcess.vue'
import ScheduleProcessCalendar from './pages/ScheduleProcessCalendar.vue'
import SchedulePdfCalendar from './pages/SchedulePdfCalendar.vue'
import CreateMesh from './pages/CreateMesh.vue'
import CreateSchedule from './pages/CreateSchedule.vue'
import UploadEmployeeContract from './pages/UploadEmployeeContract.vue'
import GeneralSalarySettlement from './pages/GeneralSalarySettlement.vue'
import CreateSalarySettlement from './pages/CreateSalarySettlement.vue'
import PreviredIndicator from './pages/PreviredIndicator.vue'
import PayrollManagement from './pages/PayrollManagement.vue'
import OpenPeriod from './pages/OpenPeriod.vue'
import PeriodDatum from './pages/PeriodDatum.vue'
import ManualInput from './pages/ManualInput.vue'
import BulkPayrollManualInput from './pages/BulkPayrollManualInput.vue'
import PayrollCalculation from './pages/PayrollCalculation.vue'
import FamilyBurden from './pages/FamilyBurden.vue'
import WorkingDays from './pages/WorkingDays.vue'
import SecondCategoryTax from "./pages/SecondCategoryTax.vue";
import SocialLaw from "./pages/SocialLaw.vue";
import SocialLawMovement from "./pages/SocialLawMovement.vue";
import DownloadSalarySettlement from "./pages/DownloadSalarySettlement.vue";
import BulkFamilyBurden from './pages/BulkFamilyBurden.vue'

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
        path:'/slider',
        component: Slider
    },
    {
        path:'/jis_parking_images',
        component: JisParkingImages
    },
    {
        path:'/jis_parking_logo',
        component: JisParkingLogo
    },
    {
        path:'/upload_jis_parking_logo',
        component: UploadJisParkingLogo
    },
    {
        path:'/about_us',
        component: AboutUs
    },
    {
        path:'/contact',
        component: Contact
    },
    {
        path:'/blog',
        component: Blog
    },
    {
        path:'/upload_blog',
        component: UploadBlog
    },
    {
        path:'/zones',
        component: Zone
    },
    {
        path:'/segments',
        component: Segment
    },
    {
        path:'/principals',
       component: Principal
    },
    {
        path:'/health',
        component: Health
    },
    {
        path:'/payroll_item',
        component: PayrollItem
    },
    {
        path:'/job_positions',
        component: JobPosition
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
        path:'/forgot_new_password/',
        component: ForgotNewPassword
    },
    {
        path:'/confirm_email/:rut',
        component: ConfirmEmail
    },
    {
        path:'/new_password/:rut',
        component: NewPassword
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
        path:'/create_payroll_item/',
        component: CreatePayrollItem
    },
    {
        path:'/create_job_position/',
        component: CreateJobPosition
    },
    {
        path:'/create_bank/',
        component: CreateBank
    },
    {
        path:'/create_segment/',
        component: CreateSegment
    },
    {
        path:'/create_principal/',
        component: CreatePrincipal
    },
    {
        path:'/create_zone/',
        component: CreateZone
    },
    {
        path:'/create_branch_office/',
        component: CreateBranchOffice
    },
    {
        path:'/create_health/',
        component: CreateHealth
    },
    {
        path:'/create_pention/',
        component: CreatePention
    },
    {
        path:'/create_nationality/',
        component: CreateNationality
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
        path:'/edit_payroll_item/:id',
        component: EditPayrollItem
    },
    {
        path:'/edit_bank/:id',
        component: EditBank
    },
    {
        path:'/edit_principal/:id',
        component: EditPrincipal
    },
    {
        path:'/edit_zone/:id',
        component: EditZone
    },
    {
        path:'/edit_segment/:id',
        component: EditSegment
    },
    {
        path:'/edit_branch_office/:id',
        component: EditBranchOffice
    },
    {
        path:'/edit_health/:id',
        component: EditHealth
    },
    {
        path:'/edit_job_position/:id',
        component: EditJobPosition
    },
    {
        path:'/edit_pention/:id',
        component: EditPention
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
        path:'/show_honorary/:id',
        component: ShowHonorary
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
        path:'/schedule',
        component: Schedule
    },
    {
        path:'/schedule_process',
        component: ScheduleProcess
    },
    {
        path:'/schedule_process_calendar',
        component: ScheduleProcessCalendar
    },
    {
        path:'/schedule_pdf_calendar',
        component: SchedulePdfCalendar
    },
    {
        path:'/create_schedule',
        component: CreateSchedule
    },
    {
        path:'/create_mesh',
        component: CreateMesh
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
        path:'/previred_indicators',
        component: PreviredIndicator
    },
    {
        path:'/payroll_management',
        component: PayrollManagement
    },
    {
        path:'/open_period',
        component: OpenPeriod
    },
    {
        path:'/period_data',
        component: PeriodDatum
    },
    {
        path:'/manual_inputs',
        component: ManualInput
    },
    {
        path:'/create_bulk_payroll_manual_inputs',
        component: BulkPayrollManualInput
    },
    {
        path:'/payroll_calculation',
        component: PayrollCalculation
    },
    {
        path:'/family_burdens',
        component: FamilyBurden
    },
    {
        path:'/working_days',
        component: WorkingDays
    },
    {
        path:'/second_category_taxes',
        component: SecondCategoryTax
    },
    {
        path:'/social_laws',
        component: SocialLaw
    },
    {
        path:'/social_law_movements',
        component: SocialLawMovement
    },
    {
        path:'/download_salary_settlements',
        component: DownloadSalarySettlement
    },
    {
        path:'/create_bulk_family_burdens',
        component: BulkFamilyBurden
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router